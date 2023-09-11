<template>
  <section class="advantages">
    <div class="container">
      <div class="advantages__row">
        <div class="advantages__house">
          <img src="@/assets/advantages-house.png" alt="">
        </div>
        <div class="advantages__left">
          <div class="advantages__item">
            <span>
              Основное <br><b>отопление</b> и <br>теплый <b>пол</b>
              <svg width="162" height="118" viewBox="0 0 162 118" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M162 117H118L31.5 1H0" stroke="#622C67"/></svg>
            </span>
          </div>
          <div class="advantages__item">
            <span>
              Капитальные <br>затраты <b>в 2 <br>раза ниже</b>
              <svg xmlns="http://www.w3.org/2000/svg" width="162" height="79" viewBox="0 0 162 79" fill="none"><path d="M162 78H118L31.5 1H0" stroke="#622C67"/></svg>
            </span>
          </div>
          <div class="advantages__item">
            <span>
              <b>Экономит до 20% <br></b> электроэнергии
              <svg xmlns="http://www.w3.org/2000/svg" width="121" height="2" viewBox="0 0 121 2" fill="none"><path d="M121 0.999989L0 1" stroke="#622C67"/></svg>
            </span>
          </div>
          <div class="advantages__item">
            <span>
              <b>Автономен</b> <br>не требует <br>обслуживания
              <svg xmlns="http://www.w3.org/2000/svg" width="162" height="74" viewBox="0 0 162 74" fill="none"><path d="M162 0.999997H118L31.5 73H0" stroke="#622C67"/></svg>
            </span>
          </div>
          <div class="advantages__item">
            <span>
              <b>Быстрый <br> монтаж</b> 1-3 дня
              <svg xmlns="http://www.w3.org/2000/svg" width="162" height="119" viewBox="0 0 162 119" fill="none"><path d="M162 0.999995H118L31.5 118H0" stroke="#622C67"/></svg>
            </span>
          </div>
        </div>
        <div class="advantages__right">
          <div class="advantages__item">
            <span>
              <b>Не боится</b> <br>запирания мебелью
              <svg xmlns="http://www.w3.org/2000/svg" width="112" height="119" viewBox="0 0 112 119" fill="none"><path d="M-8.34465e-07 118H30.4198L90.2222 1L112 1" stroke="#622C67"/></svg>
            </span>
          </div>
          <div class="advantages__item">
            <span>
              <b>Подходит</b> под любые <br>напольные покрытия
              <svg xmlns="http://www.w3.org/2000/svg" width="112" height="74" viewBox="0 0 112 74" fill="none"><path d="M-8.34465e-07 73H30.4198L90.2222 1L112 1" stroke="#622C67"/></svg>
            </span>
          </div>
          <div class="advantages__item">
            <span>
              <b>Ремонтпригодный</b> без <br>вскрытия напольного <br>покрытия
              <svg xmlns="http://www.w3.org/2000/svg" width="112" height="2" viewBox="0 0 112 2" fill="none"><path d="M-3.33786e-06 1L112 1" stroke="#622C67"/></svg>
            </span>
          </div>
          <div class="advantages__item">
            <span>
              <b>Безопасен</b> для <br>людей и животных
              <svg xmlns="http://www.w3.org/2000/svg" width="112" height="79" viewBox="0 0 112 79" fill="none"><path d="M-8.34465e-07 0.999998H30.4198L90.2222 78H112" stroke="#622C67"/></svg>
            </span>
          </div>
          <div class="advantages__item">
            <span>
              Срок службы <br><b>более 50 лет</b>
              <svg xmlns="http://www.w3.org/2000/svg" width="112" height="118" viewBox="0 0 112 118" fill="none"><path d="M-8.34465e-07 0.999998H30.4198L90.2222 117H112" stroke="#622C67"/></svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.advantages{
  color: var(--second);
  .container{
    padding-top: 100px;
    position: relative;
    background: url(@/assets/whywe-bg.png) no-repeat 100px center;
    padding-bottom: 65px;
    @media(min-width:768px){
      padding-bottom: 100px;
    }
  }
  &__row{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &__house{
    width: 100%;
    margin-bottom: 33px;
    @media(min-width:768px){
      margin-bottom: 0;
      width: per(694);
      order: 2;
    }
    img{
      display: block;
      width: 100%;
    }
  }
  &__item{
    color: #622C67;
    font-size: res(12, 14);
    position: relative;
    @media(max-width:767px){
      &:before{
        content: "";
        width: 12px;
        height: 12px;
        background: #FED71A;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 2;
      }
    }
    @media(max-width:767px){
      padding-top: 35px;
      padding-bottom: 35px;
    }
    &:not(:first-child){
      @media(min-width:768px){
        margin-top: 33px;
      }
    }
    svg{
      display: none;
      position: absolute;
      top: 50%;
      left: 100%;
      @media(min-width:768px){
        display: block;
      }
    }
    span{
      position: relative;
      display: inline-block;
      @media(min-width:768px){
        min-width: 105px;
      }
      @media(max-width:767px){
        min-height: 43px;
        br{
          display: none;
        }
      }
    }
    &:nth-child(3){
      span{
        min-width: 146px;
      }
    }
    &:nth-child(4),
    &:nth-child(5){
      svg{
        top: auto;
        bottom: 50%;
      }
    }
  }
  &__left,
  &__right{
    position: relative;
    @media(min-width:768px){
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    @media(max-width:767px){
      width: 50%;
    }
  }
  &__left{
    @media(max-width:767px){
      .advantages__item{
        padding-right: 36px;
        &:before{
          right: -6px;
        }
      }
    }
  }
  &__right{
    @media(max-width:767px){
      padding-top: 70px;
      .advantages__item{
        padding-left: 36px;
        &:before{
          left: -6px;
        }
      }
      &:after{
        content: "";
        width: 1px;
        height: calc(100% - 120px);
        position: absolute;
        background: var(--second);
        top: 60px;
        left: 0;
        z-index: 1;
        transform: translateX(-50%);
      }
    }
    @media(min-width:768px){
      order:3;
    }
    svg{
      left: 0;
      transform: translateX(-100%);
    }
  }
}
</style>