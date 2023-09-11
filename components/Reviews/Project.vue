<template>
  <div class="about-project">
    <h2>О ПРОЕКТЕ</h2>
    <p>Mauris et ornare nibh, sed dictum leo. Sed gravida accumsan nisi, sed malesuada quam egestas vel. Mauris finibus magna a metus elementum ornare. Sed id mi ac purus efficitur mattis non eu erat. Nulla pellentesque euismod mi nec pharetra. Mauris auctor maximus lacus, eu laoreet enim suscipit ac. Sed accumsan quam nec nisi fermentum aliquam. Aliquam erat volutpat. Nullam nec nisi lacus. Sed ornare molestie tellus, ut auctor augue malesuada quis. Etiam felis elit, aliquam vitae fermentum vitae, dapibus a lectus. Etiam porttitor quam tincidunt consectetur pretium.</p>
    <div class="about-project__list">
      <div class="about-project__item">
        ПЛОЩАДЬ
        <span>234м²</span>
      </div>
      <div class="about-project__item">
        ТИП ОТОПЛЕНИЯ
        <span>Водяное</span>
      </div>
      <div class="about-project__item">
        НАПОЛЬНОЕ ПОКРЫТИЕ
        <span>Плитка</span>
      </div>
      <div class="about-project__item">
        СРОК РЕАЛИЗАЦИИ
        <span>18 Дней</span>
      </div>
      <div class="about-project__item">
        ТИП ОБЪЕКТА
        <span>Дом</span>
      </div>
      <div class="about-project__item">
        КОЛИЧЕСТВО ЭТАЖЕЙ
        <span>2</span>
      </div>
      <div class="about-project__item">
        КОЛИЧЕСТВО КОМНАТ
        <span>6</span>
      </div>
      <div class="about-project__item">
        СТОИМОСТЬ ПРОЕКТА
        <span>₽ 1 045 400</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-project{
  padding-top: res(70, 100);
  padding-bottom: res(70, 100);
  h2{
    margin-bottom: res(30, 50);
  }
  p{
    font-size: res(13, 16);
    font-weight: 300;
    margin-bottom: res(30, 50);
    @media(min-width:768px){
      font-weight: 500;
    }
  }
  &__list{
    border-radius: res(30, 60);
    background: var(--second);
    padding: res(30, 50) res(15, 100);
    @media(min-width:768px){
      display: grid;
      grid-template-columns: repeat(4, auto);
      grid-gap: res(15, 40) res(15, 20);
    }
  }
  &__item{
    color: var(--light);
    font-size: res(14, 16);
    font-weight: 700;
    &:not(:first-child){
      @media(max-width:767px){
        margin-top: 30px;
      }
    }
    span{
      font-weight: 300;
      display: block;
    }
  }
}
</style>