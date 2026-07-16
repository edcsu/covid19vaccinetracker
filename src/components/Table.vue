<script setup>
import { ref } from 'vue'
import { thousandSeperator } from '@/Helpers/helperMethods'

defineProps({
  countries: {
    type: Array,
    default: () => []
  }
})

const search = ref('')
const itemsPerPage = ref(10)

const headers = [
  {
    title: 'Country',
    align: 'start',
    key: 'country',
    width: 250
  },
  { title: 'Total doses', key: 'total', align: 'end' },
  { title: 'Daily doses', key: 'daily', align: 'end' },
  { title: 'Doses per 100 people', key: 'totalPerHundred', align: 'end' },
  { title: 'Daily per million', key: 'dailyPerMillion', align: 'end' },
  { title: 'Reported', key: 'date', align: 'end' }
]
</script>

<template>
  <v-container fluid>
    <v-card elevation="5">
      <v-card-title class="d-flex align-center">
        COVID19 vaccine doses administered by country
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
        :headers="headers"
        :items="countries"
        :search="search"
        :items-per-page="itemsPerPage"
        item-value="country"
      >
        <template #item.total="{ value }">
          {{ thousandSeperator(value) }}
        </template>
        <template #item.daily="{ value }">
          {{ thousandSeperator(value) }}
        </template>
        <template #item.dailyPerMillion="{ value }">
          {{ thousandSeperator(value) }}
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>
