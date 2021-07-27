
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
    }
  }
}
</script>

<style scoped>

</style>