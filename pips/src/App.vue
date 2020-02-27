<template>
  <div id="appSplash">
      <b-button @click="togglePages('register')">Register</b-button>  
     <b-button @click="togglePages('show')">Show Data</b-button>
     <b-button @click="togglePages()">Hide</b-button>
     
     <Register 
    
     v-if="registerActive"
     />

    <!-- <SaveData v-bind:findObjFromParent="findObjFromRegister"/> -->

     <ShowData 
     v-if="showActive"
     />
    {{findObjFromRegister.species}}-{{findObjFromRegister.location}}-{{findObjFromRegister.date}} <button v-on:click="toggleEditMode">EDIT</button>
    <!-- <EditData if="editMode"/> -->
  </div>
</template>

<script>
import Register from "./components/Register.vue";
import ShowData from "./components/ShowData.vue";
import SaveData from "./components/SaveData.vue";


export default {
  name: 'app',
  components:{
    Register,
    ShowData,
    SaveData
  },
  data(){
    return {
      registerActive: false,
      showActive: false,
      editMode: false,
      findObjFromRegister: {},
    }      
  },
  methods:{
    togglePages(chosenPage){
      if(chosenPage == 'register'){
        this.registerActive = !this.registerActive
        if(this.showActive == true) this.showActive = false
      }
     else if(chosenPage == 'show'){
         this.showActive = !this.showActive
         if(this.registerActive == true) this.registerActive = false
      }
      else{
        this.registerActive = false
        this.showActive = false
      }
      
    },
    toggleEditMode(){
      this.editMode = !this.editMode
    },
    // saveDataFromRegister(value){
    //   console.log(value.species + " value fra child")
    // this.findObjFromRegister = value
    // },
    
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
