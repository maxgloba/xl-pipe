<template>
  <div class="objects">
    <span>154</span>
    Выполненных <br> объектов
  </div>
</template>

<style lang="scss">
.objects{
  position: absolute;
  top: 150px;
  left: 20px;
  color: var(--light);
  font-size: 8px;
  font-weight: 700;
  border: 2px solid var(--light);
  padding: 10px 20px;
  text-align: left;
  border-radius: 100px;
  display: flex;
  @media(min-width:768px){
    display: none;
  }
  span{
    font-size: 17px;
    font-weight: 700;
    margin-right: 5px;
  }
}
</style>