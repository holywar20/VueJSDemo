<template>
    <h3>Search</h3> &nbsp;
    <input class="search-input"
      @keypress="onChange()"

    />
</template>

<script>
export default {
  name: 'Header',
  components: {},
  methods : {
    onChange(){
      console.log("Bluring!")
    }
  }
}
</script>

<style scoped>
.search-input{
  border: 1px solid black;
  border-radius: 10px;
}
</style>