<template>
  <div class="about-type">
    <h2>РЕКОМЕНДУЕМЫЕ ВАРИАНТЫ ОТОПЛЕНИЯ</h2>
    <p>Если у Вас в доме уже уложен пол, то потребуется его снять</p>
    <div class="about-type__nav">
      <button v-for="(item, index) in tabsNav" :class="tab === index + 1 ? 'active':''" :key="`tab_nav_${index}`" @click="getTab(index + 1)">{{ item }}</button>
    </div>
    <div class="about-type__tab" ref="tabWindow">
      <button class="about-type__btn about-type__btn-prev"><svg width="27" height="50" viewBox="0 0 27 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 49L2 25L26 1" stroke="white" stroke-width="2"/></svg></button>
      <button class="about-type__btn about-type__btn-next"><svg width="27" height="50" viewBox="0 0 27 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L25 25L1 49" stroke="white" stroke-width="2"/></svg></button>
      <vue-tiny-slider v-bind="sliderOptions" ref="tabSldier">
        <img v-for="(image, index) in tabsItems[tab - 1]" :src="require(`@/assets/${image}`)"  :key="`tab_item_${index}`" :alt="`tab_item_${index}`" />
      </vue-tiny-slider>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return{
      tab: 1,
      tabsNav: ['Балконы и лоджии','Бани','Дачи','Загородная недвижимость','Прочие','Комерческие объекты'],
      tabsItems: [
        ['about-type-1.png', 'about-type-1.png', 'about-type-1.png'],
        ['about-type-1.png', 'about-type-1.png', 'about-type-1.png'],
        ['about-type-1.png', 'about-type-1.png', 'about-type-1.png'],
        ['about-type-1.png', 'about-type-1.png', 'about-type-1.png'],
        ['about-type-1.png', 'about-type-1.png', 'about-type-1.png'],
        ['about-type-1.png', 'about-type-1.png', 'about-type-1.png'],
      ],
      sliderOptions: {
        items: 1,
        loop: false,
        nav: false,
        prevButton: `.about-type__btn-prev`,
        nextButton: `.about-type__btn-next`,
      }
    }
  },
  methods: {
    getTab(index){
      this.tab = index
      this.$refs.tabWindow.classList.add('about-type__tab-hide')
      setTimeout(() => {
        this.$refs.tabSldier.goTo('first')
        this.$refs.tabWindow.classList.remove('about-type__tab-hide')
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
.about-type{
  &__tab{
    transition: .5s ease-in-out;
    position: relative;
    @media(max-width:767px){
      margin-left: -30px;
      margin-right: -30px;
    }
    &-hide{
      opacity: 0;
    }
  }
  &__nav{
    position: relative;
    margin-bottom: res(50, 100);
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
    }
    &:before{
      content: "";
      border-radius: 4px;
      height: 3px;
      background: #AB65C5;
      width: 100%;
      position: absolute;
      top: 100%;
      left: 0;
      @media(max-width:767px){
        display: none;
      }
    }
    button{
      background: none;
      color: var(--light);
      text-align: center;
      font-size: res(12, 20);
      font-weight: 500;
      border: none;
      padding-bottom: res(10, 30);
      position: relative;
      @media(max-width:767px){
        padding-top: 10px;
        border-radius: 30px;
        padding-left: 15px;
        padding-right: 15px;
        background: rgba(126, 43, 134, .5);
        margin-right: 10px;
        margin-bottom: 10px;
      }
      &:before{
        content: "";
        border-radius: 4px;
        background: var(--light);
        height: 3px;
        width: 0;
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        transition: .3s ease-in-out;
        @media(max-width:767px){
          display: none;
        }
      }
      &:hover, &.active{
        @media(max-width:767px){
          background: var(--second);
        }
        &:before{
          width: 100%;
        }
      }
    }
  }
  h2{
    margin-bottom: 20px;
    text-align: center;
  }
  p{
    text-align: center;
    margin-bottom: 50px;
  }
  &__btn{
    position: absolute;
    z-index: 10;
    top: 50%;
    transform: translate(0, -50%);
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    &-prev{
      left: res(10, 70);
    }
    &-next{
      right: res(10, 70);
    }
    &:active{
      opacity: .5;
    }
    &:disabled{
      opacity: .3;
      cursor: default;
    }
    svg{
      width: 14px;
      @media(min-width:768px){
        width: 27px;
      }
    }
  }
}
</style>