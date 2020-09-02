<template>
  <div
    :class="[
      'home',
      {
        'mb-5': $vuetify.breakpoint.xs
      }
    ]"
  >
    <v-snackbar
        top
        right
        v-model="showSnackbar"
        :timeout="snackbarTimeout"
        :color="snackbarColor"
      >
        {{ snackbarText }}
        <v-btn
          text
          @click="showSnackbar = false"
        >
          Close
        </v-btn>
    </v-snackbar>
    <Stats :totalCandidates=totalCandidates :totalPhases=totalPhases  class="mt-n4" v-if="vaccineLoaded" />
    <StatsSkeleton v-else />
    <Table :candidates=candidates class="mt-n6" v-if="vaccineLoaded"/>
    <TableSkeleton v-else />
    <v-container fluid v-if="vaccineLoaded">
      <v-row>
        <p class="source-text ml-4">
          <strong> Source: </strong>
          <span class="font-italic">{{source}} </span>
        </p>
      </v-row>
    </v-container>
    <SourceSkeleton v-else />
  </div>
</template>

<script>
// @ is an alias to /src
import Stats from '@/components/Stats.vue'
import Table from '@/components/Table.vue'
import StatsSkeleton from '@/components/StatsSkeleton'
import TableSkeleton from '@/components/TableSkeleton'
import SourceSkeleton from '@/components/SourceSkeleton'

import { baseApiUrl, source, totalCandidates, vaccineDetails } from '@/Helpers/apiHelpers'

import {
  getContent
} from '@/Helpers/helperMethods'

export default {
  name: 'Home',

  components: {
    Stats,
    Table,
    StatsSkeleton,
    TableSkeleton,
    SourceSkeleton
  },

  data: () => ({
    totalPhases: [],
    candidates: [],
    totalCandidates: totalCandidates,
    source: source,
    timeInterval: 600000,
    vaccineLoaded: false,
    continentLoaded: false,
    showSnackbar: false,
    snackbarColor: '',
    snackbarText: '',
    snackbarTimeout: 5000
  }),

  created () {
    this.getGlobalDetails()
  },

  mounted () {
    setInterval(() => {
      this.getGlobalDetails()
    }, this.timeInterval)
  },

  methods: {
    async getGlobalDetails () {
      this.vaccineLoaded = false
      try {
        const response = await getContent(baseApiUrl, vaccineDetails.vaccine)
        this.candidates = response.data.data
        this.totalPhases = response.data.phases
        this.source = response.data.source
        this.totalCandidates = response.data.totalCandidates
        this.vaccineLoaded = true
      } catch (error) {
        this.vaccineLoaded = false
        console.error(error)
        this.snackbarText = 'Failed to get data. Refresh again'
        this.snackbarColor = 'error'
        this.showSnackbar = true
      }
    }
  }

}
</script>
