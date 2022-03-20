<template>
  <div>
    <div class="flex justify-center w-full header content px-3" :class="{ active: isActive }">
      <div class="flex w-full items-center md:max-w-3xl lg:max-w-5xl">
        <a-icon class="p-2 pb-2.5 text-md text-black md:hidden" type="unordered-list" />
        <span class="flex-1 text-2xl text-center md:text-left font-bold pointer" style="color: var(--blog-text-color)">小菜鸡</span>
        
        <a-input-search class="hidden md:block" placeholder="input search text" style="width: 200px" @search="onSearch" />
        <a-icon class="p-2 pb-2.5 text-md text-black md:hidden" type="search" />
      </div>
    </div>
    <div class="md:header--bottom hidden md:block"></div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'Header',
  data() {
    return {
      searchValue: "",
      isActive: false,
      oldScrollTop: 0
    }
  },
  computed: {
    ...mapState(['meunIndex'])
  },
  mounted() {
    // 监听页面滚动事件
    window.addEventListener('scroll', this.appScroll)
  },
  methods: {
    onSearch(value) {
      console.log(value);
    },
    appScroll() {
      // 浏览器兼容
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let scrollStep = scrollTop - this.oldScrollTop;
      this.oldScrollTop = scrollTop;
      if(scrollStep > 0) {
        this.isActive = true
      } else {
        this.isActive = false
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.appScroll)
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  display: -webkit-flex;
  transition: all .5s;
  z-index: 10;
  background-color: var(--blog-green);
}
.active {
  top: -50px !important;
}
.header--bottom {
  position: fixed;
  top: 50px;
  left: 0;
  z-index: 10;
  width: 300%;
  height: 28px;
  transition: all .5s;
  /* background-repeat: repeat-x; */
  background-image: url(~/assets/images/header_bottom.png);
  background-position: 0 100%;
  -webkit-animation: waveMove 3s linear infinite;
  animation: waveMove 3s linear infinite;
}
@-webkit-keyframes waveMove {
  0% {
    -webkit-transform: translateZ(0);
  }
  100% {
    -webkit-transform: translate3d(-306px, 0, 0);
  }
}
@keyframes waveMove {
  0% {
    transform: translateZ(0)
  }
  100% {
    transform: translate3d(-306px, 0, 0)
  }
}
</style>