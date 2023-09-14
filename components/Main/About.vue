<template>
  <section class="about">
    <div class="container">
      <h2>О НАС</h2>
      <vue-tiny-slider v-bind="sliderOptions" ref="aboutSldier">
        <div v-for="item in items" class="about__item">
          <div class="about__row">
            <div class="about__img">
              <img :src="require(`@/assets/${item.img}`)" alt="">
            </div>
            <div class="about__info">
              <h3>{{ item.title }}</h3>
              <p>{{ item.msg }}</p>
            </div>
          </div>
        </div>
      </vue-tiny-slider>
      <button class="about__btn about__btn-prev"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 14 24" fill="none"><path d="M12.3169 23.3116L13.4964 22.132C13.6539 21.9748 13.7324 21.7937 13.7324 21.589C13.7324 21.3848 13.6539 21.2038 13.4964 21.0466L4.22381 11.7736L13.4962 2.50089C13.6537 2.34362 13.7322 2.16264 13.7322 1.95818C13.7322 1.75365 13.6537 1.57266 13.4962 1.41548L12.3165 0.236023C12.1593 0.0785091 11.9784 0 11.7738 0C11.5695 0 11.3885 0.0787571 11.2313 0.236023L0.236205 11.2309C0.0789385 11.388 0.000346184 11.5691 0.000346184 11.7736C0.000346184 11.978 0.0789385 12.1588 0.236205 12.3159L11.2313 23.3116C11.3886 23.4688 11.5695 23.5469 11.7738 23.5469C11.9784 23.5469 12.1593 23.4688 12.3169 23.3116Z" fill="#404040"/></svg></button>
      <button class="about__btn about__btn-next"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 14 24" fill="none"><path d="M1.41556 0.235277L0.236023 1.4149C0.0785091 1.57208 0 1.75315 0 1.95785C0 2.16206 0.0785091 2.34304 0.236023 2.50023L9.50861 11.7733L0.236271 21.046C0.0787572 21.2033 0.000247787 21.3842 0.000247787 21.5887C0.000247787 21.7932 0.0787572 21.9742 0.236271 22.1314L1.41589 23.3109C1.57308 23.4684 1.75406 23.5469 1.9586 23.5469C2.16297 23.5469 2.34395 23.4681 2.50114 23.3109L13.4962 12.316C13.6535 12.1588 13.7321 11.9778 13.7321 11.7733C13.7321 11.5689 13.6535 11.3881 13.4962 11.231L2.50114 0.235277C2.34387 0.0780945 2.16289 0 1.9586 0C1.75406 0 1.57308 0.0780945 1.41556 0.235277Z" fill="#404040"/></svg></button>
      <div class="about__nav" id="about__nav">
        <button v-for="(item, index) in items.length"></button>
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
        navContainer: '#about__nav',
        controls: true,
        prevButton: `.about__btn-prev`,
        nextButton: `.about__btn-next`,
        responsive: {
          768: {
            nav: true,
            navPosition: 'bottom',
          },
        },
      },
      items: [
        {
          img: 'about-slide.png',
          title: 'ИСТОРИЯ УСПЕХА',
          msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa, at vehicula urna mollis quis. Etiam eros quam, molestie eu ipsum vitae, ornare fermentum massa. Suspendisse urna sem, lacinia blandit eros varius, sagittis eleifend dolor. Donec ut viverra lorem, vitae semper orci. Curabitur pretium sit amet urna at eleifend. Morbi eleifend molestie nisl in sollicitudin.',
        },
        {
          img: 'about-slide.png',
          title: 'АИСТОРИЯ УСПЕХА 2',
          msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa, at vehicula urna mollis quis. Etiam eros quam, molestie eu ipsum vitae, ornare fermentum massa. Suspendisse urna sem, lacinia blandit eros varius, sagittis eleifend dolor. Donec ut viverra lorem, vitae semper orci. Curabitur pretium sit amet urna at eleifend. Morbi eleifend molestie nisl in sollicitudin.',
        },
        {
          img: 'about-slide.png',
          title: 'ИСТОРИЯ УСПЕХА 3',
          msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa, at vehicula urna mollis quis. Etiam eros quam, molestie eu ipsum vitae, ornare fermentum massa. Suspendisse urna sem, lacinia blandit eros varius, sagittis eleifend dolor. Donec ut viverra lorem, vitae semper orci. Curabitur pretium sit amet urna at eleifend. Morbi eleifend molestie nisl in sollicitudin.',
        },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.about{
  .container{
    position: relative;
    background: url(@/assets/whywe-bg.png) no-repeat 100px center;
    padding-top: res(70, 100);
    padding-bottom: res(70, 100);
  }
  &__row{
    @media(min-width:768px){
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  &__img{
    position: relative;
    margin-bottom: 40px;
    width: calc(100% - 20px);
    @media(max-width:767px){
      margin-left: auto;
      margin-right: auto;
    }
    @media(min-width:768px){
      margin-bottom: 0;
      margin-right: res(0, 150);
      padding-left: 90px;
      padding-top: 33px;
      padding-bottom: 33px;
      width: per(625);
    }
    img{
      display: block;
      width: 100%;
      position: relative;
      z-index: 2;
    }
    &:after{
      content:"";
      position: absolute;
      left: 0; top: 0; bottom: 0;
      right: 214px;
      background: var(--second);
      border-radius: 0 40px 40px 0;
      @media(max-width:767px){
        display: none;
      }
    }
  }
  &__info{
    @media(min-width:768px){
      width: per(515);
    }
  }
  h2{
    text-align: center;
    margin-bottom: 40px;
    @media(min-width:768px){
      text-align: right;
    }
  }
  h3{
    color: var(--dark);
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  p{
    color: var(--dark);
    font-size: 16px;
    font-weight: 500;
  }
  &__btn{
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    position: absolute;
    top: 240px;
    @media(min-width:768px){
      display: none;
    }
    &-prev{
      left: 10px;
    }
    &-next{
      right: 10px;
    }
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
    @media(min-width:768px){
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 31%;
      margin-top: -15px;
      position: relative;
      z-index: 2;
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