<template>
  <div class="footer w-full">
    <div>由 Vue+Node+Antd Design 强力驱动</div>
    <div class="flex leading-none">
      <div class="flex px-1 py-0.5 text-white rounded-md" style="background-color: #ff6a00">
        <TxyIcon />
        <span class="ml-1" style="line-height: 18px">COS</span>
      </div>
      <a class="mx-1" style="line-height: 22px" href="http://beian.miit.gov.cn/">粤ICP备xxx号-1</a>
      <div class="flex px-1 py-0.5 text-white rounded-md" style="background-image: linear-gradient(to bottom right, #006eff, #00c8dc, #00a3ff)">
        <img class="aliyun--tag" :src="require('@/assets/images/aliyun.png')">
        <span class="ml-1" style="line-height: 18px">阿里云</span>
      </div>
    </div>
    <div>
      <span class="face">
			(●'◡'●)ﾉ
      </span>本博客已萌萌哒运行了
    </div>
    <span>{{ dateValue }}</span>
  </div>
</template>

<script>
import '@/assets/css/faceAnimation.css'
import TxyIcon from '@/components/TxyIcon.vue';
export default {
  name: 'Footer',
  components: {
    TxyIcon
  },
  data() {
    return {
      timer: null,
      dateValue: '',
    }
  },

  mounted() {
    this.timer = setInterval(() => {
      const date = new Date("2021/03/27");
      const today = new Date();
      const timeold = (today.getTime() - date.getTime());
      const msPerDay = 24 * 60 * 60 * 1000;
      const e_daysold = timeold / msPerDay;
      const daysold = Math.floor(e_daysold);
      const e_hrsold = (e_daysold - daysold) * 24;
      const hrsold = Math.floor(e_hrsold);
      const e_minsold = (e_hrsold - hrsold) * 60;
      const minsold = Math.floor((e_hrsold - hrsold) * 60);
      const seconds = Math.floor((e_minsold - minsold) * 60);
      this.dateValue = `${daysold} 天 ${hrsold} 小时 ${minsold} 分 ${seconds} 秒`
    }, 1000)
  },

  methods: {

  },

  beforeDestroy() {
    this.timer = null
  }

}
</script>

<style scoped>
  .footer {
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #858585;
    /* background-color: var(--blog-green); */
    z-index: 10;
  }
  .face {
    -webkit-animation: haha 5s infinite ease-in-out;
    animation: haha 5s infinite ease-in-out;
    display: inline-block;
    margin: 0 5px
  }
  .aliyun--tag {
    height: 18px;
  }
</style>