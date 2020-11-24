<template>
  <div class="row">
    <div class="col-6 mx-auto">
      <h4>What type of property are you looking for help with? *</h4>
      <b-form-select 
        v-on:change="$emit('property-type-change', selected)" 
        v-model="selected" 
        :options="options" 
        size="sm" 
        class="mt-3"
      >
      </b-form-select>
      <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


  export default {
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'Single Family', text: 'Single Family' },
          { value: 'Multi-Plex', text: 'Multi-Plex' },
          { value: 'Apartment', text: 'Apartment' },
          { value: 'Commercial', text: 'Commercial' },
        ],
        
      }
      
    },
    methods:{
    onChange:function(event){
       console.log("eywuy", event);
    }
  }
    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}



</style>
