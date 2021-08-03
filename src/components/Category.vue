<template>
  <div class="category-box">
    <router-link v-bind:to="'/status/'+id">確認</router-link>
    <p>{{category_name}}</p>
    <p>{{count_type}}</p>
  </div>
</template>

<script>
export default {
  name: "Category",
  props:{
    category_name: String,
    count_type:String,
    id:String
  }
}
</script>

<style scoped>
  .category-box{
    width: 200px;
    height: 200px;
    border: darkcyan solid 1px;
    box-sizing: border-box;
    margin: 20px;

  }
</style>