<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <WordCloud v-on:cloudToHome="setSelected" :categories=currentProjectCounts />
    <ProjectList v-on:listToHome="setProjectCountForCloud" :selectedCategory=selectedCatFromCloud />
  </div>
</template>

<script>
import WordCloud from "@/components/WordCloud.vue"
import ProjectList from "@/components/ProjectList.vue"


export default {
  name: "Home",
  components: {
    WordCloud,
    ProjectList
  },
  data() {
    return {
      selectedCatFromCloud: '',
      currentProjectCounts: []
    }
  },
  methods: {
    setSelected(value){
      this.selectedCatFromCloud = value
    },
    setProjectCountForCloud(value){
      this.currentProjectCounts = value

    }
  },
};
</script>
