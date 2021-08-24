<template>
  <div class="state-data">
    <h4>State Data</h4>

    <div class="state-data-table">
      <div class="row">
        <span>State Name</span>
        <span v-if="stateObject">{{ stateObject.state }}</span>
      </div>
      <div class="row">
        <span>Population</span>
        <span v-if="stateObject">{{ stateObject.population.toLocaleString() }}</span>
      </div>
      <div class="row">
        <span>County Pop.</span>
        <span v-if="stateObject">{{ countyCount.toLocaleString() }}</span>
      </div>
      <div class="row">
        <span>Pop. Discrepency</span>
        <span v-if="stateObject">
          <span class="red-text" v-if="countyCount != stateObject.population">Discrepency Found</span>
          <span class="green-text" v-else>Values Match</span>
        </span>
        <!-- <span>-x in counties</span> -->
      </div>
    </div>
    
    <hr>

    <div class="county-data-table">
      <div class="row-header">
        <span>County <span v-if="stateObject"> (x{{ stateObject.counties }})</span></span>
        <span>Population</span>
      </div>
      <div class="row" :key="county.county" v-for="county in countyData">
        <span>{{ county.county }}</span>
        <span>{{ county.population.toLocaleString() }}</span>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'StateData',
  props : {
    stateObject : Object,
    valuesMatch : Boolean,
    countyData : Array
  },
  computed : {
    countyCount : function(){
      let result = 0;

      this.countyData.forEach( ( county ) =>{
        result += county.population;
      });

      return result;
    }
  }
}
</script>

<style scoped>
/* State data table */
.state-data{
  width: 350px;
  min-height: 400px;

  border: 1px solid black;
  border-radius: 5px;

  margin: 5px;
}

.state-data-table{
  background-color: lightgray;
  border-radius:5px;

  width: 95%;
  margin-left: auto;
  margin-right: auto;
}

.state-data-table .row{
  display: flex;
}

.state-data-table .row span:first-child{
  flex-grow:2;
  padding: 5px;

  font-weight: bold;
  text-align: left;
}
/* lower specificity , so CSS prop above shouldn't override */
.state-data-table .row span{
  flex-grow:1;
  padding: 5px;

  text-align: right;
}

/* County data table */
.county-data-table{
  background-color: white;
  width: 95%;
  margin-left: auto;
  margin-right: auto;

  height: 180px;
  overflow: auto;
}

.county-data-table .row-header{
  font-weight: bold;
  display: flex;
}

.county-data-table .row-header span{
  flex-grow:1;
}

.county-data-table .row{
  display:flex;
}

.county-data-table .row:nth-child(even){
  background-color:lightgray;
}

.county-data-table .row span:first-child{
  text-align: left;
}
/* Above property should override, due to higher CSS specificity */
.county-data-table .row span{
  text-align: right;
  flex-grow:1;
}

span .green-text{
  color : green;
}

span .red-text{
  color : red;
}
</style>