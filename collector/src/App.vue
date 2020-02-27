<template>
  <div id="appSplash">
      <b-button @click="togglePages('register')">Register</b-button>  
     <b-button @click="togglePages('show')">Show Data</b-button>
     <b-button @click="togglePages()">Hide</b-button>
     
     <RegisterFinding 
     v-if="isRegisterActive"
     />

     <HandleData
     v-if="isDataHandlerActive"
     />

  </div>
</template>

<script>
import RegisterFinding from "./components/RegisterFinding.vue";
import HandleData from "./components/HandleData.vue";


export default {
  name: 'app',
  components:{
    RegisterFinding,
    HandleData
  },
  data(){
    return {
      isRegisterActive: false,
      isDataHandlerActive: false,
      isEditModeOn: false,
      findObjFromRegister: {},
    }      
  },
  methods:{
    togglePages(chosenPage){
      if(chosenPage == 'register'){
        this.isRegisterActive = !this.isRegisterActive
        if(this.isDataHandlerActive == true) this.isDataHandlerActive = false
      }
     else if(chosenPage == 'show'){
         this.isDataHandlerActive = !this.isDataHandlerActive
         if(this.isRegisterActive == true) this.isRegisterActive = false
      }
      else{
        this.isRegisterActive = false
        this.isDataHandlerActive = false
      }
      
    },
 
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
