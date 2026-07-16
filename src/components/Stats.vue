<script setup>
import { computed } from 'vue'
import { thousandSeperator } from '@/Helpers/helperMethods'

const props = defineProps({
  coverage: {
    type: Object,
    default: null
  },
  countries: {
    type: Array,
    default: () => []
  }
})

const cardColors = ['bg-deep-purple-darken-1', 'bg-light-blue-darken-4', 'bg-lime-darken-2', 'bg-orange']

const cards = computed(() => {
  const globalCards = [
    {
      title: 'Global doses administered',
      value: thousandSeperator(props.coverage?.total ?? 0),
      color: 'bg-info',
      icon: 'mdi-needle',
      location: 'bottom',
      tooltip: `Total COVID-19 vaccine doses administered worldwide as of ${props.coverage?.date ?? 'n/a'}`
    },
    {
      title: 'Doses per 100 people',
      value: thousandSeperator(props.coverage?.totalPerHundred ?? 0),
      color: 'bg-pink-darken-2',
      icon: 'mdi-account-multiple-check',
      location: 'top',
      tooltip: 'Doses administered per 100 people globally'
    },
    {
      title: 'Daily doses',
      value: thousandSeperator(props.coverage?.daily ?? 0),
      color: 'bg-success',
      icon: 'mdi-calendar-today',
      location: 'top',
      tooltip: 'Doses administered on the most recent reporting day'
    },
    {
      title: 'Countries reporting',
      value: thousandSeperator(props.countries.length),
      color: 'bg-amber',
      icon: 'mdi-earth',
      location: 'bottom',
      tooltip: 'Countries that have reported vaccination rollout'
    }
  ]

  const topCountries = props.countries.slice(0, 4).map((row, index) => ({
    title: row.country,
    value: thousandSeperator(row.total),
    color: cardColors[index],
    icon: 'mdi-flag',
    location: 'bottom',
    tooltip: `Total doses administered in ${row.country}`
  }))

  return [...globalCards, ...topCountries]
})
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="card in cards"
        :key="card.title"
        cols="12"
        sm="6"
        md="6"
        lg="3"
        xl="3"
      >
        <v-tooltip :location="card.location">
          <template #activator="{ props: tooltipProps }">
            <v-card
              variant="outlined"
              :class="card.color"
              v-bind="tooltipProps"
            >
              <v-list-item lines="two">
                <v-list-item-title>{{ card.title }}</v-list-item-title>
                <v-list-item-subtitle class="text-h5 font-weight-black">
                  {{ card.value }}
                </v-list-item-subtitle>
                <template #append>
                  <v-icon size="32">{{ card.icon }}</v-icon>
                </template>
              </v-list-item>
            </v-card>
          </template>
          <span>{{ card.tooltip }}</span>
        </v-tooltip>
      </v-col>
    </v-row>
  </v-container>
</template>
