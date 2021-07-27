<template>
  <CategoryList :category_list="category_list"/>
  <API ref="api"/>
</template>

<script>

import CategoryList from "../components/CategoryList";
import API from "../components/API";

export default {
  components: {
    CategoryList,
    API
  },data(){
    return{
      category_list:[]
    }
  },
  name: "Category",
  mounted() {
      this.get_category_list()
  },
  methods: {
    get_category_list:async function(){
      const result = await this.$refs.api.get_category_list()
      console.log(result)
      this.update_category_list(result)
    },
    update_category_list(category_list) {
      this.category_list = category_list
    }
  }
}
</script>

<style scoped>

</style>