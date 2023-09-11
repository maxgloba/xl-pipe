<template>
  <div class="about-price">
    <h2>ПРО СТОИМОСТЬ</h2>
    <ul>
      <li>Mauris et ornare nibh, sed dictum leo. Sed gravida accumsan nisi, sed malesuada quam egestas vel.</li>
      <li>Mauris finibus magna a metus elementum ornare. Sed id mi ac purus efficitur mattis non eu erat. Nulla pellentesque euismod mi nec pharetra. </li>
      <li>Aliquam erat volutpat. Nullam nec nisi lacus. Sed ornare molestie tellus, ut auctor augue malesuada quis. </li>
      <li>Etiam felis elit, aliquam vitae fermentum vitae, dapibus a lectus. Etiam porttitor quam tincidunt consectetur pretium.</li>
      <li>Mauris auctor maximus lacus, eu laoreet enim suscipit ac. Sed accumsan quam nec nisi fermentum aliquam. </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.about-price{
  ul{
    margin-bottom: 30px;
    padding-left: 1em;
    li{
      list-style: outside disc;
      color: var(--light);
      font-size: 16px;
      font-weight: 500;
      text-align: left;
      &:not(:first-child){
        margin-top: 15px;
      }
    }
  }
  h2{
    margin-bottom: res(30, 50);
  }
}
</style>