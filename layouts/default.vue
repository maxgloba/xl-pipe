<template>
  <div class="layout layout__default">
    <Header />
    <Objects v-if="this.$route.name !== 'index'" />
    <Nuxt />
    <Footer />
  </div>
</template>

