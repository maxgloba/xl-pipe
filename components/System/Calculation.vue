<template>
  <section class="calculation">
    <div class="container">
      <h2>РАСЧЕТ СТОИМОСТИ</h2>
      <div class="calculation__menu">
        <div class="calculation__percent">{{ (currentQuestion * 100 / quiz.length).toFixed() }}%</div>
        <div class="calculation__progress">
          <div v-for="(item, index) in quiz" :style="`opacity: ${currentQuestion >= index + 1 ? '1': '.3'}; width: calc(100% / ${quiz.length} - 15px);`"></div>
        </div>
      </div>
      <div class="calculation__gift">ДО ПОДАРКА: <b>{{ quiz.length - currentQuestion }} ВОПРОСОВ</b></div>
      <div class="calculation__quiz" v-if="currentQuestion + 1 <= quiz.length">
        <h3>Вопрос {{ currentQuestion + 1 }} из {{ quiz.length }}</h3>
        <h4>{{ quiz[currentQuestion].question }}</h4>
        <div class="calculation__items">
          <button
            v-for="(item, index) in quiz[currentQuestion].items"
            :key="`item__${index}`"
            @click="chooseAnswer(index, $event)">
            <img v-if="winWidth < 768" :src="require(`@/assets/mob/${item}`)" alt="" />
            <img v-else :src="require(`@/assets/${item}`)" alt="" />
          </button>
        </div>
        <button class="btn btn-second" @click="nextQuestion">Далее</button>
      </div>
      <div v-else class="calculation__result">
        <h4>Quiz Result:</h4>
        {{ quiz }}
      </div>
    </div>
  </section>
</template>

<script>
export default{
  data(){
    return{
      winWidth: 0,
      currentQuestion: 0,
      quiz: [
        {
          question: 'Выберите планировку кухни: 1',
          items: ['calculation-img.png', 'calculation-img.png', 'calculation-img.png'],
          answer: null,
        },
        {
          question: 'Выберите планировку кухни: 2',
          items: ['calculation-img.png', 'calculation-img.png', 'calculation-img.png'],
          answer: null,
        },
        {
          question: 'Выберите планировку кухни: 3',
          items: ['calculation-img.png', 'calculation-img.png', 'calculation-img.png'],
          answer: null,
        },
        {
          question: 'Выберите планировку кухни: 4',
          items: ['calculation-img.png', 'calculation-img.png', 'calculation-img.png'],
          answer: null,
        },
        {
          question: 'Выберите планировку кухни: 5',
          items: ['calculation-img.png', 'calculation-img.png', 'calculation-img.png'],
          answer: null,
        },
        {
          question: 'Выберите планировку кухни: 6',
          items: ['calculation-img.png', 'calculation-img.png', 'calculation-img.png'],
          answer: null,
        },
        {
          question: 'Выберите планировку кухни: 7',
          items: ['calculation-img.png', 'calculation-img.png', 'calculation-img.png'],
          answer: null,
        },
      ],
    }
  },
  methods: {
    chooseAnswer(index, e){
      this.quiz[this.currentQuestion].answer = index
      document.querySelectorAll('.calculation__items button').forEach(item => item.classList.remove('active'))
      e.target.classList.add('active')
    },
    nextQuestion(){
      document.querySelectorAll('.calculation__items button').forEach(item => item.classList.remove('active'))
      this.currentQuestion = this.currentQuestion + 1
    }
  },
  mounted(){
    this.winWidth = window.innerWidth
  }
}
</script>

<style lang="scss" scoped>
.calculation{
  .container{
    padding-top: 100px;
    padding-bottom: 100px;
    border-radius: res(30, 60);
    position: relative;
  }
  h2{
    text-align: center;
    margin-bottom: res(30, 74);
  }
  &__percent{
    color: var(--dark);
    font-size: 14px;
    font-weight: 700;
  }
  &__menu{
    max-width: 931px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
    }
  }
  &__percent{
    width: 51px;
    height: 51px;
    border-radius: 50%;
    background: var(--second);
    color: var(--light);
    font-size: 14px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width:767px){
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 20px;
    }
  }
  &__progress{
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(min-width:768px){
      width: calc(100% - 51px - 30px);
    }
    div{
      border-radius: 4px;
      background: var(--main);
      height: 3px;
    }
  }
  &__quiz, &__result{
    max-width: 850px;
    margin-left: auto;
    margin-right: auto;
  }
  &__items{
    margin-bottom: 50px;
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
    }
    button{
      background: none;
      border: none;
      padding: 0;
      border-radius: 30px;
      overflow: hidden;
      transition: .5s ease;
      @media(max-width:767px){
        width: 100%;
        &:not(:first-child){
          margin-top: 20px;
        }
      }
      &.active{
        box-shadow: 0 0 30px var(--second);
        transform: scale(1.05);
      }
      img{
        pointer-events: none;
        display: block;
        width: 100%;
      }
    }
    & + .btn{
      margin-left: auto;
      margin-right: auto;
      display: block;
      @media(max-width:767px){
        width: 100%;
      }
    }
  }
  h3{
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 15px;
  }
  h4{
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 50px;
  }
  &__gift{
    color: var(--light);
    font-size: 14px;
    font-weight: 400;
    padding: 10px 25px;
    background: var(--second);
    border-radius: 30px;
    @media(max-width:767px){
      text-align: center;
      margin-bottom: 30px;
    }
    @media(min-width:768px){
      top: 100px;
      position: absolute;
      right: 0;
      border-radius: 30px 0 0 30px;
    }
  }
}
</style>