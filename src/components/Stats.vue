<script setup>
import { computed } from 'vue'

const props = defineProps({
  totalCandidates: {
    type: [Number, String],
    default: ''
  },
  totalPhases: {
    type: Array,
    default: () => []
  }
})

function phase (name) {
  return props.totalPhases.find((e) => e.phase === name) ?? { phase: name, candidates: 0 }
}

const cards = computed(() => [
  {
    title: 'Total candidates',
    value: props.totalCandidates,
    color: 'bg-info',
    icon: 'mdi-needle',
    location: 'bottom',
    tooltip: 'Total vaccine candidates at the moment'
  },
  {
    title: 'Approved',
    value: 0,
    color: 'bg-pink-darken-2',
    icon: 'mdi-shield-check',
    location: 'top',
    tooltip: 'Approved vaccine by regulators in country of origin.'
  },
  {
    title: phase('Phase 3').phase,
    value: phase('Phase 3').candidates,
    color: 'bg-deep-purple-darken-1',
    icon: 'mdi-account-group',
    location: 'top',
    tooltip: 'Larger trials involving thousands of people.'
  },
  {
    title: phase('Phase 2/3').phase,
    value: phase('Phase 2/3').candidates,
    color: 'bg-light-blue-darken-4',
    icon: 'mdi-account-multiple-check',
    location: 'bottom',
    tooltip: 'Combine phases 2 and 3'
  },
  {
    title: phase('Phase 2').phase,
    value: phase('Phase 2').candidates,
    color: 'bg-success',
    icon: 'mdi-account-check',
    location: 'bottom',
    tooltip: 'Larger trials involving hundreds of people.'
  },
  {
    title: phase('Phase 1/2').phase,
    value: phase('Phase 1/2').candidates,
    color: 'bg-lime-darken-2',
    icon: 'mdi-account-arrow-left',
    location: 'bottom',
    tooltip: 'Combine phases 1 and 2'
  },
  {
    title: phase('Phase 1').phase,
    value: phase('Phase 1').candidates,
    color: 'bg-amber',
    icon: 'mdi-account',
    location: 'bottom',
    tooltip: 'Involves a small group of adults.'
  },
  {
    title: phase('Pre-clinical').phase,
    value: phase('Pre-clinical').candidates,
    color: 'bg-orange',
    icon: 'mdi-microscope',
    location: 'bottom',
    tooltip: 'Laboratory research.'
  }
])
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
                <v-list-item-subtitle class="text-h4 font-weight-black">
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
