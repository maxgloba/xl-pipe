<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__row">
        <div class="footer__item">
          <Logo />
          <h5>ГЕНЕРАЛЬНЫЕ ПАРТНЕРЫ</h5>
          <FooterPartners />
        </div>
        <div class="footer__item">
          <h5>НАВИГАЦИЯ</h5>
          <FooterNav />
        </div>
        <div class="footer__item">
          <h5>КОНТАКТЫ</h5>
          <FooterContacts />
          <h5>СОЦСЕТИ</h5>
          <FooterSmi />
        </div>
        <div class="footer__item">
          <h5>МЫ НА КАРТЕ</h5>
          <FooterMap />
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss">
.footer{
  padding-top: res(50, 100);
  padding-bottom: res(0, 80);
  color: var(--dark);
  .container{
    padding-left: res(10, 100);
    padding-right: res(10, 100);
  }
  a, h5{
    color: var(--dark);
  }
  h5{
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  &__item{
    @media(max-width:767px){
      &:not(:first-child){
        margin-top: 50px;
      }
    }
  }
  &__row{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &__menu{
    &+ h5{
      margin-top: 30px;
    }
    li{
      &:not(:first-child){
        margin-top: 15px;
      }
    }
    a{
      text-decoration: none;
      font-size: 16px;
      font-weight: 300;
      &.nuxt-link-exact-active{
        font-weight: 600;
      }
      &:hover{
        text-decoration: underline;
      }
    }
    &-smi{
      display: flex;
      li{
        &:not(:first-child){
          margin-top: 0;
          margin-left: 18px;
        }
      }
    }
  }
}
.page__mode + .footer{
  color: var(--light);
  padding-bottom: 0;
  padding-top: 0;
  .container{
    background: var(--main);
    padding-top: res(50, 100);
    padding-bottom: res(0, 70);
    border-radius: res(30, 60) res(30, 60) 0 0;
  }
  a, h5{
    color: var(--light);
  }
  .logo{
    path{
      fill: var(--light);
    }
    &__slogan{
      color: var(--light);
    }
  }
  .partners{
    svg path{
      fill: var(--light);
    }
  }
}
</style>