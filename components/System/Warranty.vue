<template>
  <section class="warranty">
    <div class="container">
      <h2>ГАРАНТИЯ</h2>
      <div class="warranty__row">
        <div class="warranty__img">
          <img src="@/assets/systems-img1.png" alt="">
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa, at vehicula urna mollis quis. Etiam eros quam, molestie eu ipsum vitae, ornare fermentum massa. Suspendisse urna sem, lacinia blandit eros varius, sagittis eleifend dolor. Donec ut viverra lorem, vitae semper orci. Curabitur pretium sit amet urna at eleifend. Morbi eleifend molestie nisl in sollicitudin.</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.warranty{
  .container{
    padding-top: 100px;
    padding-bottom: res(50, 150);
    background: url(@/assets/whywe-bg.png) no-repeat 100px center;
  }
  h2{
    text-align: center;
    margin-bottom: res(30, 50);
    @media(min-width:768px){
      text-align: right;
    }
  }
  &__img{
    display: block;
    width: calc(100% - 30px);
    position: relative;
    @media(max-width:767px){
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 30px;
    }
    @media(min-width:768px){
      width: per(535);
    }
    img{
      display: block;
      width: 100%;
      position: relative;
      z-index: 2;
    }
    &:before{
      content:"";
      width: 100%;
      height: calc(100% + 60px);
      background: var(--second);
      position: absolute;
      z-index: 1;
      left: -150px;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 0 40px 40px 0;
      @media(max-width:767px){
        display: none;
      }
    }
  }
  &__row{
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    p{
      width: 100%;
      color: var(--4, #404040);
      font-family: Montserrat;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      @media(min-width:768px){
        width: per(518);
      }
    }
  }
}
</style>