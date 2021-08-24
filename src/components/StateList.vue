<template>
  <div class="state-list">
  <h4>{{ title }}</h4>
    <select class="state-list-select" v-model="selected" multiple>
      <option :key="state.state" v-for="state in listStates" 
        @click="onClick()"
        @dblclick="onDoubleClick()"
        >{{ state.state }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'StateList',
  props: {
    title : String,
    listStates : []
  },
  methods: {
    onClick(){
      console.log("clicked")
    },
    onDoubleClick(){
      this.$emit('testEmit');
    }
  }
}
</script>

<style scoped>
.state-list{
  width: 300px;
  min-height: 400px;

  border: 1px solid black;
  border-radius: 5px;

  margin: 5px;
}

.state-list-select{
  text-align: left;
  width: 230px;
  min-height: 300px;
}
</style>
