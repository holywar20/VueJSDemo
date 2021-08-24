<template>
  <div class="container">
    <h1>National Retail Solutions State Selector</h1>
    
    <div class="row right-justify">
      <Search></Search>
    </div>
    
    <div class="row tri-pane">
      <StateList :filtered='null' :listStates="appStates" :title="`Primary List`"/>
      <StateData :stateData="selectedState"/>
      <StateList 
        @testEmit="testEmit()"
        :filtered='filter' 
        :listStates="appStates" 
        :title="`Filtered List`"/>
    </div>
  </div>
</template>

<script>


import StateData from './components/StateData.vue'
import StateList from './components/StateList.vue'
import Search from './components/Search.vue'

export default {
  name: 'App',
  components: {
    StateData, StateList, Search
  },

  data(){
    return { 
      appStates : []
    }
  },
  // Life cycle methods
  created(){
    this.appStates = [{
      "state": "Alabama",
      "population": 4833722,
      "counties": 67,
      "detail": "http://pos.idtretailsolutions.com/countytest/states/Alabama"
    } , {
      "state": "Alaska",
      "population": 735132,
      "counties": 29,
      "detail": "http://pos.idtretailsolutions.com/countytest/states/Alaska"
    }]
  },
  methods : {
    onSelected(){

    },
    testEmit(){
      console.log("testEmit")
    }
  }
}// <-- End of Component -->
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.row {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
}

.right-justify{
  justify-content: flex-end;
}

.tri-pane {
  padding: 5px;
}

.container {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  max-width: 950px;
}
</style>
