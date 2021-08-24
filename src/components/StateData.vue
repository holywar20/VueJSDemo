<template>
  <div class="state-data">
    <h4>State Data</h4>

    <div class="state-data-table">
      <div class="row">
        <span>State Name</span>
        <span></span>
      </div>
      <div class="row">
        <span>Population Name</span>
        <span></span>
      </div>
      <div class="row">
        <span>Counties</span>
        <span></span>
      </div>
      <div class="row">
        <span>Pop. Discrepency</span>
        <span>+ x in counties</span>
        <!-- <span>-x in counties</span> -->
      </div>
    </div>
    
    <hr>

    <div class="county-data-table">
      <div class="row-header">
        <span>County</span>
        <span>Population</span>
      </div>
      <div :key="county.county" v-for="county in countyData">
        <span>{{ county.county }}</span>
        <span>{{ county.population }}</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'StateData',
  props : {
    stateData : Object,
    discrepency : Number,
    countyData : []
  },
  computed : {
    discrepency : {

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
  background-color: lightgray;
  width: 95%;
  margin-left: auto;
  margin-right: auto; 
}

.county-data-table .row-header{
  font-weight: bold;
  display: flex;
}

.county-data-table .row-header span{
  flex-grow:1;
}
</style>