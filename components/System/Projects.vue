<template>
  <section class="prjects">
    <div class="container">
      <h2>ГОТОВЫЕ СМЕТЫ И ПРОЕКТЫ</h2>
      <div class="prjects__nav">
        <button
          v-for="(item, index) in tabs"
          :key="`tab_nav_${index}`"
          @click.prevent="chooseTab(index, $event)"
          :class="index === 0 ? 'active':''"
          v-html="item.title">
        </button>
      </div>
      <div class="prjects__tab" ref="tab">
        <img :src="require(`@/assets/${tabs[activeTab].img}`)" :alt="tabs[activeTab].title">
        <p v-html="tabs[activeTab].txt"></p>
        <button class="btn btn-second">Заказать бесплатный выезд специалиста</button>
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
        title: 'БАЛКОН 5,1м²',
        img: 'systems-img4.png',
        txt: `1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa, at vehicula urna mollis quis. Etiam eros quam, molestie eu ipsum vitae, ornare fermentum massa. Suspendisse urna sem, lacinia blandit eros varius, sagittis eleifend dolor. Donec ut viverra lorem, vitae semper orci. Curabitur pretium sit amet urna at eleifend. Morbi eleifend molestie nisl in sollicitudin.<br><br>Quisque ut mauris est. Curabitur ut vestibulum urna. Duis in tristique purus, imperdiet vehicula magna. Etiam sem orci, pulvinar nec volutpat nec, elementum eu nunc. Morbi id mauris magna. Nam in ornare tortor, ut efficitur ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante mauris, ultricies eu ultricies ultricies, consectetur sed ex. Proin gravida, elit ornare facilisis malesuada, sem nibh placerat elit, vitae volutpat urna nunc a est. Ut elementum ex eget suscipit tristique. Aliquam erat volutpat. Mauris sed lectus ut tortor cursus dapibus eget vel diam. Etiam ullamcorper non ipsum et hendrerit. Nulla lobortis eros sem, et condimentum ipsum congue ac. Pellentesque sodales nibh vitae ultricies facilisis.`,
      },
      {
        title: 'БАНЯ 22,4м²',
        img: 'systems-img4.png',
        txt: `2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa, at vehicula urna mollis quis. Etiam eros quam, molestie eu ipsum vitae, ornare fermentum massa. Suspendisse urna sem, lacinia blandit eros varius, sagittis eleifend dolor. Donec ut viverra lorem, vitae semper orci. Curabitur pretium sit amet urna at eleifend. Morbi eleifend molestie nisl in sollicitudin.<br><br>Quisque ut mauris est. Curabitur ut vestibulum urna. Duis in tristique purus, imperdiet vehicula magna. Etiam sem orci, pulvinar nec volutpat nec, elementum eu nunc. Morbi id mauris magna. Nam in ornare tortor, ut efficitur ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante mauris, ultricies eu ultricies ultricies, consectetur sed ex. Proin gravida, elit ornare facilisis malesuada, sem nibh placerat elit, vitae volutpat urna nunc a est. Ut elementum ex eget suscipit tristique. Aliquam erat volutpat. Mauris sed lectus ut tortor cursus dapibus eget vel diam. Etiam ullamcorper non ipsum et hendrerit. Nulla lobortis eros sem, et condimentum ipsum congue ac. Pellentesque sodales nibh vitae ultricies facilisis.`,
      },
      {
        title: 'ДОМ 102,1м²',
        img: 'systems-img4.png',
        txt: `3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa, at vehicula urna mollis quis. Etiam eros quam, molestie eu ipsum vitae, ornare fermentum massa. Suspendisse urna sem, lacinia blandit eros varius, sagittis eleifend dolor. Donec ut viverra lorem, vitae semper orci. Curabitur pretium sit amet urna at eleifend. Morbi eleifend molestie nisl in sollicitudin.<br><br>Quisque ut mauris est. Curabitur ut vestibulum urna. Duis in tristique purus, imperdiet vehicula magna. Etiam sem orci, pulvinar nec volutpat nec, elementum eu nunc. Morbi id mauris magna. Nam in ornare tortor, ut efficitur ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante mauris, ultricies eu ultricies ultricies, consectetur sed ex. Proin gravida, elit ornare facilisis malesuada, sem nibh placerat elit, vitae volutpat urna nunc a est. Ut elementum ex eget suscipit tristique. Aliquam erat volutpat. Mauris sed lectus ut tortor cursus dapibus eget vel diam. Etiam ullamcorper non ipsum et hendrerit. Nulla lobortis eros sem, et condimentum ipsum congue ac. Pellentesque sodales nibh vitae ultricies facilisis.`,
      },
      {
        title: 'Таблица укладки системы',
        img: 'systems-img4.png',
        txt: `4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa, at vehicula urna mollis quis. Etiam eros quam, molestie eu ipsum vitae, ornare fermentum massa. Suspendisse urna sem, lacinia blandit eros varius, sagittis eleifend dolor. Donec ut viverra lorem, vitae semper orci. Curabitur pretium sit amet urna at eleifend. Morbi eleifend molestie nisl in sollicitudin.<br><br>Quisque ut mauris est. Curabitur ut vestibulum urna. Duis in tristique purus, imperdiet vehicula magna. Etiam sem orci, pulvinar nec volutpat nec, elementum eu nunc. Morbi id mauris magna. Nam in ornare tortor, ut efficitur ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante mauris, ultricies eu ultricies ultricies, consectetur sed ex. Proin gravida, elit ornare facilisis malesuada, sem nibh placerat elit, vitae volutpat urna nunc a est. Ut elementum ex eget suscipit tristique. Aliquam erat volutpat. Mauris sed lectus ut tortor cursus dapibus eget vel diam. Etiam ullamcorper non ipsum et hendrerit. Nulla lobortis eros sem, et condimentum ipsum congue ac. Pellentesque sodales nibh vitae ultricies facilisis.`,
      },
    ]
  }),
  methods: {
    chooseTab(index, e){
      document.querySelectorAll('.prjects__nav button').forEach(item => item.classList.remove('active'))
      e.target.classList.add('active')
      this.$refs.tab.classList.add('prjects__tab-hide')
      setTimeout(()=>{
        this.activeTab = index
        this.$refs.tab.classList.remove('prjects__tab-hide')
      }, 500);
    }
  }
}
</script>

<style lang="scss" scoped>
.prjects{
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
    max-width: 923px;
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
    img{
      width: 100%;
      margin-bottom: 50px;
    }
    p{
      margin-bottom: 50px;
      color: var(--dark);
      font-size: 16px;
      font-weight: 400;
    }
    .btn{
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>