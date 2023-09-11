<template>
  <div class="info" tabindex="0" >
    <div class="info__phones">
      <span @click.prevent="openPhones">
        +7 927 315 00 00
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M9.90008 0.618506L9.39911 0.103126C9.33236 0.0343032 9.25546 0 9.16853 0C9.08181 0 9.00494 0.0343032 8.93819 0.103126L5.00005 4.15463L1.06209 0.103235C0.995301 0.0344116 0.918439 0.000108267 0.831611 0.000108267C0.744747 0.000108267 0.667886 0.0344116 0.601132 0.103235L0.100235 0.61865C0.0333416 0.687329 0 0.766407 0 0.855776C0 0.945073 0.0334469 1.02415 0.100235 1.09283L4.76957 5.89695C4.83633 5.96566 4.91322 6 5.00005 6C5.08688 6 5.16364 5.96566 5.23036 5.89695L9.90008 1.09283C9.96683 1.02411 10 0.945037 10 0.855776C10 0.766407 9.96683 0.687329 9.90008 0.618506Z" fill="white"/></svg>
      </span>
      <div class="info__phones__list" :class="phonesList ? 'info__phones__list-open':''">
        <a href="tel:+73454575531">
          +7 345 457 55 31
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9235 13.5508L16.8389 13.2958C16.6385 12.7 15.9816 12.0786 15.3782 11.9149L13.1447 11.3047C12.5391 11.1399 11.6751 11.3615 11.2319 11.8047L10.4236 12.6132C7.48601 11.8192 5.18246 9.51518 4.38974 6.5776L5.1981 5.76909C5.64124 5.32587 5.86277 4.46288 5.698 3.8571L5.08897 1.62215C4.9242 1.01747 4.30182 0.36048 3.70729 0.162246L3.45234 0.0765098C2.85668 -0.121724 2.00717 0.0787547 1.56407 0.521939L0.354936 1.7324C0.138925 1.94731 0.000867608 2.562 0.000867608 2.56425C-0.0414225 6.40384 1.46385 10.1031 4.17933 12.8191C6.88814 15.5284 10.5729 17.0318 14.4006 16.9995C14.4206 16.9995 15.053 16.8636 15.269 16.6487L16.4782 15.4393C16.9213 14.9962 17.1217 14.1465 16.9235 13.5508Z" fill="#404040"/></svg>
        </a>
        <a href="tel:+75321234545">
          +7 532 123 45 45
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9235 13.5508L16.8389 13.2958C16.6385 12.7 15.9816 12.0786 15.3782 11.9149L13.1447 11.3047C12.5391 11.1399 11.6751 11.3615 11.2319 11.8047L10.4236 12.6132C7.48601 11.8192 5.18246 9.51518 4.38974 6.5776L5.1981 5.76909C5.64124 5.32587 5.86277 4.46288 5.698 3.8571L5.08897 1.62215C4.9242 1.01747 4.30182 0.36048 3.70729 0.162246L3.45234 0.0765098C2.85668 -0.121724 2.00717 0.0787547 1.56407 0.521939L0.354936 1.7324C0.138925 1.94731 0.000867608 2.562 0.000867608 2.56425C-0.0414225 6.40384 1.46385 10.1031 4.17933 12.8191C6.88814 15.5284 10.5729 17.0318 14.4006 16.9995C14.4206 16.9995 15.053 16.8636 15.269 16.6487L16.4782 15.4393C16.9213 14.9962 17.1217 14.1465 16.9235 13.5508Z" fill="#404040"/></svg>
        </a>
        <a href="tel:+72342346412">
          +7 234 234 64 12
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.9235 13.5508L16.8389 13.2958C16.6385 12.7 15.9816 12.0786 15.3782 11.9149L13.1447 11.3047C12.5391 11.1399 11.6751 11.3615 11.2319 11.8047L10.4236 12.6132C7.48601 11.8192 5.18246 9.51518 4.38974 6.5776L5.1981 5.76909C5.64124 5.32587 5.86277 4.46288 5.698 3.8571L5.08897 1.62215C4.9242 1.01747 4.30182 0.36048 3.70729 0.162246L3.45234 0.0765098C2.85668 -0.121724 2.00717 0.0787547 1.56407 0.521939L0.354936 1.7324C0.138925 1.94731 0.000867608 2.562 0.000867608 2.56425C-0.0414225 6.40384 1.46385 10.1031 4.17933 12.8191C6.88814 15.5284 10.5729 17.0318 14.4006 16.9995C14.4206 16.9995 15.053 16.8636 15.269 16.6487L16.4782 15.4393C16.9213 14.9962 17.1217 14.1465 16.9235 13.5508Z" fill="#404040"/></svg>
        </a>
      </div>
    </div>
    <div class="info__countries">
      <span @click.prevent="regionsOpen">
        {{ regionSelected }}
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M0.0999193 5.38149L0.600886 5.89687C0.66764 5.9657 0.744536 6 0.83147 6C0.918194 6 0.995055 5.9657 1.06181 5.89687L4.99995 1.84537L8.93791 5.89677C9.0047 5.96559 9.08156 5.99989 9.16839 5.99989C9.25525 5.99989 9.33211 5.96559 9.39887 5.89677L9.89976 5.38135C9.96666 5.31267 10 5.23359 10 5.14422C10 5.05493 9.96655 4.97585 9.89976 4.90717L5.23043 0.103055C5.16367 0.0343399 5.08678 0 4.99995 0C4.91312 0 4.83636 0.0343399 4.76964 0.103055L0.0999193 4.90717C0.0331659 4.97589 0 5.05496 0 5.14422C0 5.23359 0.0331659 5.31267 0.0999193 5.38149Z" fill="#404040"/></svg>
      </span>
      <div class="info__countries__list" :class="regionShow ? 'info__countries__list-open':''">
        <input @input="searchRegion" v-model="region" type="text" placeholder="Поиск региона">
        <ul v-if="regionList">
          <li v-for="(region, index) in regionList" :key="`region_${index}`" @click.prevent="selectRegion(region.city)">
            {{ region.city }}
            <svg v-if="region.diler" xmlns="http://www.w3.org/2000/svg" width="17" height="9" viewBox="0 0 17 9" fill="none"><path d="M4.45781 8.84886C4.54848 8.84886 4.63915 8.81415 4.70857 8.74544L12.8489 0.604398C12.987 0.46627 12.987 0.241724 12.8489 0.103596C12.7108 -0.034532 12.4862 -0.034532 12.3481 0.103596L4.45781 7.99388L0.604398 4.14047C0.46627 4.00234 0.241724 4.00234 0.103596 4.14047C-0.034532 4.2786 -0.034532 4.50314 0.103596 4.64127L4.20706 8.74544C4.27647 8.81415 4.36714 8.84886 4.45781 8.84886Z" fill="#FED71A"/><path d="M16.3953 0.103596L8.25496 8.24464C8.11684 8.38277 8.11684 8.60731 8.25496 8.74544C8.32438 8.81486 8.41505 8.84886 8.50572 8.84886C8.59639 8.84886 8.68706 8.81415 8.75647 8.74544L16.8968 0.604398C17.0349 0.46627 17.0349 0.241724 16.8968 0.103596C16.7587 -0.034532 16.5341 -0.034532 16.3953 0.103596Z" fill="#FED71A"/></svg>
          </li>
        </ul>
        <ul v-else="regions">
          <li v-for="(region, index) in regions" :key="`region_${index}`" @click.prevent="selectRegion(region.city)">
            {{ region.city }}
            <svg v-if="region.diler" xmlns="http://www.w3.org/2000/svg" width="17" height="9" viewBox="0 0 17 9" fill="none"><path d="M4.45781 8.84886C4.54848 8.84886 4.63915 8.81415 4.70857 8.74544L12.8489 0.604398C12.987 0.46627 12.987 0.241724 12.8489 0.103596C12.7108 -0.034532 12.4862 -0.034532 12.3481 0.103596L4.45781 7.99388L0.604398 4.14047C0.46627 4.00234 0.241724 4.00234 0.103596 4.14047C-0.034532 4.2786 -0.034532 4.50314 0.103596 4.64127L4.20706 8.74544C4.27647 8.81415 4.36714 8.84886 4.45781 8.84886Z" fill="#FED71A"/><path d="M16.3953 0.103596L8.25496 8.24464C8.11684 8.38277 8.11684 8.60731 8.25496 8.74544C8.32438 8.81486 8.41505 8.84886 8.50572 8.84886C8.59639 8.84886 8.68706 8.81415 8.75647 8.74544L16.8968 0.604398C17.0349 0.46627 17.0349 0.241724 16.8968 0.103596C16.7587 -0.034532 16.5341 -0.034532 16.3953 0.103596Z" fill="#FED71A"/></svg>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  props: {
    focus: Boolean,
  },
  watch: {
    focus: function(newVal, oldVal) {
      if(!newVal){
        this.phonesList = false
        this.regionShow = false
      }
    }
  },
  data(){
    return{
      phonesList: false,
      region: null,
      regionList: null,
      regionSelected: 'Москва',
      regionShow: false,
    }
  },
  computed: {
    regions() {
      const regions = this.$store.getters['regions/getRegions']
      this.regionList = regions
      return regions
    },
  },
  methods: {
    openPhones(){
      this.regionShow = false
      this.phonesList = this.phonesList ? false : true
      document.querySelector('.nav').classList.remove('active');
    },
    regionsOpen(){
      this.phonesList = false
      this.regionShow = this.regionShow ? false : true
      document.querySelector('.nav').classList.remove('active');
    },
    searchRegion(){
      this.regionList = this.regions.filter(o => o.city.includes(this.region))
    },
    selectRegion(region){
      this.regionSelected = region
      this.regionShow = false
      this.region = null
      this.regionList = this.regions
    },
    // focusOut(){
    //   this.phonesList = false
    //   this.regionShow = false
    // }
  }
}
</script>

<style lang="scss" scoped>
.info{
  @media(max-width:767px){
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__phones{
    width: res(140, 160);
    position: relative;
    @media(min-width:768px){
      border-radius: 40px;
      background: var(--second);
    }
    span{
      height: 44px;
      color: var(--light);
      font-size: 14px;
      font-weight: 400;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      z-index: 2;
      cursor: pointer;
      @media(min-width:768px){
        padding: 0 15px;
      }
    }
    &__list{
      position: absolute;
      top: 100%;
      width: res(190, 216);
      border-radius: 20px;
      z-index: 1;
      overflow: hidden;
      transition: .5s ease-in-out;
      max-height: 0;
      background: var(--light);
      padding-left: 20px;
      padding-right: 20px;
      @media(max-width:767px){
        left: 0;
      }
      @media(min-width:768px){
        right: 0;
        top: calc(100% + 5px);
      }
      &-open{
        max-height: 200px;
        padding-top: 20px;
        padding-bottom: 20px;
      }
      a{
        color: var(--dark);
        font-size: 14px;
        font-weight: 400;
        height: 44px;
        line-height: 44px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-decoration: none;
        background: var(--light);
      }
    }
  }
  &__countries{
    position: relative;
    text-align: center;
    span{
      color: var(--light);
      font-size: 16px;
      font-weight: 700;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 30px;
      position: relative;
      cursor: pointer;
      @media(min-width:768px){
        color: var(--dark);
      }
      svg{
        margin-left: 10px;
        pointer-events: none;
        transform: rotate(180deg);
        path{
          @media(max-width:767px){
            fill: var(--light);
          }
        }
      }
    }
    &__list{
      position: absolute;
      right: 0;
      width: 216px;
      top: calc(100% + 10px);
      background: var(--light);
      border-radius: 20px;
      max-height: 0px;
      overflow: hidden;
      transition: .5s ease-in-out;
      padding-left: res(20, 30);
      padding-right: res(20, 30);
      text-align: left;
      ul{
        max-height: 140px;
        overflow-y: auto;
        padding-top: 20px;
        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
          display: none;
        }
      }
      li{
        cursor: pointer;
        color: var(--dark);
        font-size: 12px;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        &:not(:first-child){
          margin-top: 10px;
        }
        &:hover{
          background: var(--main);
          color: var(--light);
        }
      }
      &-open{
        max-height: 226px;
        padding-top: 20px;
        padding-bottom: 20px;
      }
      input{
        border-radius: 30px;
        height: res(24, 31);
        display: block;
        width: 100%;
        background: var(--third);
        border: none;
        padding: 0 res(10, 15);
        color: var(--dark);
        font-size: 12px;
        font-weight: 400;
      }
    }
  }
}
</style>