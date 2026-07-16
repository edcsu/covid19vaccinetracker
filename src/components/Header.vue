<script setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()

const isDark = computed({
  get: () => theme.global.current.value.dark,
  set: (value) => {
    theme.global.name.value = value ? 'dark' : 'light'
  }
})
</script>

<template>
  <v-app-bar color="primary">
    <v-icon
      class="svg-icon ml-3"
      icon="$corona"
    />
    <div class="ml-1 d-flex align-center font-weight-bold text-white">
      <span class="d-none d-sm-flex"> COVID19 VACCINE </span>
      <span class="ml-1"> TRACKER </span>
    </div>

    <v-spacer />

    <v-tooltip location="bottom">
      <template #activator="{ props }">
        <v-btn
          href="https://github.com/NovelCOVID/awesome-novelcovid"
          target="_blank"
          icon
          v-bind="props"
        >
          <v-icon class="text-white">mdi-seal</v-icon>
        </v-btn>
      </template>
      <span>
        Recognised on Awesome NovelCOVID projects
        <v-icon class="text-white">mdi-hand-pointing-up</v-icon>
      </span>
    </v-tooltip>

    <v-tooltip location="bottom">
      <template #activator="{ props }">
        <v-btn
          href="https://www.linkedin.com/in/ssewannonda-keith-edwin-443303129"
          target="_blank"
          icon
          v-bind="props"
        >
          <v-icon
            class="svg-icon text-white"
            icon="$linkedin"
          />
        </v-btn>
      </template>
      <span>
        Connect on LinkedIn
        <v-icon class="text-white">mdi-hand-pointing-up</v-icon>
      </span>
    </v-tooltip>

    <v-tooltip location="bottom">
      <template #activator="{ props }">
        <v-btn
          href="https://twitter.com/skeith696"
          target="_blank"
          icon
          v-bind="props"
        >
          <v-icon
            class="svg-icon text-white"
            icon="$twitter"
          />
        </v-btn>
      </template>
      <span>
        Follow on twitter
        <v-icon class="text-white">mdi-hand-pointing-up</v-icon>
      </span>
    </v-tooltip>

    <v-tooltip location="top">
      <template #activator="{ props }">
        <v-switch
          v-model="isDark"
          hide-details
          inset
          color="info"
          class="ml-5 mr-3"
          v-bind="props"
        />
      </template>
      <span>
        Choose between light and dark
        <v-icon>mdi-hand-pointing-up</v-icon>
      </span>
    </v-tooltip>
  </v-app-bar>
</template>
