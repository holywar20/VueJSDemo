<template>
    <span class="filter-header">Filter</span>
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

  font-size: 1.2em;
}

.filter-header {
  font-size:1.5em;
  font-weight: bold;
  padding: 10px;
}

</style>