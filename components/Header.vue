<template>
  <header class="header" @focusout="focusOut">
    <div class="container">
      <div class="header__logo">
        <Logo />
      </div>
      <HeaderNav />
      <HeaderSearch />
      <button @click.prevent="btnNav" class="header__btn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.4616 4.30837H1.53848C0.688594 4.30837 0 3.61977 0 2.76993C0 1.92009 0.688594 1.23145 1.53848 1.23145H22.4616C23.3114 1.23145 24 1.92004 24 2.76993C24 3.61982 23.3114 4.30837 22.4616 4.30837Z" fill="white"/><path d="M13.8462 13.5389H1.53848C0.688594 13.5389 0 12.8502 0 12.0004C0 11.1506 0.688594 10.4619 1.53848 10.4619H13.8462C14.696 10.4619 15.3847 11.1505 15.3847 12.0004C15.3847 12.8503 14.696 13.5389 13.8462 13.5389Z" fill="white"/><path d="M22.461 13.5384H19.9994C19.1496 13.5384 18.4609 12.8498 18.4609 11.9999C18.4609 11.15 19.1495 10.4614 19.9994 10.4614H22.461C23.3108 10.4614 23.9994 11.15 23.9994 11.9999C23.9994 12.8498 23.3108 13.5384 22.461 13.5384Z" fill="white"/><path d="M22.4616 22.7689H1.53848C0.688594 22.7689 0 22.0802 0 21.2304C0 20.3805 0.688594 19.6919 1.53848 19.6919H22.4616C23.3114 19.6919 24 20.3805 24 21.2304C24 22.0802 23.3114 22.7689 22.4616 22.7689Z" fill="white"/></svg>
      </button>
      <HeaderInfo :focus="focusInfo" />
    </div>
  </header>
</template>

<script>
export default{
  data: () => ({
    focusInfo: null,
  }),
  methods: {
    btnNav(e){
      document.querySelector('.nav').classList.toggle('active');
      this.focusInfo = false
    },
    focusOut(){
      document.querySelector('.nav').classList.remove('active');
      // this.focusInfo = false
      // setTimeout(()=>{
      //   this.focusInfo = null
      // }, 50);
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 99;
  @media(max-width:767px){
    padding-top: 30px;
  }
  @media(min-width:768px){
    position: fixed;
  }
  .container{
    background: var(--light);
    border-radius: 0 0 40px 40px;
    min-height: 102px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: res(20, 30);
    padding-right: res(20, 30);
    flex-wrap: wrap;
    @media(max-width:767px){
      background: none;
    }
  }
  &__btn{
    background: none;
    border: none;
    padding: 0;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(min-width:768px){
      display: none;
    }
    svg{
      display: block;
    }
  }
}
</style>