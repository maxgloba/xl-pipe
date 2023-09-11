<template>
  <div class="recomendations">
    <h2>Смотрите также</h2>
    <div class="recomendations__posts">
      <div class="recomendations__row" v-for="(item, index) in posts.slice(0, 3)">
        <img :src="require(`@/assets/${item.thumb}`)" :alt="item.title">
        <div class="recomendations__info">
          <h4>{{ item.title }}</h4>
          <h6>{{ item.date }}</h6>
          <p>{{ item.excerpt }}</p>
        </div>
        <nuxt-link class="recomendations__read" :to="`/news/${item.slug}`">
          Читать больше
          <svg width="61" height="8" viewBox="0 0 61 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M60.3536 4.35355C60.5488 4.15829 60.5488 3.84171 60.3536 3.64645L57.1716 0.464466C56.9763 0.269204 56.6597 0.269204 56.4645 0.464466C56.2692 0.659728 56.2692 0.976311 56.4645 1.17157L59.2929 4L56.4645 6.82843C56.2692 7.02369 56.2692 7.34027 56.4645 7.53553C56.6597 7.7308 56.9763 7.7308 57.1716 7.53553L60.3536 4.35355ZM0 4.5H60V3.5H0V4.5Z" fill="#404040"/></svg>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  computed: {
    posts() {
      const posts = this.$store.getters['news/getPosts']
      this.items = posts
      return posts
    },
  },
}
</script>

<style lang="scss" scoped>
.recomendations{
  padding-top: 100px;
  &__posts{
    margin-top: 70px;
  }
  &__row{
    position: relative;
    @media(min-width:768px){
        display: flex;
      justify-content: space-between;
      align-items: center;
    }
    & > img{
      @media(max-width:767px){
        margin-bottom: 20px;
      }
    }
    &:not(:first-child){
      margin-top: res(40, 80);
      padding-top: res(40, 80);
      &:before{
        content: "";
        position: absolute;
        height: 2px;
        background: var(--light);
        border-radius: 10px;
        width: 100%;
        left: 0;
        top: 0;
      }
    }
  }
  &__info{
    @media(max-width:767px){
      margin-bottom: 20px;
    }
    @media(min-width:768px){
      width: per(500);
    }
  }
  h4{
    color: var(--light);
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  h6{
    margin-bottom: 20px;
    color: rgba(255, 255, 255, 0.50);
    font-size: 14px;
    font-weight: 400;
  }
  p{
    color: var(--light);
    font-size: 14px;
    font-weight: 400;
  }
  &__read{
    background: none;
    border: none;
    color: var(--light);
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    svg{
      margin-left: 30px;
      path{
        fill: var(--light);
      }
    }
  }
}
</style>