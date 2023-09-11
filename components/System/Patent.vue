<template>
  <div class="patent">
    <h2>Запатентованная система</h2>
    <div class="patent__row">
      <img src="@/assets/systems-img1.png" alt="">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa, at vehicula urna mollis quis. Etiam eros quam, molestie eu ipsum vitae, ornare fermentum massa. Suspendisse urna sem, lacinia blandit eros varius, sagittis eleifend dolor. Donec ut viverra lorem, vitae semper orci. Curabitur pretium sit amet urna at eleifend. Morbi eleifend molestie nisl in sollicitudin.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.patent{
  padding-top: 240px;
  padding-bottom: res(50, 100);
  color: var(--light);
  h2{
    margin-bottom: 50px;
    text-transform: uppercase;
  }
  p{
    color: var(--light);
    font-size: 16px;
    font-weight: 400;
    @media(min-width:768px){
      width: per(515);
    }
  }
  &__row{
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  img{
    display: block;
    @media(max-width:767px){
      margin-bottom: 30px;
      width: calc(100% - 15px);
      margin-left: auto;
      margin-right: auto;
    }
    @media(min-width:768px){
      order: 2;
    }
  }
}
</style>