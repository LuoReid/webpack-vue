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
      <div>
        <ul class="movies">
          {this.movies.map(move => (
            <li class={itemClass}>{move.title}</li>
          ))}
        </ul>
        <article class="article">
          <h3 class="title">Title</h3>
        </article>
      </div>
    );
  }
};
</script>
<style lang="sass" scoped>
.movies 
  list-style: none;
  padding: 12px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 3px;  
  .movie:not(:last-child) 
    padding-bottom: 6px;
    margin-bottom: 6px;
    border-bottom: solid 1px rgba(0, 0, 0, 0.1);


.article
  .title
    border-bottom: solid 3px rgba(red,.2)    
</style>
