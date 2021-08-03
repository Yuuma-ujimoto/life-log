
<script>
import axios from "axios"
export default {
  name: "API",
  mounted() {
    this.get_category_list()
  },
  methods:{
    get_category_list:async function(){
      const url = "http://localhost:3000/get-category"
      const response = await axios.get(url)
      const result = response.data.result
      return result
    },
    add_category:async function(category_name,count_type){
      const url = "http://localhost:3000/add-category"
      const params = new URLSearchParams()
      params.append('category_name', category_name);
      params.append("count_type", count_type);
      const response = await axios.post(url,params)
      const result = response.data
      if(!result.error){
        console.log("error")
      }
      return result
    }
  }
}
</script>

<style scoped>

</style>