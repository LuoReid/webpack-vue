<template lang="pug">
//-   <!-- <div>
//-     <p>{{message}}</p>
//-     <input v-model="message">
//-   </div> -->
ul.movies
    li.move Star Wars
    li.move Blade Runner
</template>
<script>
export default {
  data() {
    return {
      message: "Hello world",
      movies: [{ title: "Star Wars" }, { title: "Blade Runner" }]
    };
  }
};
</script>
<style scoped>
p {
  color: grey;
}
</style>
