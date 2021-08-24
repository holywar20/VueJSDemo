<template>
  <div class="state-list">
  <h4>{{ title }}</h4>
    <div class="state-list-select" multiple>
      <div :key="idx" v-for="( stateObject, idx ) in filteredStateList" 
        class="option"
        :class="{ 'selected' : stateObject.selected , 'highlight' : stateObject.highlight }"
        @click="onClick( stateObject , idx )"
        @dblclick="onDoubleClick( stateObject , idx )"
        :value="stateObject.state"
        >{{ stateObject.state }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StateList',
  props: {
    filtered : String,
    title : String,
    selected : Array,
    listStates : Array
  },
  computed : {
    filteredStateList : function(){
      let list = this.listStates

      /* If we got a valid filter passed in, match on that, else do nothing */
      if( this.filtered ){
        list = this.listStates.filter( ( stateObject ) => {
          return stateObject.state.toUpperCase().match( this.filtered.toUpperCase() );
        }); 
      }
      
      return list
    }
  },
  methods: {
    onClick( stateObject , _idx ){
      this.$emit("stateClicked" , stateObject );
    },
    onDoubleClick( stateObject, _idx ){
      this.$emit("stateDoubleClicked" , stateObject );
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
  height: 300px;

  overflow: auto;
}

.state-list-select .option{
  margin-left: 4px;
  padding-left: 4px;
}

/* class for faking selection state. We aren't permitting selection unless it's a double click, but we
 want user to see it's actually selected */
.state-list-select .option.selected{
  font-weight: bold;
}

.state-list-select .option.highlight{
  background-color: lightgreen;
}

</style>
