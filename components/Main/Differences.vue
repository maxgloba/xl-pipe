<template>
  <section class="differences">
    <div class="container">
      <h2>ОТЛИЧИЯ ОТ ДРУГИХ ТЕПЛЫХ ПОЛОВ</h2>
      <div class="differences__row">
        <div class="differences__item">
          <img src="@/assets/difference-img.png" alt="">
          <h5>Отличие от водяных теплых полов</h5>
          <ul>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none"><path d="M18.6938 0L7.48954 11.2085L3.30193 7.02091L0 10.3271L7.48525 17.8124L8.45261 16.8493L22 3.30193L18.6938 0Z" fill="#FED71A"/></svg>
              Работает бех котла, насоса и коллектора
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none"><path d="M18.6938 0L7.48954 11.2085L3.30193 7.02091L0 10.3271L7.48525 17.8124L8.45261 16.8493L22 3.30193L18.6938 0Z" fill="#FED71A"/></svg>
              Можно отремонтировать не вскрывая пол
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none"><path d="M18.6938 0L7.48954 11.2085L3.30193 7.02091L0 10.3271L7.48525 17.8124L8.45261 16.8493L22 3.30193L18.6938 0Z" fill="#FED71A"/></svg>
              Не боится заливания водой
            </li>
          </ul>
        </div>
        <div class="differences__item">
          <img src="@/assets/difference-img.png" alt="">
          <h5>Отличие от кабельных теплых полов</h5>
          <ul>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none"><path d="M18.6938 0L7.48954 11.2085L3.30193 7.02091L0 10.3271L7.48525 17.8124L8.45261 16.8493L22 3.30193L18.6938 0Z" fill="#FED71A"/></svg>
              Равномерно нагревается по всей длине трубы
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none"><path d="M18.6938 0L7.48954 11.2085L3.30193 7.02091L0 10.3271L7.48525 17.8124L8.45261 16.8493L22 3.30193L18.6938 0Z" fill="#FED71A"/></svg>
              Не боится запирания мебелью
            </li>
          </ul>
        </div>
        <div class="differences__item">
          <img src="@/assets/difference-img.png" alt="">
          <h5>Отличие от пленочных теплых полов</h5>
          <ul>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none"><path d="M18.6938 0L7.48954 11.2085L3.30193 7.02091L0 10.3271L7.48525 17.8124L8.45261 16.8493L22 3.30193L18.6938 0Z" fill="#FED71A"/></svg>
              Может использоваться под напольную плитку
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none"><path d="M18.6938 0L7.48954 11.2085L3.30193 7.02091L0 10.3271L7.48525 17.8124L8.45261 16.8493L22 3.30193L18.6938 0Z" fill="#FED71A"/></svg>
              Более легкий монтаж
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.differences{
  color: var(--light);
  .container{
    background: var(--main);
    padding-bottom: res(20, 100);
    padding-top: res(70, 100);
    border-radius: res(30, 60);
  }
  &__row{
    @media(min-width:768px){
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: res(15, 60) res(15, 60);
    }
    @media(min-width:1200px){
      grid-gap: 60px 170px;
    }
  }
  &__item{
    margin-bottom: 50px;
    @media(min-width:768px){
      margin-bottom: 0;
    }
  }
  img{
    display: block;
    width: 100%;
    margin-bottom: 20px;
  }
  h2{
    margin-bottom: res(30, 70);
    text-align: center;
    @media(min-width:768px){
      text-align: left;
    }
  }
  h5{
    margin-bottom: 30px;
    text-align: center;
    @media(min-width:768px){
      text-align: left;
    }
  }
  ul{
    li{
      padding-left: 30px;
      @media(min-width:1200px){
        padding-left: 0;
      }
      svg{
        position: absolute;
        top: 50%; left: 0;
        transform: translate(0, -50%);
        width: 16px;
        @media(min-width:1200px){
          width: 22px;
          left: -33px;
          transform: translate(-100%, -50%);
        }
      }
      &:not(:first-child){
        margin-top: 30px;
      }
    }
  }
}
</style>