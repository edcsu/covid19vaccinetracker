<template>
  <div class="home">
    <Stats :totalCandidates=totalCandidates :totalPhases=totalPhases  class="mt-n4" />
    <Table :candidates=candidates class="mt-n6 mb-8"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Stats from '@/components/Stats.vue'
import Table from '@/components/Table.vue'

import { baseApiUrl, source, totalCandidates, vaccineDetails } from '@/Helpers/apiHelpers'

import {
  getContent
} from '@/Helpers/helperMethods'

export default {
  name: 'Home',

  components: {
    Stats,
    Table
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
        console.log(this.totalPhases)
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
