<template>
  <main class="page page__about-system page__mode">
    <section class="system__main">
      <div class="container">
        <SystemPatent />
        <SystemProduction />
      </div>
    </section>
    <SystemComponents />
    <SystemFake />
    <SystemWarranty />
    <SystemProjects />
    <SystemElectricity />
    <SystemSmart />
    <SystemCalculation />
  </main>
</template>

<style lang="scss" scoped>
.system{
  &__main{
    background: linear-gradient(137deg, #D292EA 0%, #AC69C5 44.8%, #9451AD 98.02%);
    border-radius: 0 0 30px 30px;
    @media(min-width:768px){
      border-radius: 0 0 res(30, 60) res(30, 60);
    }
  }
}
</style>