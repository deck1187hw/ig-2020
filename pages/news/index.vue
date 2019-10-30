<template>
  <div>
    <div class="row mb-2">
      <div class="col-md-6" v-for="(item, index) in news.articles" :key="index">
        <div
          class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
        >
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary">World</strong>
            <h3 class="mb-0">{{item.title}}</h3>
            <div class="mb-1 text-muted">Nov 12</div>
            <p class="card-text mb-auto" v-html="item.intro"></p>
            <nuxt-link
              :to="`/news/${encodeURIComponent(item.url)}`"
              class="stretched-link"
            >Continue reading</nuxt-link>
          </div>
          <div class="col-auto d-none d-lg-block">
            <img :src="item.image.url" class="imageArt1" />
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
.imageArt1 {
  width: 140px;
}
</style>
