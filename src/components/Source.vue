<script setup>
defineProps({
  sourcelink: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <v-container fluid>
    <v-row>
      <p class="ml-4">
        <strong> Source: </strong>
        <span class="font-italic"> {{ sourcelink }} </span>
      </p>
    </v-row>
  </v-container>
</template>
