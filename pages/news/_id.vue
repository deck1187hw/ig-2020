<template>
  <div class="container" v-if="newSingle">

   
    <div class="row">
        <div class="col">
              <img :src="newSingle.image.url" class="img-fluid" :alt="newSingle.title">
                <hr>
        </div>
    </div>

    <div class="row">
        <div class="col">
                <h2>{{newSingle.title}}</h2>
                <p class="lead">{{newSingle.intro}}</p>
                <hr>
                <div v-for="(item, index) in newSingle.texts" :key="index">
                    <div v-if="item.text" v-html="item.text"></div>
                    <div v-if="item.image" class="maxIm"><img :src="item.image.url" :alt="item.image.alt"></div>
                </div>
        </div>
    </div>

  </div>
</template>

<script>


export default {
  
  data () {
    return { news: [], newSingle: {} }
  },
  computed: {
      
  },
  async asyncData({ $axios, params }) {    
    const result = await $axios.$get('https://www.ig.com/uk/platforms-news.newsarticles.json')
    let art = result.articles.find(function(item){
        return decodeURIComponent(item.url) === params.id
    })
    return {  newSingle: art }
  }
}
</script>

<style>
.maxIm img{
    width: 200px;
}
</style>
