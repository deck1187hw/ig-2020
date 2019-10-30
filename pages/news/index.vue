<template>
  <div class="container">
    <h2>News</h2>
    <div class="row">
      <div class="col" v-for="(item, index) in news.articles" :key="index">
        <div class="card" style="width: 18rem;">
          <img :src="item.image.url" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{item.title}}</h5>
            <p
              class="card-text"
              v-html="item.intro"
            >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <nuxt-link
              :to="`/news/${encodeURIComponent(item.url)}`"
              class="btn btn-primary block"
            >View</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return { news: [] };
  },
  async asyncData({ $axios }) {
    const ip = await $axios.$get(
      "https://www.ig.com/uk/platforms-news.newsarticles.json"
    );
    return { news: ip };
  }
};
</script>

<style>
</style>
