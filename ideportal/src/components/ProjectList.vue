<template>
  <div>
    <div class="selectedCat">SELECTED CATEGORY: {{selectedCategory}}</div>

    <h3>Projects in this category:</h3>
    <div v-for="(project, index) in allProjects" :key="index">
      <div v-if="selectedCategory==project.cat">
        <a :href="project.link">{{project.name}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "ProjectList",
 props: {
    selectedCategory: String
  },
  data() {
      return {
        
         allProjects: [
             {name: "C# Project 2",
              cat: ["C#"],
              link: "http://www.vg.no"
             },
             {name: "FlappyTerje",
              cat: ["C#"],
              link: "http://www.op.no"
             },
              {name: "FlappyTerje 3",
              cat: ["C#", "HTML/CSS"],
              link: "http://www.op.no"
             },
             {name: "Hello World of Javascript!",
              cat: ["JS"],
              link: "http://www.neopets.com"
             },
              {name: "Hello, plz work!",
              cat: ["JS"],
              link: "http://www.javascript.com"
             },
             {name: "Hey, vue-huu you :)",
              cat: ["Vue"],
              link: "https://vuejs.org/"
             },
             {name: "Hello Vue!",
              cat: ["Vue"],
              link: "https://vuejs.org/"
             },
             {name: "My VUE-BOT!",
              cat: ["Vue", "C#"],
              link: "https://vuejs.org/"
             },
             {name: "Test DB",
              cat: ["SQL", "C#", "JS"],
              link: "https://vg.no/"
             },
             {name: "Test React",
              cat: ["React", "HTML/CSS"],
              link: "https://vg.no/"
             },
         ],
      
        categoriesAndWeight: [["JS", 0],
        ["C#",0],
        ["HTML/CSS", 0],
        ["Vue",0],
        ["SQL", 0],
        ["React", 0],
        ["Pyton", 0]
        ] , 
        
      }
  },
created() {
    this.categoryCounter()
    this.$emit("listToHome", this.categoriesAndWeight);
},
  methods: {
      categoryCounter(){
        for(let singleProject of this.allProjects){
          for(let projCategory of singleProject.cat ){
            for(let category of this.categoriesAndWeight){
              if(projCategory == category[0]){
                category[1]++
              }
            }
          }
        }
    }
}
}
</script>

<style scoped>
.selectedCat {
  font-size: 25px;
  font-weight: bold;
  color: orange;
  margin-bottom: 5%;
}
a {
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
}
a:hover {
  color: orange;
}
</style>
