<template>
  <section class="electricity">
    <div class="container">
      <h2>ПОТРЕБЛЕНИЕ ЭЛЕКТРОЭНЕРГИИ ПРИ ОТОПЛЕНИИ</h2>
      <div class="electricity__nav">
        <button
          v-for="(item, index) in tabs"
          :key="`tab_nav_${index}`"
          @click.prevent="chooseTab(index, $event)"
          :class="index === 0 ? 'active':''"
          v-html="item.title">
        </button>
      </div>
      <div class="electricity__tab" ref="tab">
        <ul>
          <li v-for="item in tabs[activeTab].items">
            {{ item.title }}
            <b>{{ item.txt }}</b>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    activeTab: 0,
    tabs: [
      {
        title: 'СРЕДНЯЯ ПОЛОСА РОССИИ',
        items: [
          {
            title: 'СЕНТЯБРЬ',
            txt: '676 кВт',
          },
          {
            title: 'ОКТЯБРЬ',
            txt: '1188 кВт',
          },
          {
            title: 'НОЯБРЬ',
            txt: '1814 кВт',
          },
          {
            title: 'ДЕКАБРЬ',
            txt: '2247 кВт',
          },
          {
            title: 'ЯНВАРЬ',
            txt: '2380 кВт',
          },
          {
            title: 'ФЕВРАЛЬ',
            txt: '2267 кВт',
          },
          {
            title: 'МАРТ',
            txt: '1729 кВт',
          },
          {
            title: 'АПРЕЛЬ',
            txt: '1160 кВт',
          },
          {
            title: 'МАЙ',
            txt: '615 кВт',
          },
        ]
      },
      {
        title: 'СЕВЕРНЫЕ РЕГИОНЫ',
        items: [
          {
            title: 'СЕНТЯБРЬ',
            txt: '878 кВт',
          },
          {
            title: 'ОКТЯБРЬ',
            txt: '1200 кВт',
          },
          {
            title: 'НОЯБРЬ',
            txt: '1342 кВт',
          },
          {
            title: 'ДЕКАБРЬ',
            txt: '2247 кВт',
          },
          {
            title: 'ЯНВАРЬ',
            txt: '2380 кВт',
          },
          {
            title: 'ФЕВРАЛЬ',
            txt: '2267 кВт',
          },
          {
            title: 'МАРТ',
            txt: '1729 кВт',
          },
          {
            title: 'АПРЕЛЬ',
            txt: '1160 кВт',
          },
          {
            title: 'МАЙ',
            txt: '615 кВт',
          },
        ]
      },
    ]
  }),
  methods: {
    chooseTab(index, e){
      document.querySelectorAll('.electricity__nav button').forEach(item => item.classList.remove('active'))
      e.target.classList.add('active')
      this.$refs.tab.classList.add('electricity__tab-hide')
      setTimeout(()=>{
        this.activeTab = index
        this.$refs.tab.classList.remove('electricity__tab-hide')
      }, 500);
    }
  }
}
</script>

<style lang="scss" scoped>
.electricity{
  .container{
    padding-top: res(50, 100);
    padding-bottom: res(50, 100);
    background: url(@/assets/whywe-bg.png) no-repeat 100px center;
  }
  h2{
    text-align: center;
    color: var(--dark);
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 50px;
  }
  &__nav{
    max-width: 616px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    margin-bottom: res(30, 100);
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
    }
    &:after{
      content:"";
      height: 3px;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      border-radius: 4px;
      background: #EBEBEB;
      z-index: 1;
      @media(max-width:767px){
        display: none;
      }
    }
    button{
      color: var(--dark);
      text-align: center;
      font-size: res(12, 20);
      font-weight: 500;
      background: none;
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
        color: var(--light);
      }
      &:after{
        content:"";
        height: 3px;
        width: 0;
        position: absolute;
        left: 0;
        bottom: 0;
        border-radius: 4px;
        background: var(--second);
        z-index: 2;
        @media(max-width:767px){
          display: none;
        }
      }
      &.active{
        @media(max-width:767px){
          background: var(--second);
        }
        &:after{
          width: 100%;
        }
      }
    }
  }
  &__tab{
    transition: .5s ease;
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
    &-hide{
      opacity: 0;
    }
    ul{
      li{
        display: flex;
        justify-content: space-between;
        border-radius: 100px;
        background: rgba(229, 213, 231, 0.41);
        padding: 16px res(20, 70);
        color: var(--dark);
        font-size: res(14, 20);
        font-weight: 400;
        &:not(:first-child){
          margin-top: 8px;
        }
      }
    }
  }
}
</style>