<template>
  <v-footer app class="primary">
    <v-card-text
      :class="[
        'pa-0',
        'white--text',
        'd-flex',
        'justify-space-between',
        'font-weight-bold',
        {
          'flex-column': $vuetify.breakpoint.xs
        }
      ]"
    >
      <span class>
        <strong>#WEARMASKINPUBLIC</strong>
      </span>
      <span>
        Visit
        <a
          href="https://covid19globalstatviewer.web.app"
          target="_blank"
          rel="noopener noreferrer"
          class="white--text"
        >
          Global COVID19 stat app
        </a>
        for latest info.
      </span>
    </v-card-text>
  </v-footer>
</template>
