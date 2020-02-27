<template>
  <div>
    <h2>{{ msg }}</h2>
    <input type="text" v-model="finding.species" />
    <input type="text" v-model="finding.location" />
    <input type="date" v-model="finding.date" />
    <button v-on:click="dataToParent">Save Finding</button>
  </div>
</template>

<script>
//SKRIV OM TIL Å PUSHE HER. Fjern edit comp & save comp. Edit gjøres i show.
import { db } from "../main";

export default {
  name: "Register",
  data() {
    return {
      msg: "Register new findings",
      finding: {
        species: "",
        location: "",
        date: ""
      }
    };
  },
  methods: {
    dataToParent(event) {
      this.$emit("newRegisteredFinding", this.finding);
    },
    addFindingToDb() {
      db.collection("birdFindings")
        .add(this.finding)
        .then(() => {
          console.log("Added find!");
        });
    }
  }
};
</script>
