<template>
  <div class="p-1">
    
    <div v-if="loading">
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
      loading: true
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    async getList() {
      const { code, data, msg } = await this.$axios.get('/api/article/articleList', { params: { page: 1, pageSize: 10 }})
      this.loading = false
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
