<template>
  <div id="app" class="container">
    <div class="row">
      <div class="co-8">
      <FormWizard    
          @on-complete="onComplete"
          v-if="!isCompleted" 
          class="wizard-progress-bar"
          color="#C16A58"
          >    
      <tab-content class="wizard-tab-content" title="Property Type" :before-change="validatePropertyType" >     
            <PropertyTypeComponent class="wizard-tab-container" 
          v-on:property-type-change="onPropertyTypeChange"  
          />       
      </tab-content>
      <tab-content class="wizard-tab-content" title="Bedroom Prerequisites Info" :before-change="validateBedrooms">
          <NumberTypeInputFieldComponent class="wizard-tab-container" 
          v-bind:value="bedrooms.text"
          v-bind:valid="bedrooms.valid"
          v-bind:validated="bedrooms.validated"
          @input="onBedroomsInput"
          question="How many bedrooms? *"
          />
      </tab-content>
      <tab-content class="wizard-tab-content" title="Bathroom Prerequisites Info" :before-change="validateBathrooms">
        <NumberTypeInputFieldComponent class="wizard-tab-container" 
          v-bind:value="bathrooms.text"
          v-bind:valid="bathrooms.valid"
          v-bind:validated="bathrooms.validated"
          @input="onBathroomsInput"
        question="How many bathrooms? *"
        />
      </tab-content>
      <tab-content class="wizard-tab-content" title="Rental Property Address" :before-change="validateAddress">
          <InputFieldComponent class="wizard-tab-container" 
          v-bind:value="address.text"
          v-bind:valid="address.valid"
          v-bind:validated="address.validated"
          @input="onAddressInput"
          question="What's your rental pro perty's address (Street Address, City, State & Zip) ? *"
          />
      </tab-content>
      <tab-content class="wizard-tab-content" title="Phone number info" :before-change="validatePhone">
          <InputFieldComponent class="wizard-tab-container" 
          v-bind:value="phone.text"
          v-bind:valid="phone.valid"
          v-bind:validated="phone.validated"
          @input="onPhoneInput"
          question="What is the best Phone Number to reach you? *"
          />
      </tab-content>
      <tab-content class="wizard-tab-content" title="Full Name Info" :before-change="validateFullname">
          <InputFieldComponent class="wizard-tab-container" 
          v-bind:value="fullName.text"
          v-bind:valid="fullName.valid"
          v-bind:validated="fullName.validated"
          @input="onFullNameInput"
            question=" What's your full name? *"           
          />
      </tab-content>
      <tab-content class="wizard-tab-content" title="E-mail Address Info" :before-change="validateEmailField">
          <InputFieldComponent class="wizard-tab-container" 
          v-bind:value="email.text"
          v-bind:valid="email.valid"
          v-bind:validated="email.validated"
          @input="onEmailInput"
          question="What is the best email address to reach you? *" 
          />
      </tab-content>
      <template slot="next" slot-scope="props">
        <button :class='"btn btn-primary"'
                        :disabled="props.loading">
          {{props.isLastStep ? 'Done' : 'Next'}}
        </button>
      </template>
      <template slot="prev" scope="props">
        <button :class='"btn btn-primary"'
                        :disabled="props.loading">
          {{props.prevTab ? 'Back' : 'Next'}}
        </button>
      </template>
      <template slot="finish" scope="props">
        <button :class='"btn btn-primary"'
                        :disabled="props.loading">
          {{props.isLastStep ? 'Finish' : 'Back'}}
        </button>
      </template>
      </FormWizard>
        <div class="container" v-if="isCompleted">
          <div class="row">
            <div class="col-md-8 mx-auto">
                <p>{{propertyType}}</p>
                <p>{{bedrooms}}</p>
                <p>{{bathrooms}}</p>
                <p>{{address}}</p>
                <p>{{phone}}</p>
                <p>{{fullName}}</p>
                <p>{{email}}</p>
            </div>
          </div>     
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import InputFieldComponent from './components/InputFieldComponent'
import PropertyTypeComponent from './components/PropertyTypeComponent'
import NumberTypeInputFieldComponent from './components/NumberTypeInputFieldComponent'



export default {
 
  name: 'App',
  components: {
    FormWizard,
    TabContent,
    PropertyTypeComponent,
    InputFieldComponent,
    NumberTypeInputFieldComponent
  },
   data() {
       return {
        propertyType: '',
        bedrooms: {
          text: '',
          valid: false,
          validated: false
        },
        bathrooms: {
          text: '',
          valid: false,
          validated: false
        },
        address: {
          text: '',
          valid: false,
          validated: false
        },
        phone:{
          text: '',
          valid: false,
          validated: false
        },
        fullName:{
          text: '',
          valid: false,
          validated: false
        },
        email:{
          text: '',
          valid: false,
          validated: false
        },
        question:{
          text: '',
          valid: false,
          validated: false
        },
        isCompleted: false
       }
       },
       methods: {
        validateRequired: function(text) {
          return Boolean(text);
        },
        validateNumber: function(text) {
          return !isNaN(text) && Number(text) > 0;
        },
        validateEmail: function(email) {
          const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
          return email.match(reg);
        },
         onBedroomsInput: function (value) {
            this.bedrooms.text = value; // updates the text, if the value is true and if it is a number
            if (this.validateRequired(value) && this.validateNumber(value)) {
              this.bedrooms.valid = true;
            } else {
              this.bedrooms.valid = false;
            }
            this.bedrooms.validated = true;
         },
         onBathroomsInput: function (value) {
            this.bathrooms.text = value;
            if (this.validateRequired(value) && this.validateNumber(value)) {
              this.bathrooms.valid = true;
            } else {
              this.bathrooms.valid = false;
            }
            this.bathrooms.validated = true;
         },
          onAddressInput: function (value) {
            this.address.text = value;
            if (this.validateRequired(value)) {
              this.address.valid = true;
            } else {
              this.address.valid = false;
            }
            this.address.validated = true;
         },
          onPhoneInput: function (value) {
            this.phone.text = value;
            if (this.validateRequired(value)) {
              this.phone.valid = true;
            } else {
              this.phone.valid = false;
            }
            this.phone.validated = true;
         },
        onFullNameInput: function (value) {
            this.fullName.text = value;
            if (this.validateRequired(value)) {
              this.fullName.valid = true;
            } else {
              this.fullName.valid = false;
            }
            this.fullName.validated = true;
         },
         onEmailInput: function (value) {
            this.email.text = value;
            if (this.validateRequired(value) && this.validateEmail(value)) {
              this.email.valid = true;
            } else {
              this.email.valid = false;
            }
            this.email.validated = true;
         },
         onComplete: function() {
           this.isCompleted = true;
         },
        onPropertyTypeChange: function (selected) {
          this.propertyType = selected;
          this.$refs.wizard.nextTab();
        },
        validatePropertyType() {
          return this.validateRequired(this.propertyType);
        },
        validateBedrooms() {
          this.bedrooms.validated = true; // displays the message(looks good or error)
          return this.bedrooms.valid;
        },
        validateBathrooms() {
          this.bathrooms.validated = true;
          return this.bathrooms.valid;
        },
        validateAddress() {
          this.address.validated = true;
          return this.address.valid;
        },
        validatePhone() {
          this.phone.validated = true;
          return this.phone.valid;
        },
        validateFullname() {
          this.fullName.validated = true;
          return this.fullName.valid;
        },
        validateEmailField() {
           this.email.validated = true;
          return this.email.valid;
        }         
     },
    //  computed:{
    //    slotProps () {
    //     return {
    //       nextTab: this.nextTab,
    //       prevTab: this.prevTab,
    //       activeTabIndex: this.activeTabIndex,
    //       isLastStep: this.isLastStep,
    //       fillButtonStyle: this.fillButtonStyle
    //     }
    //   }
    //  } 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
.wizard-tab-content {
  padding: 0!important;
}
.wizard-tab-content .wizard-tab-container {
  animation: fadein 1s;
}

</style>
