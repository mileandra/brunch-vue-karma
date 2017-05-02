<template>
  <div>
    <h1>{{greeting}}</h1>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: mapGetters(['greeting'])
  }
</script>
<style></style>
