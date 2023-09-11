<template>
  <section class="components">
    <div class="container">
      <h2>ОРИГИНАЛЬНЫЕ КОРЕЙСКИЕ КОМПЛЕКТУЮЩИЕ</h2>
      <div class="components__nav">
        <button
          v-for="(item, index) in tabs"
          :key="`tab_nav_${index}`"
          @click.prevent="chooseTab(index, $event)"
          :class="index === 0 ? 'active':''"
          v-html="item.title">
        </button>
      </div>
      <div class="components__tab" ref="tab">
        <img :src="require(`@/assets/${tabs[activeTab].img}`)" :alt="tabs[activeTab].title">
        <div class="components__info">
          <p>{{ tabs[activeTab].txt }}</p>
          <ul v-if="tabs[activeTab].list">
            <li v-for="el in tabs[activeTab].list">
              <img :src="require(`@/assets/${el.img}`)" :alt="el.txt">
              {{ el.txt }}
            </li>
          </ul>
        </div>
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
        title: 'Греющий кабель',
        img: 'systems-img1.png',
        txt: '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa, at vehicula urna mollis quis. Etiam eros quam, molestie eu ipsum vitae, ornare fermentum massa. Suspendisse urna sem, lacinia blandit eros varius, sagittis eleifend dolor. Donec ut viverra lorem, vitae semper orci. Curabitur pretium sit amet urna at eleifend. Morbi eleifend molestie nisl in sollicitudin.',
        list: [
          {
            img: 'systems-img2.png',
            txt: 'Lorem ipsum dolor',
          },
          {
            img: 'systems-img2.png',
            txt: 'Lorem ipsum dolor',
          },
          {
            img: 'systems-img2.png',
            txt: 'Lorem ipsum dolor',
          },
          {
            img: 'systems-img2.png',
            txt: 'Lorem ipsum dolor',
          },
        ]
      },
      {
        title: 'Антифриз',
        img: 'systems-img1.png',
        txt: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa, at vehicula urna mollis quis. Etiam eros quam, molestie eu ipsum vitae, ornare fermentum massa. Suspendisse urna sem, lacinia blandit eros varius, sagittis eleifend dolor. Donec ut viverra lorem, vitae semper orci. Curabitur pretium sit amet urna at eleifend. Morbi eleifend molestie nisl in sollicitudin.',
        list: [
          {
            img: 'systems-img2.png',
            txt: 'Lorem ipsum dolor',
          },
          {
            img: 'systems-img2.png',
            txt: 'Lorem ipsum dolor',
          },
          {
            img: 'systems-img2.png',
            txt: 'Lorem ipsum dolor',
          },
          {
            img: 'systems-img2.png',
            txt: 'Lorem ipsum dolor',
          },
        ]
      },
      {
        title: 'Заводские комплектующие',
        img: 'systems-img1.png',
        txt: '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa, at vehicula urna mollis quis. Etiam eros quam, molestie eu ipsum vitae, ornare fermentum massa. Suspendisse urna sem, lacinia blandit eros varius, sagittis eleifend dolor. Donec ut viverra lorem, vitae semper orci. Curabitur pretium sit amet urna at eleifend. Morbi eleifend molestie nisl in sollicitudin.',
        list: [
          {
            img: 'systems-img2.png',
            txt: 'Lorem ipsum dolor',
          },
          {
            img: 'systems-img2.png',
            txt: 'Lorem ipsum dolor',
          },
          {
            img: 'systems-img2.png',
            txt: 'Lorem ipsum dolor',
          },
          {
            img: 'systems-img2.png',
            txt: 'Lorem ipsum dolor',
          },
        ]
      },
      {
        title: 'Система поглощения давления',
        img: 'systems-img1.png',
        txt: '4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa, at vehicula urna mollis quis. Etiam eros quam, molestie eu ipsum vitae, ornare fermentum massa. Suspendisse urna sem, lacinia blandit eros varius, sagittis eleifend dolor. Donec ut viverra lorem, vitae semper orci. Curabitur pretium sit amet urna at eleifend. Morbi eleifend molestie nisl in sollicitudin.',
        list: [
          {
            img: 'systems-img2.png',
            txt: 'Lorem ipsum dolor',
          },
          {
            img: 'systems-img2.png',
            txt: 'Lorem ipsum dolor',
          },
          {
            img: 'systems-img2.png',
            txt: 'Lorem ipsum dolor',
          },
          {
            img: 'systems-img2.png',
            txt: 'Lorem ipsum dolor',
          },
        ]
      },
    ]
  }),
  methods: {
    chooseTab(index, e){
      document.querySelectorAll('.components__nav button').forEach(item => item.classList.remove('active'))
      e.target.classList.add('active')
      this.$refs.tab.classList.add('components__tab-hide')
      setTimeout(()=>{
        this.activeTab = index
        this.$refs.tab.classList.remove('components__tab-hide')
      }, 500);
    }
  }
}
</script>

<style lang="scss" scoped>
.components{
  .container{
    padding-top: 100px;
    padding-bottom: 100px;
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
    max-width: 1065px;
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
  &__info{
    @media(min-width:768px){
      width: 50%;
    }
  }
  &__tab{
    transition: .5s ease;
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    &-hide{
      opacity: 0;
    }
    & > img{
      @media(max-width:767px){
        margin-bottom: 30px;
      }
      @media(min-width:768px){
        width: calc(50% - 50px);
      }
    }
    p{
      margin-bottom: 50px;
      color: var(--dark);
      font-size: 16px;
      font-weight: 400;
    }
    ul{
      @media(min-width:768px){
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      li{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: res(15, 50);
        @media(min-width:768px){
          width: calc(50% - 25px);
        }
        img{
          width: 40px;
          margin-right: 30px;
        }
      }
    }
  }
}
</style>