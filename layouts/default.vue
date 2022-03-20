<template>
  <transition name='index'>
    <!-- md:>768 lg>1024 -->
    <div class="box-border mx-auto view-container md:max-w-3xl lg:max-w-5xl">
      <header class="w-full">
        <Header></Header>
      </header>
      <main class="main">
        <nuxt />
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  </transition>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
  name: 'Container',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
  .view-container {
    position: relative;
    width: 100%;
    min-width: 260px;
  }
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
</style>