<template>
	<div>

      <div class="container">
                <el-col class="article">
                    <span class="return" @click="back">返回列表</span>
                    <h1 class="article-h1" v-html="infos.title"></h1>
                    <!-- <span class="p"><span>作者：{{authorName}}</span><span>发布时间：{{articleData.date.replace(/T.*/g,'')}}</span></p> -->
                    <!-- <span class="p"><span>作者：{{authorName}}</span><span>发布时间：{{articleData.date.replace(/T.*/g,'')}}</span></p> -->
                    <div v-html="infos.content"></div>
                </el-col>
            </div>



	<!-- <button @click="back">点我返回</button>
    <ul>
          <li v-for="info in infos" v-bind:key="info">
              {{info.title}}
            {{info.content}}
          </li>
        </ul> -->
	</div>
	
</template>
 
<script>
export default {
  name: 'aaa',
  data () {
    return {
      infos: {
        articleId:'',
        title:'',
        tag:'',
        describtion:'',
        createDate:'',
        content:'',
        
      }
    }
  },
  mounted(){
      console.log(this.$route.params.uid)
      this.$axios({
      method: "post",
      // url: " http://127.0.0.1:5000/detail", // 接口地址
      url: " http://0.0.0.0:8000/detail", // 接口地址
      data: {
        keyword: this.$route.params.uid   // 传接口参数
      }
    })
      .then(response => {
        // console.log(typeof response.data);
        // console.log(response.data, "success");   // 成功的返回      
        this.infos = response.data;
        console.log(this.infos)
      })
      .catch(error => console.log(error, "error")); // 失败的返回
  },
  methods:{
back(){
this.$router.push('/')
}
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>