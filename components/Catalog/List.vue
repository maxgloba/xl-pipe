<template>
  <section class="catalog">
    <div class="container">
      <h2>КАТАЛОГ</h2>
      <div class="catalog__promo">НЕ ЗАБЫВАЙТЕ ПРО АКЦИИ</div>
      <vue-tiny-slider v-bind="sliderOptions" ref="catalogSldier" v-if="winWidth < 768">
        <div v-for="i in Math.ceil(items.length / 3)">
          <div class="catalog__row">
            <a class="catalog__item" v-for="(item, index) in items.slice((i - 1) * 3, i * 3)">
              <img :src="require(`@/assets/${item.img}`)" :alt="item.id">
            </a>
          </div>
        </div>
      </vue-tiny-slider>
      <vue-tiny-slider v-bind="sliderOptions" ref="catalogSldier" v-else>
        <div v-for="i in Math.ceil(items.length / 6)">
          <div class="catalog__row">
            <a class="catalog__item" v-for="(item, index) in items.slice((i - 1) * 6, i * 6)">
              <img :src="require(`@/assets/${item.img}`)" :alt="item.id">
            </a>
          </div>
        </div>
      </vue-tiny-slider>
      <div class="catalog__menu">
        <button class="catalog__btn catalog__btn-prev"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="19" viewBox="0 0 25 19" fill="none"><path d="M11.1404 0.506297C10.8189 0.182115 10.3829 0 9.92835 0C9.47377 0 9.03781 0.182115 8.71633 0.506297L1.00193 8.28787C0.680544 8.61215 0.5 9.05191 0.5 9.51044C0.5 9.96897 0.680544 10.4087 1.00193 10.733L8.71633 18.5146C9.03965 18.8296 9.47269 19.0039 9.92218 18.9999C10.3717 18.996 10.8016 18.8141 11.1195 18.4935C11.4373 18.1729 11.6176 17.7392 11.6215 17.2858C11.6254 16.8324 11.4526 16.3956 11.1404 16.0694L6.49973 11.2397H22.7857C23.2404 11.2397 23.6764 11.0575 23.9979 10.7332C24.3194 10.4089 24.5 9.96906 24.5 9.51044C24.5 9.05182 24.3194 8.61198 23.9979 8.28768C23.6764 7.96339 23.2404 7.7812 22.7857 7.7812H6.49973L11.1404 2.95144C11.4618 2.62716 11.6423 2.1874 11.6423 1.72887C11.6423 1.27034 11.4618 0.830577 11.1404 0.506297Z" fill="white"/></svg></button>
        <div class="catalog__nav" id="catalog__nav">
          <button v-for="(item, index) in Math.ceil(items.length / perPage)">{{ index + 1 }}</button>
        </div>
        <button class="catalog__btn catalog__btn-next"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="19" viewBox="0 0 25 19" fill="none"><path d="M13.8596 0.506297C14.1811 0.182115 14.6171 0 15.0717 0C15.5262 0 15.9622 0.182115 16.2837 0.506297L23.9981 8.28787C24.3195 8.61215 24.5 9.05191 24.5 9.51044C24.5 9.96897 24.3195 10.4087 23.9981 10.733L16.2837 18.5146C15.9603 18.8296 15.5273 19.0039 15.0778 18.9999C14.6283 18.996 14.1984 18.8141 13.8805 18.4935C13.5627 18.1729 13.3824 17.7392 13.3785 17.2858C13.3746 16.8324 13.5474 16.3956 13.8596 16.0694L18.5003 11.2397H2.21431C1.75965 11.2397 1.32361 11.0575 1.00211 10.7332C0.680615 10.4089 0.5 9.96906 0.5 9.51044C0.5 9.05182 0.680615 8.61198 1.00211 8.28768C1.32361 7.96339 1.75965 7.7812 2.21431 7.7812H18.5003L13.8596 2.95144C13.5382 2.62716 13.3577 2.1874 13.3577 1.72887C13.3577 1.27034 13.5382 0.830577 13.8596 0.506297Z" fill="white"/></svg></button>
      </div>
    </div>
  </section>
</template>

<script>
export default{
  data(){
    return{
      winWidth: 0,
      perPage: 6,
      sliderOptions: {
        items: 1,
        loop: false,
        navPosition: 'bottom',
        nav: true,
        navContainer: '#catalog__nav',
        controlsPosition: 'bottom',
        prevButton: `.catalog__btn-prev`,
        nextButton: `.catalog__btn-next`,
        gutter: 5,
        autoHeight: true,
        slideBy: 'page',
      },
      items: [
        {
          id: 1,
          img: 'catalog-img.png',
        },
        {
          id: 2,
          img: 'catalog-img.png',
        },
        {
          id: 3,
          img: 'catalog-img.png',
        },
        {
          id: 4,
          img: 'catalog-img.png',
        },
        {
          id: 5,
          img: 'catalog-img.png',
        },
        {
          id: 6,
          img: 'catalog-img.png',
        },
        {
          id: 7,
          img: 'catalog-img.png',
        },
        {
          id: 8,
          img: 'catalog-img.png',
        },
        {
          id: 9,
          img: 'catalog-img.png',
        },
        {
          id: 10,
          img: 'catalog-img.png',
        },
        {
          id: 11,
          img: 'catalog-img.png',
        },
        {
          id: 12,
          img: 'catalog-img.png',
        },
        {
          id: 13,
          img: 'catalog-img.png',
        },
        {
          id: 14,
          img: 'catalog-img.png',
        },
      ],
    }
  },
  mounted(){
    this.winWidth = window.innerWidth
    this.perPage = window.innerWidth < 768 ? 3 : 6
  }
}
</script>

<style lang="scss" scoped>
.catalog{
  padding-top: 100px;
  padding-bottom: 100px;
  background: url(@/assets/whywe-bg.png) no-repeat 100px center;
  .container{
    position: relative;
  }
  h2{
    text-align: center;
    margin-bottom: 138px;
  }
  &__promo{
    color: var(--light);
    font-size: 14px;
    font-weight: 400;
    background: var(--second);
    position: absolute;
    left: 0;
    top: 90px;
    padding: 11px 23px;
    border-radius: 0 20px 20px 0;
  }
  &__row{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: res(15, 45);
    grid-row-gap: res(20, 50);
    @media(min-width:768px){
      grid-template-columns: repeat(2, 1fr);
    }
    @media(min-width:1200px){
      grid-template-columns: repeat(3, 1fr);
    }
  }
  &__item{
    img{
      display: block;
      width: 100%;
    }
  }
  &__menu{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: res(50, 100);
    button{
      background: var(--main-light-blue);
      border: 1px solid var(--main-light-blue);
      padding: 0;
      width: res(34, 55);
      height: res(34, 55);
      border-radius: 50%;
      color: rgba(0,0,0, .5);
      &.tns-nav-active{
        border-color: var(--second);
        color: rgba(0,0,0, 1);
      }
      &:not(:first-child){
        margin-left: res(8, 15);
      }
      &:active{
        opacity: .5;
      }
      &:disabled{
        opacity: .3;
        cursor: default;
      }
      &.catalog__btn{
        background: var(--second);
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        svg{
          width: 14px;
          @media(min-width:768px){
            width: 25px;
          }
        }
      }
    }
  }
  &__nav{
    margin-left: 15px;
    margin-right: 15px;
  }
}
</style>