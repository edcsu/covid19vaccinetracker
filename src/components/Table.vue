<script setup>
import { ref } from 'vue'

defineProps({
  candidates: {
    type: Array,
    default: () => []
  }
})

const search = ref('')
const expanded = ref([])
const itemsPerPage = ref(5)

const headers = [
  {
    title: 'Name',
    align: 'start',
    key: 'candidate',
    width: 250
  },
  { title: 'Phase', key: 'trialPhase', width: 120 },
  { title: 'Mechanism', key: 'mechanism', width: 200 },
  { title: 'Sponsors', key: 'sponsors', width: 330 },
  { title: 'Institutions', key: 'institutions', width: 350 },
  { title: '', key: 'data-table-expand' }
]
</script>

<template>
  <v-container fluid>
    <v-card elevation="5">
      <v-card-title class="d-flex align-center">
        Table of COVID19 Vaccine candidates
        <v-spacer />
        <v-text-field
          v-model="search"
          append-inner-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        />
      </v-card-title>
      <v-data-table
        v-model:expanded="expanded"
        :headers="headers"
        :items="candidates"
        :search="search"
        :items-per-page="itemsPerPage"
        item-value="candidate"
        show-expand
      >
        <template #expanded-row="{ columns, item }">
          <tr>
            <td
              :colspan="columns.length"
              class="pa-4"
            >
              <strong>Background: </strong> {{ item.details.substring(11) }}
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>
