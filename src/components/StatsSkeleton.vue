<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="n in 8"
        :key="n"
        cols="12"
        sm="6"
        md="6"
        lg="3"
        xl="3"
      >
        <v-skeleton-loader
          class="mx-auto"
          min-width="200"
          max-height="100"
          type="image"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
