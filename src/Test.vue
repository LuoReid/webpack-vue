<script>
export default {
  data() {
    return {
      message: "Hello world",
      movies: [{ title: "Star Wars" }, { title: "Blade Runner" }]
    };
  },
  render(h) {
    const itemClass = "movie";
    return <ul class="moves">
      { this.movies.map(move => 
        <li class={itemClass}>{move.title}</li>
      )}
    </ul>
  }
};
</script>
<style scoped>
p {
  color: grey;
}
</style>
