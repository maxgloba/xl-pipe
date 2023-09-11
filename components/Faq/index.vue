<template>
  <section class="faq">
    <div class="container">
      <h2>ЧАСТО ЗАДАВАЕМЫЕ ВОРОСЫ</h2>
      <div class="faq__list">
        <div class="faq__item" v-for="(item, index) in items" :key="`faq__${index}`" @click.prevent="actionFaq">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14" fill="none"><path d="M23.3116 1.41556L22.132 0.236023C21.9748 0.0785091 21.7937 0 21.589 0C21.3848 0 21.2038 0.0785091 21.0466 0.236023L11.7736 9.50861L2.50089 0.236271C2.34362 0.0787572 2.16264 0.000247787 1.95818 0.000247787C1.75365 0.000247787 1.57266 0.0787572 1.41548 0.236271L0.236023 1.41589C0.0785091 1.57308 0 1.75406 0 1.9586C0 2.16297 0.0787571 2.34395 0.236023 2.50114L11.2309 13.4962C11.388 13.6535 11.5691 13.7321 11.7736 13.7321C11.978 13.7321 12.1588 13.6535 12.3159 13.4962L23.3116 2.50114C23.4688 2.34387 23.5469 2.16289 23.5469 1.9586C23.5469 1.75406 23.4688 1.57308 23.3116 1.41556Z" fill="#622C67"/></svg>
          <h3>{{ item.q }}</h3>
          <div class="faq__answer">{{ item.a }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default{
  data(){
    return{
      items: [
        {
          q: 'Какие гарантии вы предоставляете?',
          a: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa, at vehicula urna mollis quis. Etiam eros quam, molestie eu ipsum vitae, ornare fermentum massa. Suspendisse urna sem, lacinia blandit eros varius, sagittis eleifend dolor. Donec ut viverra lorem, vitae semper orci. Curabitur pretium sit amet urna at eleifend. Morbi eleifend molestie nisl in sollicitudin.`
        },
        {
          q: 'Какие гарантии вы предоставляете?',
          a: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa, at vehicula urna mollis quis. Etiam eros quam, molestie eu ipsum vitae, ornare fermentum massa. Suspendisse urna sem, lacinia blandit eros varius, sagittis eleifend dolor. Donec ut viverra lorem, vitae semper orci. Curabitur pretium sit amet urna at eleifend. Morbi eleifend molestie nisl in sollicitudin.`
        },
        {
          q: 'Какие гарантии вы предоставляете?',
          a: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa, at vehicula urna mollis quis. Etiam eros quam, molestie eu ipsum vitae, ornare fermentum massa. Suspendisse urna sem, lacinia blandit eros varius, sagittis eleifend dolor. Donec ut viverra lorem, vitae semper orci. Curabitur pretium sit amet urna at eleifend. Morbi eleifend molestie nisl in sollicitudin.`
        },
        {
          q: 'Какие гарантии вы предоставляете?',
          a: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa, at vehicula urna mollis quis. Etiam eros quam, molestie eu ipsum vitae, ornare fermentum massa. Suspendisse urna sem, lacinia blandit eros varius, sagittis eleifend dolor. Donec ut viverra lorem, vitae semper orci. Curabitur pretium sit amet urna at eleifend. Morbi eleifend molestie nisl in sollicitudin.`
        },
        {
          q: 'Какие гарантии вы предоставляете?',
          a: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa, at vehicula urna mollis quis. Etiam eros quam, molestie eu ipsum vitae, ornare fermentum massa. Suspendisse urna sem, lacinia blandit eros varius, sagittis eleifend dolor. Donec ut viverra lorem, vitae semper orci. Curabitur pretium sit amet urna at eleifend. Morbi eleifend molestie nisl in sollicitudin.`
        },
        {
          q: 'Какие гарантии вы предоставляете?',
          a: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa, at vehicula urna mollis quis. Etiam eros quam, molestie eu ipsum vitae, ornare fermentum massa. Suspendisse urna sem, lacinia blandit eros varius, sagittis eleifend dolor. Donec ut viverra lorem, vitae semper orci. Curabitur pretium sit amet urna at eleifend. Morbi eleifend molestie nisl in sollicitudin.`
        },
      ]
    }
  },
  methods: {
    actionFaq(e){
      e.target.classList.toggle('active')
    }
  },
}
</script>

<style lang="scss">
.faq{
  color: var(--light);
  .container{
    background: var(--main);
    padding-top: 240px;
    padding-bottom: 100px;
    border-radius: 0 0 30px 30px;
    @media(min-width:768px){
      border-radius: res(30, 60);
    }
  }
  h2{
    margin-bottom: res(50, 100);
  }
  &__item{
    border-radius: 40px;
    background: var(--light);
    padding: res(17, 30) res(20, 100);
    position: relative;
    *{
      pointer-events: none;
    }
    &.active{
      svg{
        transform: rotate(180deg);
      }
      .faq__answer{
        transition: .5s ease .5s;
        margin-top: 20px;
        max-height: 2000px;
      }
    }
    &:not(:first-child){
      margin-top: 30px;
    }
  }
  h3{
    color: var(--dark);
    font-size: res(16, 20);
    font-weight: 700;
  }
  svg{
    display: block;
    position: absolute;
    right: res(32, 40); top: res(32, 40);
    width: 23px;
    transition: .5s ease;
  }
  &__answer{
    color: var(--dark);
    font-size: 14px;
    font-weight: 400;
    max-height: 0px;
    overflow: hidden;
    transition: .5s ease;
  }
}
</style>