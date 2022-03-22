<template>
  <header>
    <div class="flex justify-center w-full header content px-3" :class="{ active: headerStatus }">
      <div class="flex w-full items-center md:max-w-3xl lg:max-w-5xl">
        <a-icon @click="visible = true" class="p-2 text-md text-black md:hidden" type="unordered-list" />
        <span class="flex-1 text-2xl text-center md:text-left font-bold pointer" style="color: var(--blog-text-color)">小菜鸡</span>
        
        <a-input-search class="hidden md:block" placeholder="input search text" style="width: 200px" @search="onSearch" />
        <a-icon class="p-2 text-md text-black md:hidden" type="search" />
      </div>
    </div>
    <div class="md:header--bottom hidden md:block"></div>
    <a-drawer
      placement="left"
      :closable="true"
      :visible="visible"
      @close="() => visible = false"
      :bodyStyle="drawerBodyStyle"
    >
      <img class="w-24 h-24 inline-block rounded-full border-4 border-solid border-white" src="https://dtcos-1258203853.cos.ap-shenzhen-fsi.myqcloud.com/images%2Favatar.jpg" alt="">
      <h2 class="mt-2 text-xl">Smirk</h2>
      <div class="mt-2 flex flex-col justify-center items-center">
        <div v-for="item in navTitle" :key="item.title" class="py-1 text-lg">{{ item.title }}</div>
      </div>
    </a-drawer>
  </header>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'Header',
  data() {
    return {
      searchValue: "",
      visible: false,
      navTitle: [
        { title: '首页', link: '/' },
        { title: '归档', link: '/' },
        { title: '友情链接', link: '/' },
        { title: '留言板', link: '/' },
        { title: '关于', link: '/' },
      ],
      drawerBodyStyle: { padding: '20px 10px', textAlign: 'center', height: '100vh', overFlowY: 'auto', boxSizing: 'border-box', backgroundColor: '#3ddac5' }
    }
  },
  computed: {
    ...mapState(['meunIndex', 'headerStatus'])
  },
  
  methods: {
    onSearch(value) {
      console.log(value);
    },
  },
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