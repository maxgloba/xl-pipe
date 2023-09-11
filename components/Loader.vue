<template>
  <div class="loader">
  </div>
</template>
<style lang="scss" scoped>
.loader{
  position: fixed;
  left: 0; top: 0;
  height: 100vh;
  width: 100%;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0, .7);
  svg{
    width: 60px;
    height: auto;
  }
}
</style>