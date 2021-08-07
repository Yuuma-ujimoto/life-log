<template>
  <div class="form-wrapper">
    <form class="input-wrapper" action="" @submit="add_category">
      <h2>カテゴリー追加</h2>
      <label for="category_name">カテゴリー名</label>
      <input type="text" v-model="category_name" id="category_name">
      <label for="count_type">回数</label>
      <input type="text" v-model="count_type" list="count_type_list" id="count_type">
      <datalist id="count_type_list">
        <option v-for="item in count_type_list" v-bind:value="item" v-bind:key="item"/>
      </datalist>
      <button type="submit">登録</button>


      <router-link to="/" class="top-link">>Topに戻る</router-link>
    </form>

    <API ref="api"/>
  </div>

</template>

<script>
import API from "@/components/API";
export default {
  name: "AddCategory",
  components: {API},
  data(){
    return{
      category_name:null,
      count_type:null,
      count_type_list:["回","秒","分","時間"]
    }
  },
  methods:{
    add_category:async function(){
      const response = await this.$refs.api.add_category(this.category_name,this.count_type)
      console.log(response)
    }
  }
}
</script>

<style scoped>
.form-wrapper{
  display: flex;
  justify-content: center;
}
.input-wrapper{
  width: auto;
  display: flex;
  flex-direction: column;
}
  input, button{
    width: 400px;
    height: 50px;
    padding: 5px;
    margin: 20px 0;
    border: none;
    box-shadow: 0 3px 3px 1px #bdc3c7;
    box-sizing: border-box;
    font-size: 22px;
  }
  label{
    margin-top: 25px;
    font-size: 24px;
  }
  h2{
    font-size: 32px;
    margin: 15px 0 0;
  }
  .top-link{
    margin-top: 15px;
    font-size: 18px;
    color: #000;
    text-decoration: none;
  }
  input:focus-visible{
    outline: none;
  }
</style>