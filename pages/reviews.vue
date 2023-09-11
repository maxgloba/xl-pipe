<template>
  <main class="page page__reviews">
    <div class="container">
      <ReviewsMain />
      <ReviewsProject />
      <ReviewsPrice />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.page__reviews{
  color: var(--light);
  .container{
    background: var(--main);
    padding-top: 240px;
    padding-bottom: res(50, 100);
    border-radius: 0 0 30px 30px;
    @media(min-width:768px){
      border-radius: res(30, 60);
    }
  }
}
</style>