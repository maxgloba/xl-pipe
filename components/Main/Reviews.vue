<template>
  <section class="reviews">
    <div class="container">
      <h2>ОТЗЫВЫ</h2>
      <p>Более 3000 завершенных проектов</p>
      <div class="reviews__slider">
        <vue-tiny-slider v-bind="reviewsSldier" ref="reviewsSldier">
          <div v-for="(item, index) in items" class="reviews__item">
            <div class="reviews__row" :ref="`reviews__${index}`">
              <div class="reviews__video">
                <video :ref="`reviews__video_${index}`" width="100%" controls :src="item.video"></video>
                <button
                  :key="`reviews__play_${index}`"
                  class="reviews__play"
                  @click.prevent="playVideo(index)">
                  <svg width="54" height="55" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M53 27.5009C53 41.9022 41.3569 53.5722 27 53.5722C12.6431 53.5722 1 41.9022 1 27.5009C1 13.0997 12.6431 1.42969 27 1.42969C41.3569 1.42969 53 13.0997 53 27.5009Z" stroke="#AAAAAA" stroke-width="2"/><path d="M22.4156 16.2353L21.236 17.4149C21.0785 17.5721 21 17.7531 21 17.9579C21 18.1621 21.0785 18.343 21.236 18.5002L30.5086 27.7733L21.2363 37.046C21.0788 37.2033 21.0002 37.3842 21.0002 37.5887C21.0002 37.7932 21.0788 37.9742 21.2363 38.1314L22.4159 39.3109C22.5731 39.4684 22.7541 39.5469 22.9586 39.5469C23.163 39.5469 23.344 39.4681 23.5011 39.3109L34.4962 28.316C34.6535 28.1588 34.7321 27.9778 34.7321 27.7733C34.7321 27.5689 34.6535 27.3881 34.4962 27.231L23.5011 16.2353C23.3439 16.0781 23.1629 16 22.9586 16C22.7541 16 22.5731 16.0781 22.4156 16.2353Z" fill="#AAAAAA"/></svg>
                </button>
              </div>
              <div class="reviews__info" v-html="item.msg"></div>
            </div>
          </div>
        </vue-tiny-slider>
        <div class="reviews__menu">
          <button class="reviews__btn reviews__btn-prev"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 14 24" fill="none"><path d="M12.3169 23.3116L13.4964 22.132C13.6539 21.9748 13.7324 21.7937 13.7324 21.589C13.7324 21.3848 13.6539 21.2038 13.4964 21.0466L4.22381 11.7736L13.4962 2.50089C13.6537 2.34362 13.7322 2.16264 13.7322 1.95818C13.7322 1.75365 13.6537 1.57266 13.4962 1.41548L12.3165 0.236023C12.1593 0.0785091 11.9784 0 11.7738 0C11.5695 0 11.3885 0.0787571 11.2313 0.236023L0.236205 11.2309C0.0789385 11.388 0.000346184 11.5691 0.000346184 11.7736C0.000346184 11.978 0.0789385 12.1588 0.236205 12.3159L11.2313 23.3116C11.3886 23.4688 11.5695 23.5469 11.7738 23.5469C11.9784 23.5469 12.1593 23.4688 12.3169 23.3116Z" fill="white"/></svg></button>
          <div class="reviews__nav" id="reviews__nav">
            <button v-for="(item, index) in items"></button>
          </div>
          <button class="reviews__btn reviews__btn-next"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 14 24" fill="none"><path d="M1.41556 0.235277L0.236023 1.4149C0.0785091 1.57208 0 1.75315 0 1.95785C0 2.16206 0.0785091 2.34304 0.236023 2.50023L9.50861 11.7733L0.236271 21.046C0.0787572 21.2033 0.000247787 21.3842 0.000247787 21.5887C0.000247787 21.7932 0.0787572 21.9742 0.236271 22.1314L1.41589 23.3109C1.57308 23.4684 1.75406 23.5469 1.9586 23.5469C2.16297 23.5469 2.34395 23.4681 2.50114 23.3109L13.4962 12.316C13.6535 12.1588 13.7321 11.9778 13.7321 11.7733C13.7321 11.5689 13.6535 11.3881 13.4962 11.231L2.50114 0.235277C2.34387 0.0780945 2.16289 0 1.9586 0C1.75406 0 1.57308 0.0780945 1.41556 0.235277Z" fill="white"/></svg></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default{
  data(){
    return{
      reviewsSldier: {
        items: 1,
        loop: false,
        nav: false,
        navPosition: 'bottom',
        nav: true,
        navContainer: '#reviews__nav',
        controlsPosition: 'bottom',
        prevButton: `.reviews__btn-prev`,
        nextButton: `.reviews__btn-next`,
        gutter: 5,
      },
      items: [
        {
          video: 'https://www.w3schools.com/html/mov_bbb.mp4',
          msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa, at vehicula urna mollis quis. Etiam eros quam, molestie eu ipsum vitae, ornare',
        },
        {
          video: 'https://www.w3schools.com/html/mov_bbb.mp4',
          msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa, at vehicula urna mollis quis. Etiam eros quam, molestie eu ipsum vitae, ornare',
        },
        {
          video: 'https://www.w3schools.com/html/mov_bbb.mp4',
          msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa, at vehicula urna mollis quis. Etiam eros quam, molestie eu ipsum vitae, ornare',
        },
      ],
    }
  },
  methods: {
    playVideo(id){
      this.$refs[`reviews__video_${id}`][0].play()
      this.$refs[`reviews__${id}`][0].classList.add('active')
      this.$refs[`reviews__video_${id}`][0].addEventListener('ended', () => {
        this.$refs[`reviews__${id}`][0].classList.remove('active')
      }, false)
    }
  }
}
</script>

<style lang="scss" scoped>
.reviews{
  color: var(--light);
  .container{
    padding-top: res(50, 100);
    padding-bottom: res(50, 100);
    border-radius: res(30, 60);
    background: var(--main);
  }
  &__row{
    @media(min-width:768px){
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &.active{
      .reviews__video:after, .reviews__play{
        opacity: 0;
        visibility: hidden;
      }
      .reviews__info{
        left: 0;
      }
    }
  }
  &__video{
    border-radius: res(30, 60);
    background: #F5F5F5;
    position: relative;
    overflow: hidden;
    margin-bottom: 30px;
    width: calc(100% - 20px);
    @media(max-width:767px){
      margin-left: auto;
      margin-right: auto;
    }
    @media(min-width:768px){
      margin-bottom: 0;
      width: per(652);
    }
    video, iframe{
      display: block;
      width: 100%;
      height: auto;
    }
    &:after{
      content: "";
      background: #F5F5F5;
      position: absolute;
      z-index: 2;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      transition: .3s ease;
    }
  }
  &__info{
    border-radius: res(30, 60);
    color: var(--light);
    font-size: 16px;
    font-weight: 400;
    position: relative;
    z-index: 2;
    transition: .5s ease;
    @media(min-width:768px){
      left: -67px;
      padding: 43px 50px;
      width: per(555);
      background: var(--second);
    }
  }
  &__play{
    transition: .3s ease;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    background: none;
    border: none;
  }
  &__slider{
    position: relative;
  }
  h2{
    margin-bottom: 20px;
    @media(max-width:767px){
      text-align: center;
    }
  }
  p{
    margin-bottom: res(30, 60);
    @media(max-width:767px){
      text-align: center;
    }
  }
  &__slider{
    position: relative;
  }
  &__menu{
    position: absolute;
    z-index: 10;
    display: flex;
    justify-content: space-between;
    @media(max-width:767px){
      top: 70px;
      left: -15px;
      right: -15px;
    }
    @media(min-width:768px){
      bottom: 10px;
      right: 7%;
      width: 375px;
    }
  }
  &__btn{
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    &-prev{
    }
    &-next{
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
    button{
      width: 8px;
      height: 8px;
      border: none;
      background: var(--light);
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