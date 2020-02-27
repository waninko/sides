<template>
<div>
    <h2>{{msg}}</h2>
    {{findObjFromParent}}editdata
</div> 
</template>

<script>
export default {
    name:"EditData",
    props:{
        findObjFromParent: {}
    },
    data () {
    return {
      msg: 'Save all registered findings to DB'
    }
  } 
}
</script>