<template>
    <h3>Search</h3> &nbsp;
    <input class="search-input"
      @input="$emit('changedFilter' , filterText )"
      v-model="filterText"
    />
</template>

<script>
export default {
  name: 'Header',
  components: {},
  props : {
    filterText : String
  },
  emits:['changedFilter']
}
</script>

<style scoped>
.search-input{
  border: 1px solid black;
  border-radius: 10px;
}
</style>