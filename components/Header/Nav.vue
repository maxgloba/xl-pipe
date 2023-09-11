<template>
  <nav class="nav">
    <nuxt-link to="/">Главная</nuxt-link>
    <nuxt-link to="/catalog">Каталог</nuxt-link>
    <nuxt-link to="/promotions">Акции</nuxt-link>
    <nuxt-link to="/about-system">О системе</nuxt-link>
    <nuxt-link to="/news">Новости</nuxt-link>
    <nuxt-link to="/questions">Вопросы</nuxt-link>
    <nuxt-link to="/reviews">Отзывы</nuxt-link>
    <nuxt-link to="/contacts">Конткаты</nuxt-link>
  </nav>
</template>

<style lang="scss" scoped>
.nav{
  @media(max-width:767px){
    position: absolute;
    right: 20px;
    top: 90px;
    width: 173px;
    background: var(--light);
    border-radius: 20px;
    padding-left: 20px;
    padding-right: 20px;
    z-index: 10;
    max-height: 0px;
    transition: .5s ease;
    overflow: hidden;
    &.active{
      max-height: 1000px;
      padding: 20px;
    }
  }
  @media(min-width:768px){
    display: flex;
  }
  a{
    color: var(--dark);
    font-size: res(12, 16);
    font-weight: 500;
    text-decoration: none;
    position: relative;
    padding: res(5, 11) 0;
    @media(max-width:767px){
      display: block;
      font-size: 16px;
    }
    &:before{
      content:"";
      width: 0;
      height: 2px;
      border-radius: 10px;
      background: var(--dark);
      display: block;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      transition: .3s ease-in-out;
      @media(max-width:767px){
        display: none;
      }
    }
    &:hover{
      &:before{
        width: 25px;
      }
    }
    &.nuxt-link-exact-active{
      font-weight: 700;
      &:before{
        width: 25px;
      }
    }
    &:not(:first-child){
      @media(min-width:768px){
        margin-left: res(5, 20);
      }
      @media(min-width:1200px){
        margin-left: 30px;
      }
    }
  }
}
</style>