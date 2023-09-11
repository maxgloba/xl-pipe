<template>
  <section class="calculator">
    <div class="container">
      <h2>КАЛЬКУЛЯТОР СТОИМОСТИ</h2>
      <p>Заполните все поля и мы расчитаем стоимость для Вашего проекта</p>
      <div class="calculator__wrap">
        <form @submit="submit" class="form">
          <div class="form__field">
            <label for="project">Тип объекта:</label>
            <div class="form__buttons">
              <button
                class="form__checkbox"
                v-for="item in project"
                :class="projectResult === item ? 'form__checkbox-active':''"
                :key="item"
                @click.prevent="chooseProject(item)">{{ item }}</button>
            </div>
          </div>
          <div class="form__field">
            <label for="area">Площадь помещения:</label>
            <div class="form__range">
              <span>{{ area }}м²</span>
              <input type="range" id="area" v-model="area" min="5" max="2000" step="1">
            </div>
          </div>
          <div class="form__field">
            <label for="hiting">Тип отопления:</label>
            <div class="form__buttons">
              <button class="form__radio" v-for="item in hiting" :class="hitingResult === item ? 'form__radio-active':''" :key="item" @click.prevent="chooseHiting(item)">{{ item }}</button>
            </div>
          </div>
          <div class="form__field">
            <label for="floors">Количество этажей:</label>
            <div class="form__range">
              <span>{{ floors }}</span>
              <input type="range" id="floors" v-model="floors" min="1" max="30" step="1" required />
            </div>
          </div>
          <div class="form__field">
            <label for="rooms">Количество комнат:</label>
            <div class="form__range">
              <span>{{ rooms }}</span>
              <input type="range" id="rooms" v-model="rooms" min="1" max="20" step="1" required />
            </div>
          </div>
          <div class="form__field">
            <label for="covers">Напольное покрытие:</label>
            <div class="form__buttons">
              <button class="form__checkbox" v-for="item in covers" :class="coversResult === item ? 'form__checkbox-active':''" :key="item" @click.prevent="chooseCovers(item)">{{ item }}</button>
            </div>
          </div>
          <div class="form__field">
            <label for="phone">Номер телефона:</label>
            <input
              type="tel"
              v-model="phone"
              @input="phoneInput"
              maxlength="18"
              minlength="18"
              placeholder="+7 (XXX) XXX-XX-XX"
              required />
          </div>
          <div class="form__field">
            <input type="submit" value="Отправить">
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default{
  data(){
    return {
      project: ['ДОМ','КВАРТИРА','БАЛКОН','БАНЯ','НЕЖИЛОЕ'],
      projectResult: 'ДОМ',
      area: 185,
      hiting: ['ВОДЯНОЕ', 'ЭЛЕКТРИЧЕСКОЕ'],
      hitingResult: 'ВОДЯНОЕ',
      floors: 2,
      rooms: 10,
      covers: ['ПЛИТКА','ПАРКЕТ','ЛИНОЛЕУМ','ПВХ','ДРУГОЕ'],
      coversResult: 'ПЛИТКА',
      phone: null,
    }
  },
  methods: {
    chooseProject(value){
      this.projectResult = value
    },
    chooseHiting(value){
      this.hitingResult = value
    },
    chooseCovers(value){
      this.coversResult = value
    },
    phoneInput(e){
      let arr = ['+', '7']
      let number = e.target.value.replace("+7", "")
      let phoneArr = number.replace(/[^\dA-Z]/g, '').replace(/[\s]/g, '').split('')
      arr.push(...phoneArr)
      if (arr.length > 0) arr.splice(2, 0, ' (');
      if (arr.length > 6) arr.splice(6, 0, ') ');
      if (arr.length > 10) arr.splice(10, 0, '-');
      if (arr.length > 13) arr.splice(13, 0, '-');
      this.phone = arr.toString().replace(/[,]/g, '');
    },
    submit(e){
      e.preventDefault()
      if(this.phone.length < 18){
        alert('please check your phone number')
      } else {
        console.dir({
          project: this.projectResult,
          area: this.area,
          hiting: this.hitingResult,
          floors: this.floors,
          rooms: this.rooms,
          covers: this.coversResult,
        });
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.calculator{
  color: var(--light);
  .container{
    background: var(--main);
    padding-top: res(50, 100);
    padding-bottom: res(50, 100);
    border-radius: res(30, 60);
    text-align: center;
  }
  h2{
    margin-bottom: 20px;
  }
  p{
    margin-bottom: res(40, 70);
  }
  &__wrap{
    max-width: 850px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 14px;
    padding-right: 14px;
    @media(min-width:768px){
      border-radius: res(30, 60);
      border: 2px solid var(--3, #FFF);
      padding: res(30, 50) res(15, 80);
    }
  }
}
.form{
  text-align: left;
  &__field{
    &:not(:first-child){
      margin-top: 30px;
    }
    &:last-child{
      margin-top: 45px;
    }
  }
  label{
    color: var(--light);
    font-size: 14px;
    font-weight: 400;
    display: block;
    margin-bottom: 15px;
  }
  &__checkbox{
    border-radius: 10px;
    border: 1px solid var(--light);
    padding: res(10, 13) res(20, 30);
    background: none;
    color: var(--light);
    font-size: 14px;
    font-weight: 400;
    transition: .3s ease;
    &:hover{
      border-color: var(--second);
    }
    &-active{
      background: var(--second);
      border-color: var(--second);
    }
  }
  &__radio{
    color: var(--3, #FFF);
    font-size: 14px;
    font-weight: 400;
    position: relative;
    padding-left: 25px;
    background: none;
    border: none;
    display: block;
    width: 100%;
    text-align: left;
    &:before, &:after{
      content: "";
      border-radius: 50%;
      position: absolute;
      left: 0; top: 0;
    }
    &:before{
      width: 17px;
      height: 17px;
      border: 1px solid var(--light);
    }
    &:after{
      width: 12px;
      height: 12px;
      background: var(--light);
      left: 3.5px;
      top: 3.5px;
      opacity: 0;
    }
    &:hover{
      opacity: .9;
    }
    &-active{
      &:after{
        opacity: 1;
      }
    }
  }
  &__buttons{
    display: flex;
    flex-wrap: wrap;
    button{
      margin-bottom: res(8, 15);
      &:not(:last-child){
        margin-right: res(8, 15);
      }
    }
  }
  input{
    display: block;
    width: 100%;
    border: none;
    &[type="tel"]{
      height: 50px;
      border-radius: res(30, 60);
      background: rgba(126, 43, 134, .50);
      padding: 15px 18px;
      color: var(--light);
      font-size: 14px;
      font-weight: 400;
      &::placeholder {
        color: var(--light);
        opacity: 1;
      }
      &:-ms-input-placeholder {
        color: var(--light);
      }
      &::-ms-input-placeholder {
        color: var(--light);
      }
    }
    &[type="range"]{
      height: 2px;
      -webkit-appearance: none;
      margin: 0;
      width: 100%;
      &:focus {
        outline: none;
      }
      &::-webkit-slider-runnable-track {
        width: 100%;
        height: 2px;
        cursor: pointer;
        animate: 0.2s;
        background: #ffffff;
        border-radius: 2px;
      }
      &::-webkit-slider-thumb {
        height: 17px;
        width: 17px;
        border-radius: 50%;
        background: #ffffff;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -8px;
      }
      &:focus::-webkit-slider-runnable-track {
        background: #ffffff;
      }
      &::-moz-range-track {
        width: 100%;
        height: 2px;
        cursor: pointer;
        animate: 0.2s;
        background: #ffffff;
        border-radius: 2px;
      }
      &::-moz-range-thumb {
        height: 17px;
        width: 17px;
        border-radius: 50%;
        background: #ffffff;
        cursor: pointer;
        margin-top: -8px;
      }
      &::-ms-track {
        width: 100%;
        height: 2px;
        cursor: pointer;
        animate: 0.2s;
      }
      &::-ms-fill-lower {
        background: #ffffff;
        border-radius: 50%;
        margin-top: -8px;
      }
      &::-ms-fill-upper {
        background: #ffffff;
      }
      &::-ms-thumb {
        height: 17px;
        width: 17px;
        border-radius: 50%;
        background: #ffffff;
        cursor: pointer;
        margin-top: -8px;
      }
      &:focus::-ms-fill-lower {
        background: #ffffff;
      }
      &:focus::-ms-fill-upper {
        background: #ffffff;
      }
    }
    &[type="submit"]{
      color: var(--light);
      font-size: 20px;
      font-weight: 700;
      padding: 18px 60px;
      border-radius: 100px;
      border: 2px solid var(--light);
      background: none;
      width: 242px;
      margin-left: auto;
      margin-right: auto;
      transition: .3s ease;
      &:hover{
        background: var(--second);
        border-color: var(--second);
      }
      &:disabled{
        cursor: default;
        pointer-events: none;
        opacity: .5;
      }
    }
  }
  &__range{
    display: flex;
    align-items: center;
    span{
      color: var(--light);
      font-size: 14px;
      font-weight: 600;
      padding: 11px 23px;
      border: 1px solid var(--light);
      display: inline-block;
      border-radius: 10px;
      margin-right: 30px;
      @media(max-width:767px){
        min-width: 102px;
        text-align: center;
      }
    }
    input{
      max-width: 155px;
    }
  }
}
</style>