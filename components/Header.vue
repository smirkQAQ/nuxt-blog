<template>
  <div>
    <div class="w-full header">
      <div class="content">

      </div>
    </div>
    <div class="header--bottom opacity-0 md:opacity-100"></div>
  </div>
</template>

<script>
export default {
  name: 'Header',

}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  height: 40px;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  transition: all .5s;
  z-index: 10;
  background-color: var(--blog-green);
}
.header--bottom {
  position: fixed;
  top: 40px;
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