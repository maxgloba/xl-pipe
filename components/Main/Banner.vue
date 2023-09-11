<template>
  <section class="banner">
    <div class="container">
      <div class="banner__objects">
        <span>154</span>
        Выполненных <br> объектов
      </div>
      <div class="banner__slider">
        <vue-tiny-slider v-bind="sliderOptions" ref="bannerSlider">
          <div v-for="item in items" class="banner__item">
            <img :src="require(`@/assets/${item}`)" alt="" />
          </div>
        </vue-tiny-slider>
        <div class="banner__nav" id="banner__nav">
          <button v-for="(item, index) in items"></button>
        </div>
      </div>
      <div class="banner__info">
        <h1>УСТАНОВКА СИСТЕМ ОТОПЛЕНИЯ</h1>
        <p>Подберем и установим оптимальный вид отопления в Ваш дом.</p>
        <button class="btn">Заказать</button>
      </div>
    </div>
  </section>
</template>

<script>
export default{
  data: () => ({
    winWidth: 1200,
    items: [
      'main-banner.png',
      'main-banner.png',
      'main-banner.png',
    ],
    sliderOptions: {
      items: 1,
      loop: false,
      mouseDrag: false,
      autoplay: true,
      speed: 3000,
      autoplayTimeout: 6000,
      mode: 'gallery', // 'carousel'
      nav: true,
      navContainer: '#banner__nav',
      controls: false,
      autoplayButton: false,
    },
  }),
  methods: {
    setWidth(){
      if(window.innerWidth < 768){
        this.items = [
          'mob/main-banner.png',
          'mob/main-banner.png',
          'mob/main-banner.png',
        ]
        this.$refs.bannerSlider.slider.refresh()
      }
    }
  },
  mounted() {
    this.setWidth()
    window.addEventListener("resize", this.setWidth)
  },
  destroyed() {
    window.removeEventListener("resize", this.setWidth)
  },
}
</script>

<style lang="scss" scoped>
.banner{
  text-align: center;
  position: relative;
  @media(min-width:768px){
    text-align: left;
  }
  .container{
    // background: url(@/assets/main-banner.png) no-repeat center center/cover;
    padding-top: res(250, 400);
    display: flex;
    align-items: center;
    padding-bottom: res(167, 200);
    position: relative;
    z-index: 2;
    overflow: hidden;
  }
  &__info{
    position: relative;
    z-index: 2;
    @media(min-width:1200px){
      padding-left: 50px;
    }
  }
  h1{
    color: var(--light);
    font-size: 48px;
    font-weight: 900;
    margin-bottom: 30px;
    max-width: 700px;
  }
  p{
    color: var(--light);
    font-size: 16px;
    font-weight: 400;
    max-width: 395px;
    margin-bottom: 43px;
  }
  &__objects{
    position: absolute;
    z-index: 2;
    border-radius: 200px;
    color: var(--light);
    font-size: res(8, 16);
    font-weight: 700;
    padding: res(10, 15) res(20, 30);
    justify-content: space-between;
    align-items: center;
    display: flex;
    top: 150px;
    left: res(20, 50);
    text-align: left;
    @media(max-width:767px){
      border: 2px solid var(--light);
    }
    @media(min-width:768px){
      background: var(--main);
    }
    span{
      display: block;
      font-size: res(17, 34);
      font-weight: 700;
      margin-right: res(5, 30);
    }
  }
  &__slider{
    position: absolute;
    left: 0; top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  &__item{
    img{
      display: block;
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
    }
  }
  &__nav{
    position: absolute;
    z-index: 2;
    @media(max-width:767px){
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
    }
    @media(min-width:768px){
      top: 50%;
      right: res(15, 50);
      transform: translateY(-50%);
    }
    button{
      display: block;
      width: 9px;
      height: 9px;
      border: none;
      background: var(--light);
      border-radius: 50%;
      padding: 0;
      margin: 0;
      transition: .5s ease;
      opacity: .5;
      &.tns-nav-active{
        outline: 1px solid var(--light);
        outline-offset: 5px;
        opacity: 1;
      }
      &:not(:first-child){
        @media(max-width:767px){
          margin-left: 19px;
        }
        @media(min-width:768px){
          margin-top: 35px;
        }
      }
    }
  }
}
</style>