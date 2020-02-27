<template>
<div>
    <h2>{{msg}}</h2>
    <div v-for="(finding, index) in birdFindings" :key="index">
      {{finding.species}} ~ {{finding.location}} - {{finding.date.toDate()}}
    </div>

    <button v-on:click="showFindingsInDB">Test DB Push</button>
</div>  
</template>

<script>
import { db } from "../main";

export default {
    name:"ShowData",
    data () {
    return {
      msg: 'Show all registered findings',
      birdFindings: [],
      testNewAddition: {
        species: "Gråtrost",
        location: "Bortimellom"
      }
    }
  },
  firestore(){
    return {
      birdFindings: db.collection('birdFindings'),
    }
  },
  methods: {
    showFindingsInDB(){
      db.collection('birdFindings').onSnapshot(res => {
        const changes = res.docChanges();

        changes.forEach(change => {
          if(change.type === "added"){
            this.birdFindings.push({
              ...change.doc.data()
            });
          }
        });
      });
    },

    addFinding(){
      let findSpecies = JSON.stringify(this.testNewAddition.species)
      let findLocation = JSON.stringify(this.testNewAddition.location)

      db.collection("birdFindings")
        .add({findSpecies, findLocation})
        .then(()=> console.log("Noe skjedde! Sjekk DB!"))

    }

    
  } 
}
</script>