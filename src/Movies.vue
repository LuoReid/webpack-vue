<template>
  <ul class="movies">
    <!-- <li v-for="movie of movies" class="movie" v-bind:key="movie.title">{{movie.title}}</li> -->
    <Movie v-for="movie of movies" class="movie" v-bind:key="movie.title" v-bind:movie="movie" />
  </ul>
</template>
<script>
import Movie from "./Movie.vue";
export default {
  components: { Movie },
  data() {
    return {
      movies: [{ title: "Star Wars" }, { title: "Blade Runner" }]
    };
  }
};
</script>
<style lang="less" scoped>
.movies {
  list-style: none;
  padding: 12px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  .movie:not(:last-child) {
    padding-bottom: 6px;
    margin-bottom: 6px;
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);
  }
}
</style>

