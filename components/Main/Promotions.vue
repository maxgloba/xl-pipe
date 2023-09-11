<template>
  <section class="promotions">
    <div class="container">
      <div class="promotions__slider">
        <vue-tiny-slider v-bind="sliderOptions" ref="promotionsSldier">
          <div v-for="item in items" class="promotions__item">
            <div class="promotions__row">
              <div class="promotions__info">
                <h2>{{ item.title }}</h2>
                <p>{{ item.msg }}</p>
              </div>
              <img :src="require(`@/assets/${item.img}`)" alt="">
            </div>
          </div>
        </vue-tiny-slider>
        <div class="promotions__menu">
          <button class="promotions__btn promotions__btn-prev"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 14 24" fill="none"><path d="M12.3169 23.3116L13.4964 22.132C13.6539 21.9748 13.7324 21.7937 13.7324 21.589C13.7324 21.3848 13.6539 21.2038 13.4964 21.0466L4.22381 11.7736L13.4962 2.50089C13.6537 2.34362 13.7322 2.16264 13.7322 1.95818C13.7322 1.75365 13.6537 1.57266 13.4962 1.41548L12.3165 0.236023C12.1593 0.0785091 11.9784 0 11.7738 0C11.5695 0 11.3885 0.0787571 11.2313 0.236023L0.236205 11.2309C0.0789385 11.388 0.000346184 11.5691 0.000346184 11.7736C0.000346184 11.978 0.0789385 12.1588 0.236205 12.3159L11.2313 23.3116C11.3886 23.4688 11.5695 23.5469 11.7738 23.5469C11.9784 23.5469 12.1593 23.4688 12.3169 23.3116Z" fill="#404040"/></svg></button>
          <div class="promotions__nav" id="promotions__nav">
            <button v-for="(item, index) in items"></button>
          </div>
          <button class="promotions__btn promotions__btn-next"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 14 24" fill="none"><path d="M1.41556 0.235277L0.236023 1.4149C0.0785091 1.57208 0 1.75315 0 1.95785C0 2.16206 0.0785091 2.34304 0.236023 2.50023L9.50861 11.7733L0.236271 21.046C0.0787572 21.2033 0.000247787 21.3842 0.000247787 21.5887C0.000247787 21.7932 0.0787572 21.9742 0.236271 22.1314L1.41589 23.3109C1.57308 23.4684 1.75406 23.5469 1.9586 23.5469C2.16297 23.5469 2.34395 23.4681 2.50114 23.3109L13.4962 12.316C13.6535 12.1588 13.7321 11.9778 13.7321 11.7733C13.7321 11.5689 13.6535 11.3881 13.4962 11.231L2.50114 0.235277C2.34387 0.0780945 2.16289 0 1.9586 0C1.75406 0 1.57308 0.0780945 1.41556 0.235277Z" fill="#404040"/></svg></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default{
  data(){
    return{
      sliderOptions: {
        items: 1,
        loop: false,
        nav: false,
        navPosition: 'bottom',
        nav: true,
        navContainer: '#promotions__nav',
        controlsPosition: 'bottom',
        prevButton: `.promotions__btn-prev`,
        nextButton: `.promotions__btn-next`,
      },
      items: [
        {
          img: 'promotions-img.png',
          title: 'АКЦИИ 1',
          msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa.',
        },
        {
          img: 'promotions-img.png',
          title: 'АКЦИИ 2',
          msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa.',
        },
        {
          img: 'promotions-img.png',
          title: 'АКЦИИ 3',
          msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa.',
        },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.promotions{
  .container{
    position: relative;
    background: url(@/assets/whywe-bg.png) no-repeat 100px center;
    padding-top: 100px;
    padding-bottom: 100px;
  }
  &__slider{
    position: relative;
  }
  &__row{
    @media(min-width:768px){
      display: flex;
    }
    img{
      margin-left: auto;
      margin-right: auto;
      width: calc(100% - 20px);
      @media(max-width:767px){
        display: block;
      }
      @media(min-width:768px){
        margin-right: res(0, 100);
        width: per(425);
      }
    }
  }
  &__info{
    margin-bottom: 30px;
    @media(min-width:768px){
      order: 2;
      margin-bottom: 0;
    }
  }
  h2{
    margin-bottom: 24px;
    @media(max-width:767px){
      text-align: center;
    }
  }
  p{
    font-size: 14px;
  }
  &__menu{
    display: flex;
    justify-content: space-between;
    @media(max-width:767px){
      position: absolute;
      bottom: 60px;
      left: -20px;
      right: -20px;
    }
    @media(min-width:768px){
      width: 375px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 100px;
    }
  }
  &__btn{
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    &:active{
      opacity: .5;
    }
    &:disabled{
      opacity: .3;
      cursor: default;
    }
  }
  &__nav{
    @media(max-width:767px){
      display: none;
    }
    button{
      width: 8px;
      height: 8px;
      border: none;
      background: var(--dark);
      border-radius: 50%;
      padding: 0;
      margin: 0;
      &.tns-nav-active{
        transition: width .5s ease .1s, height .3s ease;
        width: 100px;
        height: 2px;
        border-radius: 4px;
      }
      &:not(:first-child){
        margin-left: 30px;
      }
    }
  }
}
</style>