<template>
  <transition name='index'>
    <!-- md:>768 lg>1024 -->
    <div class="box-border mx-auto h-screen view-container md:max-w-3xl lg:max-w-5xl">
      <header class="header w-full">
        <Header></Header>
      </header>
      <main class="main">
        <nuxt />
      </main>
      <footer class="footer">
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
    padding: 0 2px;
  }
  .header {
    
  }
  .main {
    padding-top: 50px;
  }
  .footer {

  }
  .index-enter-active, .index-leave-active {
    transition: opacity 0.2s
  }
  .index-enter, .index-leave-active {
    opacity: 0
  }
</style>