<template>
  <transition name='index'>
    <!-- md:>768 lg>1024 -->
    <div class="box-border mx-auto view-container md:max-w-3xl lg:max-w-5xl">
      <Header class="w-full"></Header>
      <main class="main">
        <nuxt />
      </main>
      <Footer></Footer>
      <transition name="up_hiddent">
        <i v-show="isToTop" class="to_top iconfont icon-rocket pointe lg:right-14" @click="backTop"></i>
      </transition>
    </div>
  </transition>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { mapState } from 'vuex'
export default {
  name: 'Container',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      scrollTop: 0,
      oldScrollTop: 0
    }
  },

  computed: {
    ...mapState(['isToTop'])
  },

  mounted() {
    // 监听页面滚动事件
    window.addEventListener('scroll', this.appScroll)
  },
  
  methods: {
    appScroll() {
      // 浏览器兼容
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.$store.commit('SET_HEADER_STATUS', scrollTop)
    },

    backTop() {
      // 加计时器是为了过渡顺滑
      let timer = setInterval(() => {
        let ispeed = Math.floor(-this.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop = this.scrollTop + ispeed;
        if (this.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.appScroll)
  },
}
</script>

<style scoped>
  .view-container {
    position: relative;
    width: 100%;
    min-width: 260px;
  }
  /* 导航栏动画 */
  .index-enter-active, .index-leave-active {
    transition: opacity 0.2s
  }
  .index-enter, .index-leave-active {
    opacity: 0
  }
  .main {
    min-height: calc(100vh - 85px);
    padding-top: 50px;
  }
  /* toTop 图标样式 */
  .to_top {
    position: fixed;
    bottom: 5rem;
    right: 2rem;
    font-size: 60px;
    color: var(--blog-green);
  }
  /* tuTop动画 */
  .up_hiddent-enter-active {
    animation: up_hiddent .5s reverse;
  }
  .up_hiddent-leave-active {
    animation: up_hiddent .5s ;
  }
  @keyframes up_hiddent{
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      bottom: 150px;
    }
  }
</style>