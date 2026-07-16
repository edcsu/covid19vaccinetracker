<script setup>
import { useDisplay } from 'vuetify'

const { xs } = useDisplay()
</script>

<template>
  <v-footer class="bg-primary">
    <v-card-text
      :class="[
        'pa-0',
        'text-white',
        'd-flex',
        'justify-space-between',
        'font-weight-bold',
        {
          'flex-column': xs
        }
      ]"
    >
      <span>
        <strong>#WEARMASKINPUBLIC</strong>
      </span>
      <span>
        Get the latest on
        <a
          href="https://covid19globalstatviewer.web.app"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white"
        >
          COVID19 globally
        </a>
      </span>
      <span>
        Data from
        <a
          href="https://disease.sh"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white"
        >
          NOVELCoVID19 API
        </a>
      </span>
    </v-card-text>
  </v-footer>
</template>
