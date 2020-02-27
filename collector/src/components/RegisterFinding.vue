<template>
  <div>
    <h2>{{ msg }}</h2>
    <input type="text" v-model="finding.species" placeholder="Species"/>
    <input type="text" v-model="finding.location" placeholder="Location"/>
    <input type="date" v-model="finding.date" />
    <b-button v-on:click="addFindingToDb()">Save Finding</b-button>
  </div>
</template>

<script>

import { db } from "../main";

export default {
  name: "RegisterFinding",
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
    addFindingToDb() {
      //capitalize before push
      this.capitalizeObject();

        console.log("running add to DB")
      db.collection("birdFindings")
        .add(this.finding)
        .then(() => {
          console.log("Added find!");
        });
    },
    capitalizeObject(){
    this.finding.species  = this.finding.species.charAt(0).toUpperCase() + this.finding.species.substring(1)
    this.finding.location = this.finding.location.charAt(0).toUpperCase() + this.finding.location.substring(1)
    }
  }
};

</script>
