<template>
  <div class="home">
    <Stats class="mt-n4" />
    <Table class="mt-n6"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Stats from '@/components/Stats.vue'
import Table from '@/components/Table.vue'

export default {
  name: 'Home',
  components: {
    Stats,
    Table
  }
}
</script>
