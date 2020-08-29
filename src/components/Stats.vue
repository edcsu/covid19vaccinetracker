<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="6" md="3" lg="3" xl="3" class="">
        <v-card outlined class="info">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="">
                Total nominees
              </v-list-item-title>
              <v-list-item-subtitle class="display-1 font-weight-black">
                {{ totalNominees }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon class="" size="32px">mdi-account-circle</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3" lg="3" xl="3">
        <v-card outlined class="deep-purple darken-1">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="">
                {{ phase3[0].phase }}
              </v-list-item-title>
              <v-list-item-subtitle class="display-1 font-weight-black">
                {{ phase3[0].candidates }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon class="" size="32px">mdi-account-multiple-check</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>

      </v-col>
      <v-col cols="12" sm="6" md="3" lg="3" xl="3">
        <v-card outlined class="light-blue darken-4">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="">
                {{ phase23[0].phase }}
              </v-list-item-title>
              <v-list-item-subtitle class="display-1 font-weight-black">
                {{ phase23[0].candidates }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon class="" size="32px">mdi-doctor</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3" lg="3" xl="3">
        <v-card outlined class="light-green darken-4">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="">
                {{ phase2b[0].phase }}
              </v-list-item-title>
              <v-list-item-subtitle class="display-1 font-weight-black">
                {{ phase2b[0].candidates }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon class="" size="32px">mdi-account-multiple-check</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>

      </v-col>
    </v-row>
    <v-row class="mt-n4">
      <v-col cols="12" sm="6" md="4" lg="2" xl="2">
        <v-card outlined class="success">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="">
                {{ phase2[0].phase }}
              </v-list-item-title>
              <v-list-item-subtitle class="display-1 font-weight-black">
                {{ phase2[0].candidates }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon class="" size="32px">mdi-doctor</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="2" xl="2">
        <v-card outlined class="lime darken-2">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="">
                {{ phase12[0].phase }}
              </v-list-item-title>
              <v-list-item-subtitle class="display-1 font-weight-black">
                {{ phase12[0].candidates }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon size="32px">mdi-account-alert</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="2" xl="2">
        <v-card outlined class="amber">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="">
                {{ phase1[0].phase }}
              </v-list-item-title>
              <v-list-item-subtitle class="display-1 font-weight-black">
                {{ phase1[0].candidates }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon size="32px">mdi-account-multiple-remove</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="3" xl="3">
        <v-card outlined class="yellow darken-3">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="">
                {{ phaseEarly[0].phase }}
              </v-list-item-title>
              <v-list-item-subtitle class="display-1 font-weight-black">
                {{ phaseEarly[0].candidates }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon size="32px">mdi-account-multiple-minus</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="3" xl="3">
        <v-card outlined class="orange">
        <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="">
                {{ phasePre[0].phase }}
              </v-list-item-title>
              <v-list-item-subtitle class="display-1 font-weight-black">
                {{ phasePre[0].candidates }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon size="32px">mdi-account-plus</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Stats',
  props: ['totalCandidates', 'totalPhases'],
  data: () => ({
    right: null
  }),
  computed: {
    totalNominees: function () {
      return this.totalCandidates
    },
    phase3: function () {
      return this.totalPhases.filter(e => e.phase === 'Phase 3')
    },
    phase23: function () {
      return this.totalPhases.filter(e => e.phase === 'Phase 2/3')
    },
    phase2b: function () {
      return this.totalPhases.filter(e => e.phase === 'Phase 2b')
    },
    phase2: function () {
      return this.totalPhases.filter(e => e.phase === 'Phase 2')
    },
    phase12: function () {
      return this.totalPhases.filter(e => e.phase === 'Phase 1/2')
    },
    phase1: function () {
      return this.totalPhases.filter(e => e.phase === 'Phase 1')
    },
    phasePre: function () {
      return this.totalPhases.filter(e => e.phase === 'Pre-clinical')
    },
    phaseEarly: function () {
      return this.totalPhases.filter(e => e.phase === 'Early research')
    }
  }
}
</script>
