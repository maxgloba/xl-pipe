<template>
  <div class="about-price">
    <h2>ПРО СТОИМОСТЬ</h2>
    <div class="about-price__row">
      <img src="@/assets/about-price-img.png" alt="">
      <div class="about-price__info">
        <ul>
          <li>Mauris et ornare nibh, sed dictum leo. Sed gravida accumsan nisi, sed malesuada quam egestas vel.</li>
          <li>Mauris finibus magna a metus elementum ornare. Sed id mi ac purus efficitur mattis non eu erat. Nulla pellentesque euismod mi nec pharetra. </li>
          <li>Aliquam erat volutpat. Nullam nec nisi lacus. Sed ornare molestie tellus, ut auctor augue malesuada quis. </li>
          <li>Etiam felis elit, aliquam vitae fermentum vitae, dapibus a lectus. Etiam porttitor quam tincidunt consectetur pretium.</li>
          <li>Mauris auctor maximus lacus, eu laoreet enim suscipit ac. Sed accumsan quam nec nisi fermentum aliquam. </li>
        </ul>
        <div class="about-price__price">ОТ 600.000 ₽</div>
        <button class="btn btn-second">Заказать</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-price{
  ul{
    margin-bottom: 30px;
    padding-left: 1em;
    padding-top: res(30, 60);
    li{
      list-style: outside disc;
      color: var(--light);
      font-size: 16px;
      font-weight: 500;
      text-align: left;
      &:not(:first-child){
        margin-top: 15px;
      }
    }
  }
  &__row{
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    img{
      @media(min-width:992px){
        order: 2;
        margin-bottom: 0;
        width: per(565);
        height: auto;
      }
    }
  }
  &__info{
    padding-right: res(0, 115);
  }
  &__price{
    font-size: 16px;
    font-weight: 700;
    text-align: right;
    margin-bottom: 30px;
  }
  h2{
    margin-bottom: res(30, 70);
  }
  .btn{
    @media(max-width:768px){
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>