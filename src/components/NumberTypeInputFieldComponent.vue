<template>
  <div class="row">
    <div class="col-6 mx-auto">
        <h4> {{question}}</h4>
        <input 
        class="form-control"       
        type="number" 
        min="0"
        v-bind:value="value" 
        v-on:input="$emit('input', $event.target.value)" 
        v-bind:class="{ 'is-valid': validated && valid, 'is-invalid': validated && !valid }"
        />   
        <div class="valid-feedback">Looks good</div> 
        <div class="invalid-feedback">Please fill in the empty filed</div>   
    </div>
  </div>
  
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

  export default {
     props: {
         question:{
            type: String,
         },
         value: {
            type: String,
         },
          valid: {
           type: Boolean
         },
         validated: {
           type: Boolean
         },   
    },
     methods: {
     
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
