<template>
  <section class="whywe">
    <div class="container">
      <div class="whywe__msg">ОСТЕРЕГАЙТЕСЬ ПОДДЕЛОК!</div>
      <h2>ПОЧЕМУ ИМЕННО МЫ</h2>
      <div class="whywe__row">
        <div class="whywe__img">
          <img src="@/assets/whywe-img.png" alt="">
        </div>
        <div class="whywe__text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus metus velit, volutpat in dignissim vel, imperdiet id odio. Vivamus et lectus non odio fermentum condimentum vel et mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor volutpat consectetur. Nam ut porta sem. Phasellus eget scelerisque elit, quis imperdiet urna. Phasellus a lectus quis massa pretium maximus.</p>
          <p>Nam pellentesque sodales nulla, consectetur pretium nulla facilisis eget. Proin bibendum imperdiet erat, viverra semper orci vulputate at. Quisque ullamcorper dolor ac euismod gravida. Donec tempor leo imperdiet ligula ornare porttitor.</p>
          <p>A us nunc hendrerit et. Proin imperdiet, tortor vitae consequat rhoncus, augue turpis placerat eros, a bibendum erat neque in ex. Ut auctor sit amet purus ut condimentum. Donec vel leo vel tortor mattis vehicula tincidunt id ex.</p>
        </div>
      </div>
      <button class="btn btn-second">Заказать</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.whywe{
  .container{
    padding-top: res(100, 158);
    position: relative;
    background: url(@/assets/whywe-bg.png) no-repeat 100px center;
    padding-bottom: 100px;
  }
  p{
    font-size: res(14, 20);
    font-weight: 300;
  }
  &__row{
    margin-bottom: res(44, 64);
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
    }
  }
  &__img{
    margin-bottom: 30px;
    @media(min-width:768px){
      margin-bottom: 0;
      order: 2;
      width: per(357);
    }
  }
  &__msg{
    position: absolute;
    color: var(--light);
    font-size: 14px;
    font-weight: 400;
    height: 38px;
    padding: 10px 20px;
    background: var(--second);
    left: 0; top: 50px;
    border-radius: 0 20px 20px 0;
    display: none;
    @media(min-width:768px){
      display: block;
    }
  }
  &__text{
    @media(min-width:768px){
      width: per(695);
    }
  }
  h2{
    margin-bottom: res(27, 70);
  }
  .btn{
    margin: 0 auto;
    display: block;
  }
}
</style>