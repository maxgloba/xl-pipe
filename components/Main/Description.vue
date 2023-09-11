<template>
  <section class="about">
    <div class="container">
      <MainDescriptionType />
      <MainDescriptionProject />
      <MainDescriptionPrice />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about{
  color: var(--light);
  .container{
    background: var(--main);
    padding-top: res(70, 100);
    padding-bottom: res(70, 100);
    border-radius: res(30, 60);
  }
}
</style>