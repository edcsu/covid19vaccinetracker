<template>
  <v-app-bar app clipped-left color="primary">
    <!-- <v-app-bar-nav-icon @click="$emit('hidesidemenu')"></v-app-bar-nav-icon> -->
    <v-icon class="svg-icon" v-text="'$vuetify.icons.corona'"></v-icon>
    <div class="ml-1 d-flex align-center font-weight-bold white--text">
      <span class="d-none d-sm-flex"> COVID19 VACCINE </span>
      <span class="ml-1"> TRACKER </span>
    </div>

    <v-spacer></v-spacer>

    <!-- <v-tooltip bottom nudge-left="150">
      <template v-slot:activator="{ on }">
        <v-btn
          href="https://github.com/edcsu/covid19vaccinetracker"
          target="_blank"
          icon
          v-on="on"
        >
          <v-icon class="svg-icon white--text" v-text="'$vuetify.icons.github'"></v-icon>
        </v-btn>
      </template>
      <span>
        Recognised on Awesome NovelCOVID projects
        <v-icon class="white--text">mdi-hand-pointing-up</v-icon>
      </span>
    </v-tooltip> -->

    <v-tooltip bottom nudge-left="150">
      <template v-slot:activator="{ on }">
        <v-btn
          href="https://github.com/NovelCOVID/awesome-novelcovid"
          target="_blank"
          icon
          v-on="on"
        >
          <v-icon class="white--text">mdi-seal</v-icon>
        </v-btn>
      </template>
      <span>
        Recognised on Awesome NovelCOVID projects
        <v-icon class="white--text">mdi-hand-pointing-up</v-icon>
      </span>
    </v-tooltip>

    <v-tooltip bottom nudge-left="70">
      <template v-slot:activator="{ on }">
        <v-btn
          href="https://www.linkedin.com/in/ssewannonda-keith-edwin-443303129"
          target="_blank"
          icon
          v-on="on"
        >
          <v-icon class="svg-icon white--text" v-text="'$vuetify.icons.linkedin'"></v-icon>
        </v-btn>
      </template>
      <span>
        Connect on LinkedIn
        <v-icon class="white--text">mdi-hand-pointing-up</v-icon>
      </span>
    </v-tooltip>

    <v-tooltip bottom nudge-left="70">
      <template v-slot:activator="{ on }">
        <v-btn
          href="https://twitter.com/skeith696"
          target="_blank"
          icon
          v-on="on"
        >
          <v-icon class="svg-icon white--text" v-text="'$vuetify.icons.twitter'"></v-icon>
        </v-btn>
      </template>
      <span>
        Follow on twitter
        <v-icon class="white--text">mdi-hand-pointing-up</v-icon>
      </span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-switch
        v-model="$vuetify.theme.dark"
        hide-details
        inset
        v-on="on"
        color="info"
        class="ml-5"
        label=""
        ></v-switch>
      </template>
      <span>
        Choose between light and dark
        <v-icon class="">mdi-hand-pointing-up</v-icon>
      </span>
    </v-tooltip>
  </v-app-bar>
</template>
<script>
export default {
  name: 'Header',

  data: () => ({
    //
  })
}
</script>
