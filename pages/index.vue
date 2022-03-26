<template>
  <div class="p-1">
    <div v-if="!list" class="opacity-80">
      <a-card class="mb-1" v-for="item in 4" :key="item" >
        <a-skeleton active />
      </a-card>
    </div>
    <a-card v-else class="mb-1" v-for="item in list" :key="item.id" hoverable>
      <img :src="item.cover" alt="">
      {{ item.title }}
    </a-card>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      list: [],
      // loading: false
    }
  },
  // 页面加载或者加载为服务端请求数据 路由为客户端请求
  async asyncData({ $axios }) {
    const { code, data, msg } = await $axios.get('/api/article/articleList', { params: { page: 1, pageSize: 10 }})
    if (code === 200) {
      return {
        list: data.list,
      }
    }
  
  },
  methods: {
    async getList() {
      const { code, data, msg } = await this.$axios.get('/api/article/articleList', { params: { page: 1, pageSize: 10 }})
      // this.loading = false
      if (code === 200) {
        this.list = data.list
      } else {

      }
    }
  }
}
</script>

<style scoped>
  
</style>
