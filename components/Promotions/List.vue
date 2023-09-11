<template>
  <section class="promotions">
    <div class="container">
      <h2>АКЦИИ</h2>
      <vue-tiny-slider v-bind="sliderOptions" ref="promotionsSldier">
        <div v-for="i in Math.ceil(items.length / 3)">
          <div class="promotions__row" :ref="`promotions__${index}`" v-for="(item, index) in items.slice((i - 1) * 3, i * 3)">
            <div class="promotions__video">
              <video :ref="`promotions__video_${index}`" width="100%" controls :src="item.video"></video>
              <button
                :key="`promotions__play_${index}`"
                class="promotions__play"
                @click.prevent="playVideo(index)">
                <svg width="54" height="55" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M53 27.5009C53 41.9022 41.3569 53.5722 27 53.5722C12.6431 53.5722 1 41.9022 1 27.5009C1 13.0997 12.6431 1.42969 27 1.42969C41.3569 1.42969 53 13.0997 53 27.5009Z" stroke="#AAAAAA" stroke-width="2"/><path d="M22.4156 16.2353L21.236 17.4149C21.0785 17.5721 21 17.7531 21 17.9579C21 18.1621 21.0785 18.343 21.236 18.5002L30.5086 27.7733L21.2363 37.046C21.0788 37.2033 21.0002 37.3842 21.0002 37.5887C21.0002 37.7932 21.0788 37.9742 21.2363 38.1314L22.4159 39.3109C22.5731 39.4684 22.7541 39.5469 22.9586 39.5469C23.163 39.5469 23.344 39.4681 23.5011 39.3109L34.4962 28.316C34.6535 28.1588 34.7321 27.9778 34.7321 27.7733C34.7321 27.5689 34.6535 27.3881 34.4962 27.231L23.5011 16.2353C23.3439 16.0781 23.1629 16 22.9586 16C22.7541 16 22.5731 16.0781 22.4156 16.2353Z" fill="#AAAAAA"/></svg>
              </button>
            </div>
            <div class="promotions__info">
              <p v-html="item.msg"></p>
              <button class="btn btn-white">Подробнее</button>
            </div>
          </div>
        </div>
      </vue-tiny-slider>
      <div class="promotions__menu">
        <button class="promotions__btn promotions__btn-prev"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="19" viewBox="0 0 25 19" fill="none"><path d="M11.1404 0.506297C10.8189 0.182115 10.3829 0 9.92835 0C9.47377 0 9.03781 0.182115 8.71633 0.506297L1.00193 8.28787C0.680544 8.61215 0.5 9.05191 0.5 9.51044C0.5 9.96897 0.680544 10.4087 1.00193 10.733L8.71633 18.5146C9.03965 18.8296 9.47269 19.0039 9.92218 18.9999C10.3717 18.996 10.8016 18.8141 11.1195 18.4935C11.4373 18.1729 11.6176 17.7392 11.6215 17.2858C11.6254 16.8324 11.4526 16.3956 11.1404 16.0694L6.49973 11.2397H22.7857C23.2404 11.2397 23.6764 11.0575 23.9979 10.7332C24.3194 10.4089 24.5 9.96906 24.5 9.51044C24.5 9.05182 24.3194 8.61198 23.9979 8.28768C23.6764 7.96339 23.2404 7.7812 22.7857 7.7812H6.49973L11.1404 2.95144C11.4618 2.62716 11.6423 2.1874 11.6423 1.72887C11.6423 1.27034 11.4618 0.830577 11.1404 0.506297Z" fill="white"/></svg></button>
        <div class="promotions__nav" id="promotions__nav">
          <button v-for="(item, index) in Math.ceil(items.length / 3)">{{ index + 1 }}</button>
        </div>
        <button class="promotions__btn promotions__btn-next"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="19" viewBox="0 0 25 19" fill="none"><path d="M13.8596 0.506297C14.1811 0.182115 14.6171 0 15.0717 0C15.5262 0 15.9622 0.182115 16.2837 0.506297L23.9981 8.28787C24.3195 8.61215 24.5 9.05191 24.5 9.51044C24.5 9.96897 24.3195 10.4087 23.9981 10.733L16.2837 18.5146C15.9603 18.8296 15.5273 19.0039 15.0778 18.9999C14.6283 18.996 14.1984 18.8141 13.8805 18.4935C13.5627 18.1729 13.3824 17.7392 13.3785 17.2858C13.3746 16.8324 13.5474 16.3956 13.8596 16.0694L18.5003 11.2397H2.21431C1.75965 11.2397 1.32361 11.0575 1.00211 10.7332C0.680615 10.4089 0.5 9.96906 0.5 9.51044C0.5 9.05182 0.680615 8.61198 1.00211 8.28768C1.32361 7.96339 1.75965 7.7812 2.21431 7.7812H18.5003L13.8596 2.95144C13.5382 2.62716 13.3577 2.1874 13.3577 1.72887C13.3577 1.27034 13.5382 0.830577 13.8596 0.506297Z" fill="white"/></svg></button>
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
        gutter: 5,
        autoHeight: true,
      },
      items: [
        {
          video: 'https://www.w3schools.com/html/mov_bbb.mp4',
          msg: '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa, at vehicula urna mollis quis. Etiam eros quam, molestie eu ipsum vitae, ornare',
        },
        {
          video: 'https://www.w3schools.com/html/mov_bbb.mp4',
          msg: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa, at vehicula urna mollis quis. Etiam eros quam, molestie eu ipsum vitae, ornare',
        },
        {
          video: 'https://www.w3schools.com/html/mov_bbb.mp4',
          msg: '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa, at vehicula urna mollis quis. Etiam eros quam, molestie eu ipsum vitae, ornare',
        },
        {
          video: 'https://www.w3schools.com/html/mov_bbb.mp4',
          msg: '4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa, at vehicula urna mollis quis. Etiam eros quam, molestie eu ipsum vitae, ornare',
        },
        {
          video: 'https://www.w3schools.com/html/mov_bbb.mp4',
          msg: '5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa, at vehicula urna mollis quis. Etiam eros quam, molestie eu ipsum vitae, ornare',
        },
      ],
    }
  },
  methods: {
    playVideo(id){
      this.$refs[`promotions__video_${id}`][0].play()
      this.$refs[`promotions__${id}`][0].classList.add('active')
      this.$refs[`promotions__video_${id}`][0].addEventListener('ended', () => {
        this.$refs[`promotions__${id}`][0].classList.remove('active')
      }, false)
    }
  }
}
</script>

<style lang="scss" scoped>
.promotions{
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
    margin-bottom: 24px;
  }
  &__menu{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: res(50, 100);
    button{
      background: var(--main-light-blue);
      border: none;
      padding: 0;
      width: res(34, 55);
      height: res(34, 55);
      border-radius: 50%;
      color: rgba(0,0,0, .5);
      &.tns-nav-active{
        background: var(--second);
        color: var(--light);
      }
      &:not(:first-child){
        margin-left: 15px;
      }
      &:active{
        opacity: .5;
      }
      &:disabled{
        opacity: .3;
        cursor: default;
      }
      &.promotions__btn{
        background: var(--second);
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
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
  &__row{
    @media(min-width:768px){
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &.active{
      .promotions__video:after, .promotions__play{
        opacity: 0;
        visibility: hidden;
      }
      .promotions__info{
        left: 0;
      }
    }
    &:not(:first-child){
      margin-top: 100px;
    }
  }
  &__video{
    border-radius: res(30, 60);
    background: #F5F5F5;
    position: relative;
    overflow: hidden;
    margin-bottom: 30px;
    min-height: res(195, 337);
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
    z-index: 2;
    transition: .5s ease;
    @media(min-width:768px){
      border-radius: res(30, 60);
      background: var(--second);
      position: relative;
      padding: 43px 50px;
      width: per(555);
      left: -67px;
    }
    p{
      margin-bottom: 30px;
      color: var(--light);
      font-size: 16px;
      font-weight: 400;
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
}
</style>