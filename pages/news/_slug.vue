<template>
  <main class="page post">
    <div class="container">
      <h2>{{ post.title }}</h2>
      <div class="post__date">{{ post.date }}</div>
      <img class="post__image" :src="require(`@/assets/${post.image}`)" :alt="post.title">
      <div class="post__content" v-html="post.content"></div>
      <button class="btn btn-second">Оставить заявку</button>
      <NewsRecomendations />
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ params }) {
    const slug = params.slug
    return { slug }
  },
  computed: {
    post() {
      const posts = this.$store.getters['news/getPosts'].filter(post => post.slug === this.slug)
      return posts[0]
    },
  },
}
</script>

<style lang="scss">
.post{
  color: var(--light);
  .container{
    background: var(--main);
    padding-top: 240px;
    padding-bottom: res(50, 100);
    border-radius: 0 0 30px 30px;
    overflow: hidden;
    @media(min-width:768px){
      border-radius: res(30, 60);
    }
  }
  h2{
    margin-bottom: 5px;
  }
  &__date{
    color: var(--light);
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 50px;
  }
  &__image{
    display: block;
    width: 100%;
    margin-bottom: res(30, 50);
  }
  &__content{
    color: var(--light);
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 45px;
    p{
      margin-bottom: 20px;
    }
    span{
      font-size: res(14, 20);
      font-weight: 600;
      padding: 15px 30px;
      border-radius: 90px;
      background: var(--second);
      display: block;
    }
  }
}
</style>