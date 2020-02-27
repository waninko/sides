<template>
  <div>
    <h2>{{ msg }}</h2>
    <table  v-if="!isEditMode">
      <tr v-for="(find, index) in birdFindings" :key="index">
        <td @click="showFindingsFromSpecificLocation(find.location)">{{ find.location }}</td>  
        <td @click="showLocationsOfSpecificSpecies(find.species)">{{ find.species }}</td>
        
        <td><b-button v-on:click="engageEditMode(find.id)">Edit</b-button>
        <b-button @click="deleteFinding(find.id)">DELETE</b-button></td>
      </tr>
    </table>

    <table  v-if="isEditMode"> EDITMODE
      <tr v-for="find in birdFindings" :key="find.id">
        <td v-if="find.id == currentlySelectedID">  {{find.location}}: <br><input placeholder="new location"></td>
      </tr><br>
      <tr v-for="find in birdFindings" :key="find.id">
        <td v-if="find.id == currentlySelectedID">  {{find.species}}: <br><input placeholder="new species"></td>
      </tr>
      <b-button v-on:click="engageEditMode('')">Save</b-button>
    </table>
  </div>
</template>

<script>
import { db } from "../main";

export default {
  name: "HandleData",
  data() {
    return {
      msg: "Seen so far:",
      birdFindings: [],
      isEditMode: false,
      currentlySelectedID: ""
    };
  },
  firestore() {
    return {
      birdFindings: db.collection("birdFindings")
    };
  },
  methods: {
    showFindingsInDB() {
      console.log("showFindings kjører");
      db.collection("birdFindings").onSnapshot(res => {
        const changes = res.docChanges();

        changes.forEach(change => {
          if (change.type === "added") {
            this.birdFindings.push({
              ...change.doc.data()
            })
          }
        })
      })
    },
    engageEditMode(findID){
      this.currentlySelectedID = findID
      this.isEditMode = !this.isEditMode;

      console.log(this.currentlySelectedID)
    },

    updateInfoOnSelectedFinding(findDBid){
      let selectedFind = db.collection("birdFindings").doc(findDBid);
        return selectedFind.update({
          //egen edit component triggered on editB? ta med id
          location: "Test",
          species: "Teist"
        })
        .then(function() {
          console.log("Updated find Info.")
        })
        .catch(function (error){
          console.error("An error occured: ", error)
        })
    },

    deleteFinding(findDBid){
      console.log(findDBid)
       let selectedFind = db.collection("birdFindings").doc(findDBid)
      
      selectedFind.delete()
       .then(function(){
         console.log("Find deleted from DB.")
       })
       .catch(function(error){
         console.error("Error deleting finding: " , error)
       })
    },

    showFindingsFromSpecificLocation(location){
      let collection = db.collection("birdFindings")
      let locationQuery = collection.where("location", "==", location)
      let vueInstance = this;


      locationQuery.get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc){
          //push species inn i arrayet og legg til overskrift fra location
          vueInstance.msg = location;
          vueInstance.birdFindings.push({
              ...change.doc.data()
            });
          console.log(doc.data().species);
        })
      })
      .catch(function(error){
        console.log("Error finding locations: ", error );
      })

    },

    showLocationsOfSpecificSpecies(species){
      let collection = db.collection("birdFindings")
      let speciesQuery = collection.where("species", "==", species)
      speciesQuery.get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc){
          //push locations inn i arrayet og legg til overskrift fra location
          console.log(doc.data().location);
        })
      })
      .catch(function(error){
        console.log("Error finding locations: ", error );
      })
    }
  }
};
</script>
