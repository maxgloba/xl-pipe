<template>
  <section class="news">
    <div class="container" v-if="items">
      <h2>НОВОСТИ</h2>
      <div class="news__filter">
        <button @click.prevent="newsFilter(false, $event)" class="active">Все</button>
        <button @click.prevent="newsFilter('Новости', $event)">Новости</button>
        <button @click.prevent="newsFilter('Акции', $event)">Акции</button>
        <button @click.prevent="newsFilter('Мероприятия', $event)">Мероприятия</button>
        <button @click.prevent="newsFilter('Полезное', $event)">Полезное</button>
      </div>
      <div class="news__sort">
        <h5>Страница {{ 1 }}</h5>
        <button @click.prevent="newsSort">
          <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_101_4035)"> <path d="M28.8762 0.823188C28.6427 0.288609 28.2387 0.0212842 27.6621 0.0209961H1.33728C0.761494 0.0209961 0.356869 0.288609 0.123761 0.823188C-0.109204 1.38514 -0.0133238 1.86533 0.411832 2.26283L10.5514 12.4021V22.3974C10.5514 22.7544 10.6817 23.0625 10.9421 23.3234L16.2069 28.588C16.4539 28.8483 16.7623 28.979 17.1326 28.979C17.297 28.979 17.4683 28.9445 17.6466 28.876C18.1815 28.6427 18.449 28.2384 18.449 27.6625V12.4022L28.5882 2.2629C29.0135 1.8654 29.1092 1.38536 28.8762 0.823188Z" fill="white"/> </g> <defs> <clipPath id="clip0_101_4035"> <rect width="29" height="29" fill="white"/> </clipPath> </defs> </svg>
          <span v-html="sort === 'ASC' ? 'Сначала новые':'Сначала старые'"></span>
        </button>
      </div>
      <vue-tiny-slider v-bind="sliderOptions" ref="newsSldier">
        <div v-for="i in Math.ceil(items.length / 3)">
          <div class="news__row" v-for="(item, index) in items.slice((i - 1) * 3, i * 3)">
            <img :src="require(`@/assets/${item.thumb}`)" :alt="item.title">
            <div class="news__info">
              <h4>{{ item.title }}</h4>
              <h6>{{ item.date }}</h6>
              <p>{{ item.excerpt }}</p>
            </div>
            <nuxt-link class="news__read" :to="`/news/${item.slug}`">
              Читать больше
              <svg width="61" height="8" viewBox="0 0 61 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M60.3536 4.35355C60.5488 4.15829 60.5488 3.84171 60.3536 3.64645L57.1716 0.464466C56.9763 0.269204 56.6597 0.269204 56.4645 0.464466C56.2692 0.659728 56.2692 0.976311 56.4645 1.17157L59.2929 4L56.4645 6.82843C56.2692 7.02369 56.2692 7.34027 56.4645 7.53553C56.6597 7.7308 56.9763 7.7308 57.1716 7.53553L60.3536 4.35355ZM0 4.5H60V3.5H0V4.5Z" fill="#404040"/></svg>
            </nuxt-link>
          </div>
        </div>
      </vue-tiny-slider>
      <div class="news__menu">
        <button class="news__btn news__btn-prev"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="19" viewBox="0 0 25 19" fill="none"><path d="M11.1404 0.506297C10.8189 0.182115 10.3829 0 9.92835 0C9.47377 0 9.03781 0.182115 8.71633 0.506297L1.00193 8.28787C0.680544 8.61215 0.5 9.05191 0.5 9.51044C0.5 9.96897 0.680544 10.4087 1.00193 10.733L8.71633 18.5146C9.03965 18.8296 9.47269 19.0039 9.92218 18.9999C10.3717 18.996 10.8016 18.8141 11.1195 18.4935C11.4373 18.1729 11.6176 17.7392 11.6215 17.2858C11.6254 16.8324 11.4526 16.3956 11.1404 16.0694L6.49973 11.2397H22.7857C23.2404 11.2397 23.6764 11.0575 23.9979 10.7332C24.3194 10.4089 24.5 9.96906 24.5 9.51044C24.5 9.05182 24.3194 8.61198 23.9979 8.28768C23.6764 7.96339 23.2404 7.7812 22.7857 7.7812H6.49973L11.1404 2.95144C11.4618 2.62716 11.6423 2.1874 11.6423 1.72887C11.6423 1.27034 11.4618 0.830577 11.1404 0.506297Z" fill="white"/></svg></button>
        <div class="news__nav" id="news__nav">
          <button v-for="(item, index) in Math.ceil(items.length / 3)">{{ index + 1 }}</button>
        </div>
        <button class="news__btn news__btn-next"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="19" viewBox="0 0 25 19" fill="none"><path d="M13.8596 0.506297C14.1811 0.182115 14.6171 0 15.0717 0C15.5262 0 15.9622 0.182115 16.2837 0.506297L23.9981 8.28787C24.3195 8.61215 24.5 9.05191 24.5 9.51044C24.5 9.96897 24.3195 10.4087 23.9981 10.733L16.2837 18.5146C15.9603 18.8296 15.5273 19.0039 15.0778 18.9999C14.6283 18.996 14.1984 18.8141 13.8805 18.4935C13.5627 18.1729 13.3824 17.7392 13.3785 17.2858C13.3746 16.8324 13.5474 16.3956 13.8596 16.0694L18.5003 11.2397H2.21431C1.75965 11.2397 1.32361 11.0575 1.00211 10.7332C0.680615 10.4089 0.5 9.96906 0.5 9.51044C0.5 9.05182 0.680615 8.61198 1.00211 8.28768C1.32361 7.96339 1.75965 7.7812 2.21431 7.7812H18.5003L13.8596 2.95144C13.5382 2.62716 13.3577 2.1874 13.3577 1.72887C13.3577 1.27034 13.5382 0.830577 13.8596 0.506297Z" fill="white"/></svg></button>
      </div>
    </div>
  </section>
</template>

<script>
export default{
  data(){
    return{
      sort: 'ASC',
      sliderOptions: {
        items: 1,
        loop: false,
        nav: false,
        navPosition: 'bottom',
        nav: true,
        navContainer: '#news__nav',
        controlsPosition: 'bottom',
        prevButton: `.news__btn-prev`,
        nextButton: `.news__btn-next`,
        gutter: 5,
        autoHeight: true,
        slideBy: 'page',
      },
      items: null,
    }
  },
  computed: {
    posts() {
      return this.$store.getters['news/getPosts']
    },
  },
  methods: {
    newsFilter(id, e){
      document.querySelectorAll('.news__filter button').forEach(el => el.classList.remove('active'))
      e.target.classList.add('active')
      this.items = id ? this.posts.filter(item => item.topic === id) : this.posts
      setTimeout(()=>{
        this.$refs.newsSldier.slider.refresh()
      }, 1000);
    },
    newsSort(){
      if(this.sort === 'ASC'){
        this.sort = 'DESC'
        this.items = this.items.sort((a, b) => new Date(b.date) - new Date(a.date))
      } else {
        this.sort = 'ASC'
        this.items = this.items.sort((a, b) => new Date(a.date) - new Date(b.date))
      }
      setTimeout(()=>{
        this.$refs.newsSldier.slider.refresh()
      }, 1000);
    }
  },
  mounted(){
    this.items = this.posts
  }
}
</script>

<style lang="scss" scoped>
.news{
  .container{
    padding-top: 100px;
    padding-bottom: 100px;
    background: url(@/assets/whywe-bg.png) repeat-y 0 0;
  }
  h2{
    margin-bottom: 30px;
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
      width: res(35, 55);
      height: res(35, 55);
      border-radius: 50%;
      color: rgba(0,0,0, .5);
      &.tns-nav-active{
        background: var(--second);
        color: var(--light);
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
      &.news__btn{
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
  &__filter{
    margin-bottom: res(0, 70);
    button{
      height: res(39, 54);
      border: none;
      border-radius: 90px;
      background: var(--main);
      padding: res(10, 15) res(25, 38);
      color: var(--light);
      font-size: res(16, 20);
      font-weight: 700;
      @media(max-width:767px){
        margin-bottom: 10px;
        margin-right: 10px;
      }
      &:not(:first-child){
        @media(min-width:768px){
          margin-left: 15px;
        }
      }
      &.active{
        background: var(--second);
      }
    }
  }
  &__row{
    position: relative;
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &:not(:first-child){
      margin-top: res(30, 80);
      padding-top: res(30, 80);
      &:before{
        content: "";
        position: absolute;
        height: 2px;
        background: rgba(64, 64, 64, 0.15);
        border-radius: 10px;
        width: 100%;
        left: 0;
        top: 0;
      }
    }
    & > img{
      @media(max-width:767px){
        margin-bottom: 20px;
      }
    }
  }
  &__info{
    @media(max-width:767px){
      margin-bottom: 15px;
    }
    @media(min-width:768px){
      width: per(500);
    }
  }
  h4{
    color: var(--dark);
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  h6{
    margin-bottom: 20px;
    color: rgba(64, 64, 64, 0.50);
    font-size: 14px;
    font-weight: 400;
  }
  p{
    color: var(--dark);
    font-size: 14px;
    font-weight: 400;
  }
  &__read{
    background: none;
    border: none;
    color: var(--dark);
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    svg{
      margin-left: res(15, 30);
    }
  }
  h5{
    color: rgba(64, 64, 64, 0.50);
    font-size: 14px;
    font-weight: 500;
    @media(max-width:767px){
      display: none;
    }
  }
  &__sort{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 50px;
    button{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 54px;
      border: none;
      border-radius: 90px;
      background: var(--second);
      color: var(--light);
      font-size: res(16, 20);
      font-weight: 700;
      padding: res(10, 13) res(25, 37);
      svg{
        margin-right: 20px;
      }
    }
  }
}
</style>