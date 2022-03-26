<template>
  <header>
    <div class="flex justify-center w-full header content px-3" :class="{ 'header_hidden': isHeaderHidden }">
      <div class="flex w-full items-center md:max-w-3xl lg:max-w-5xl">
        <!-- mobile -->
        <a-icon @click="visible = true" class="p-2 text-md text-black md:hidden" type="unordered-list" />
        <span class="flex-1 text-2xl text-center md:text-left font-bold cursor-pointer" style="color: var(--blog-text-color)" @click="$router.push('/')">Smirk</span>
        <div class="hidden md:flex flex-start items-center mr-2">
          <div 
            v-for="item in navTitle" :key="item.title" 
            :class="['py-1 text-lg px-2 h-full menu__item cursor-pointer', { 'menuActive': meunIndex === item.path }]" 
            @click="handleMenu(item.path)">{{ item.title }}</div>
        </div>
        <!-- PC -->
        <a-input-search class="hidden md:block" placeholder="input search text" style="width: 200px" @search="onSearch" />
        <!-- mobile input-handler -->
        <a-icon class="p-2 text-md text-black md:hidden" type="search" @click="mobileInputModal = true"/>
      </div>
    </div>
    <div class="md:header--bottom hidden md:block"></div>
    <!-- mobile menu -->
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
        <div 
          v-for="item in navTitle" :key="item.title" 
          :class="['py-1 text-lg menu__item w-full', { 'menuActive': meunIndex === item.path }]" 
          @click="handleMenu(item.path, true)">{{ item.title }}</div>
      </div>
      <div class="text-green-400 font-bold">雨纷纷<a-divider class="bg-green-400" type="vertical" />旧故里草木深</div>
    </a-drawer>
    <!-- mobile search modal -->
    <a-modal
      v-model="mobileInputModal"
      centered
      :closable="false"
      :footer="false"
    > 
      <a-input-search placeholder="input search text" class="w-full" @search="onSearch" />
    </a-modal>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Header',
  data() {
    return {
      searchValue: "",
      visible: false,
      mobileInputModal: false,
      navTitle: [
        { title: '首页', path: '/' },
        { title: '归档', path: '/time-line' },
        { title: '友情链接', path: '/link' },
        { title: '留言板', path: '/talked' },
        { title: '关于', path: '/about' },
      ],
      drawerBodyStyle: { height: '100%', padding: '20px 10px', textAlign: 'center', overFlowY: 'auto', boxSizing: 'border-box', backgroundColor: '#3ddac5' }
    }
  },
  computed: {
    ...mapState(['meunIndex', 'isHeaderHidden'])
  },
  
  methods: {
    onSearch(value) {
      console.log(value);
    },
    handleMenu(path, mobile) {
      this.$router.push(path)
      mobile && (this.visible = false)
    }
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
.header_hidden {
  top: -50px !important;
}
.menuActive {
  color: #ffffff;
  background-color: rgba(241, 241, 241, .1);
}
.menu__item:hover {
  background-color: rgba(241, 241, 241, .1);
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