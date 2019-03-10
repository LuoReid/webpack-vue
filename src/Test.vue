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
    return (
      <ul class="movies">
        {this.movies.map(move => (
          <li class={itemClass}>{move.title}</li>
        ))}
      </ul>
    );
  }
};
</script>
<style scoped>
.movies {
  list-style: none;
  padding: 12px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
}
.movie:not(:last-child) {
  padding-bottom: 6px;
  margin-bottom: 6px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
}
p {
  color: grey;
}
</style>
