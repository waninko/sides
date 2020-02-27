<template>
<div>
    <h2>{{msg}}</h2>
    {{findObjFromParent}}savedata
</div> 
</template>

<script>
import { db } from "../main";

export default {
    name:"SaveData",
    props:{
        findObjFromParent: {}, 
    },
    data () {
    return {
      msg: 'Save all registered findings to DB'
    }
  },
  methods: {
      addFindingToDb(){
          db.collection("birdFindings")
            .add(this.findObjFromParent)
            .then(()=>{
                console.log("Added find!");
            })
      }
  } 
}
</script>