<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="6" md="3" lg="3" xl="3" class="">
        <v-card outlined class="blue lighten-2">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="">
                Total nominees
              </v-list-item-title>
              <v-list-item-subtitle class="display-1 font-weight-black">
                44
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon class="" size="32px">mdi-account-circle</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3" lg="3" xl="3">
        <v-card outlined class="cyan lighten-4">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="">
                Pre-clinical
              </v-list-item-title>
              <v-list-item-subtitle class="display-1 font-weight-black">
                17
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon size="32px">mdi-account-plus</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3" lg="3" xl="3">
        <v-card outlined class="red lighten-1">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="">
                Early research
              </v-list-item-title>
              <v-list-item-subtitle class="display-1 font-weight-black">
                1
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon size="32px">mdi-account-multiple-minus</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="3" lg="3" xl="3">
        <v-card outlined class="red lighten-1">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="">
                Phase 1
              </v-list-item-title>
              <v-list-item-subtitle class="display-1 font-weight-black">
                8
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon size="32px">mdi-account-multiple-remove</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mt-n4">
      <v-col cols="12" sm="6" md="6" lg="2" xl="3">
        <v-card outlined class="orange lighten-2">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="">
                Phase 1/2
              </v-list-item-title>
              <v-list-item-subtitle class="display-1 font-weight-black">
                7
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon size="32px">mdi-account-alert</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="3" xl="3">
        <v-card outlined class="amber">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="">
                Phase 2
              </v-list-item-title>
              <v-list-item-subtitle class="display-1 font-weight-black">
                3
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon class="" size="32px">mdi-doctor</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="2" xl="3">
        <v-card outlined class="success">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="">
                Phase 2b
              </v-list-item-title>
              <v-list-item-subtitle class="display-1 font-weight-black">
                1
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon class="" size="32px">mdi-account-multiple-check</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="2" xl="3">
        <v-card outlined class="amber">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="">
                Phase 2/3
              </v-list-item-title>
              <v-list-item-subtitle class="display-1 font-weight-black">
                3
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon class="" size="32px">mdi-doctor</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="4" lg="3" xl="3">
        <v-card outlined class="success">
          <v-list-item two-line="">
            <v-list-item-content>
              <v-list-item-title class="">
                Phase 3
              </v-list-item-title>
              <v-list-item-subtitle class="display-1 font-weight-black">
                4
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile>
              <v-icon class="" size="32px">mdi-account-multiple-check</v-icon>
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
  props: ['summaryDetails'],
  data: () => ({
    right: null
  }),
  computed: {
    stats: function () {
      return this.summaryDetails
    }
  }
}
</script>
