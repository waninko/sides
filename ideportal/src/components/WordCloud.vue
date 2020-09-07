<template>
  <div>
    <vue-word-cloud
      style="
    height: 180px;
    width: 240px;
    margin-left:42%;
    padding: 20px;
  "
      font-family="Impact"
      :words="categories"
      :color="([, weight]) => weight >= 5 ? 'Purple' 
                            : weight >= 3 ? 'DeepPink' 
                            : weight >= 2 ? 'Orange' 
                            : weight >= 1 ? 'RoyalBlue' 
                            : weight  > 0 ? 'Indigo': 'Green'
              "
    >
      <div slot-scope="{text, weight}">
        <div :title="weight" class="word" @click="selectItem(text)">{{ text }}</div>
      </div>
    </vue-word-cloud>
  </div>
</template>

<script>
//note - fargekode etter navn på cat, ikke weight
import VueWordCloud from "vuewordcloud";

//ta vare på antall prosjekter i hver category - flere prosj, større tekst
export default {
  name: "WordCloud",
  components: {
    [VueWordCloud.name]: VueWordCloud
  },
   props: {
    categories: Array
  },
  methods: {
    selectItem(clickedCat) {
      this.$emit("cloudToHome", clickedCat);
    }
  }
};
</script>


<style scoped>
/* .cloud{

} */

.word {
  cursor: pointer;
}
.word:hover {
  /* border: 3px dotted #3a7999; */
  color: orange;
}
</style>