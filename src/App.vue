<template>
  <div class="container">
    <h1>National Retail Solutions State Selector</h1>
    
    <div class="row right-justify">
      <Search @changedFilter="onChangedFilter"></Search>
    </div>
    
    <div class="row tri-pane">
      <!-- First list not meant to be filtered -->
      <StateList 
        @stateClicked="onStateClicked"
        @stateDoubleClicked="onStateDoubleClick"

        :filtered="''" 
        :listStates="appStates" 
        :title="`Primary List`"/>
      <StateData
        :countyData="selectedStateCounties" 
        :stateObject="selectedState"/>
      <!-- This list should be filtered -->
      <StateList
        @stateClicked="onStateClicked"
        @stateDoubleClicked="onStateDoubleClick"
        
        :filtered="filter" 
        :listStates="appStates" 
        :title="`Filtered List`"/>
    </div>
  </div>
</template>

<script>

import StateAPI from './services/StateAPI.js';

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
      appStates : [],
      highlightedStates : [],
      selectedStateCounties : [],
      selectedState : null,
      filter : ""
    }
  },
  // Life cycle methods
  async mounted(){
    var data = await StateAPI.getStates();
    this.appStates = data;
  },
  methods : {
    // Responses to emit requests
    onChangedFilter( filterText ){
      this.filter = filterText;
    },
    async onStateClicked( stateObject ){
      var data = await StateAPI.getCounties( stateObject );

      this.selectedStateCounties = data;
      this.selectedState = stateObject;
      
      this.appStates.forEach( ( sObject ) => {
        if( stateObject.state == sObject.state )
          sObject.selected = true;
        else
          sObject.selected = false;
      });
    },
    onStateDoubleClick( stateObject ){
      this.appStates.forEach( ( sObject ) => {
        if( stateObject.state == sObject.state ){
          sObject.highlight = !sObject.highlight;
        } 
      });
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
