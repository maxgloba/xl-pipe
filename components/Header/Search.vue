<template>
  <div class="search">
    <input @input="inputSearch" v-model="search" placeholder="Поиск">
    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none"><path d="M19.7038 17.6712L16.0547 14.0221C16.8087 12.8858 17.25 11.5252 17.25 10.0625C17.25 6.09931 14.0257 2.875 10.0625 2.875C6.09931 2.875 2.875 6.09931 2.875 10.0625C2.875 14.0257 6.09931 17.25 10.0625 17.25C11.5252 17.25 12.8858 16.8087 14.0221 16.0547L17.6712 19.7038C18.2318 20.2652 19.1432 20.2652 19.7038 19.7038C20.2652 19.1425 20.2652 18.2325 19.7038 17.6712ZM5.03125 10.0625C5.03125 7.28813 7.28813 5.03125 10.0625 5.03125C12.8369 5.03125 15.0938 7.28813 15.0938 10.0625C15.0938 12.8369 12.8369 15.0938 10.0625 15.0938C7.28813 15.0938 5.03125 12.8369 5.03125 10.0625Z" fill="#DEDCDE"/></svg>
  </div>
</template>

<script>
export default{
  data(){
    return{
      countryList: false,
      search: null,
    }
  },
  methods: {
    inputSearch(){
      console.log(this.search)
    },
  }
}
</script>

<style lang="scss" scoped>
.search{
  border-radius: 40px;
  background: var(--third);
  position: relative;
  @media(min-width:768px){
    width: res(122, 219);
  }
  input{
    height: res(30, 44);
    display: block;
    width: 100%;
    background: none;
    border: none;
    padding: 0 res(10, 15);
    color: var(--dark);
    font-size: 12px;
    font-weight: 400;
  }
  svg{
    position: absolute;
    right: res(10, 15);
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }
}
</style>
