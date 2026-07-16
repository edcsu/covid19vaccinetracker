<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useDisplay } from 'vuetify'

import Stats from '@/components/Stats.vue'
import Table from '@/components/Table.vue'
import StatsSkeleton from '@/components/StatsSkeleton.vue'
import TableSkeleton from '@/components/TableSkeleton.vue'
import SourceSkeleton from '@/components/SourceSkeleton.vue'

import { baseApiUrl, source, vaccineDetails } from '@/Helpers/apiHelpers'
import { getContent } from '@/Helpers/helperMethods'

const { xs } = useDisplay()

const globalCoverage = ref(null)
const countries = ref([])
const timeInterval = 600000
const vaccineLoaded = ref(false)
const showSnackbar = ref(false)
const snackbarColor = ref('')
const snackbarText = ref('')
const snackbarTimeout = 5000

let intervalId = null

async function getGlobalDetails () {
  vaccineLoaded.value = false
  try {
    const [globalResponse, countriesResponse] = await Promise.all([
      getContent(baseApiUrl, vaccineDetails.coverage),
      getContent(baseApiUrl, vaccineDetails.countryCoverage)
    ])

    // last entry of the global timeline is the most recent day
    globalCoverage.value = globalResponse.data.at(-1)

    // flatten each country's single-day timeline into table rows
    countries.value = countriesResponse.data
      .map(({ country, timeline }) => ({ country, ...timeline.at(-1) }))
      .sort((a, b) => b.total - a.total)

    vaccineLoaded.value = true
  } catch (error) {
    vaccineLoaded.value = false
    console.error(error)
    snackbarText.value = 'Failed to get data. Refresh again'
    snackbarColor.value = 'error'
    showSnackbar.value = true
  }
}

getGlobalDetails()

onMounted(() => {
  intervalId = setInterval(getGlobalDetails, timeInterval)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <div
    :class="[
      'home',
      {
        'mb-5': xs
      }
    ]"
  >
    <v-snackbar
      v-model="showSnackbar"
      location="top right"
      :timeout="snackbarTimeout"
      :color="snackbarColor"
    >
      {{ snackbarText }}
      <template #actions>
        <v-btn
          variant="text"
          @click="showSnackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <Stats
      v-if="vaccineLoaded"
      :coverage="globalCoverage"
      :countries="countries"
      class="mt-n4"
    />
    <StatsSkeleton v-else />
    <Table
      v-if="vaccineLoaded"
      :countries="countries"
      class="mt-n6"
    />
    <TableSkeleton v-else />
    <v-container
      v-if="vaccineLoaded"
      fluid
    >
      <v-row>
        <p class="source-text ml-4">
          <strong> Source: </strong>
          <span class="font-italic">{{ source }} </span>
        </p>
      </v-row>
    </v-container>
    <SourceSkeleton v-else />
  </div>
</template>
