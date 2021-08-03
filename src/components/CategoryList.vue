<template>
  <div class="category-wrapper">
    <div class="category" v-for="category in category_list" v-bind:key="category._id">
      <Category :category_name="category.category_name" :count_type="category.count_type" :id="category._id"/>
    </div>
    <div class="add-category">
      <router-link to="/add-category">Add</router-link>
    </div>
  </div>
</template>

<script>
import Category from "../components/Category";

export default {
  name: "CategoryList",
  props: {
    category_list: Array
  },
  components: {Category},
  data() {
    return {}
  }
}
</script>

<style scoped>
.add-category {
  width: 200px;
  height: 200px;
  border: darkcyan solid 1px;
  box-sizing: border-box;
  margin: 20px;
}

.category-wrapper {
  display: flex;
  width: 100%;
  justify-content: start;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>