<template>
	<!-- <div>

	<button @click="back">返回列表</button>
    <article class="block post wysiwyg" v-for="item in infos" v-bind:key="item">
    <h2>{{item.title}}</h2>
    <div class="ui ribbon label red">
    </div>
    <div class="abstract" v-html="item.content">
    </div>
  </article>
	</div> -->
	
<div>
   <div class="container">
                <el-col class="article">
                    <span class="return" @click="back">返回列表</span>
                    <h1 class="article-h1" v-html="infos[0].title"></h1>
                    <p>
                        <span class="p">发布时间：{{infos[0].createDate}}</span>
                    </p>
                    
                    <!-- <span class="p"><span>作者：{{authorName}}</span><span>发布时间：{{articleData.date.replace(/T.*/g,'')}}</span></p> -->
                    <div class='left' v-html="infos[0].content"></div>
                </el-col>
            </div>
</div>


</template>
 
<script>
export default {
  name: 'aaa',
  data () {
    return {
      infos:''
      // infos: {
      //   articleId:'',
      //   title:'',
      //   tag:'',
      //   describtion:'',
      //   createDate:'',
      //   content:'',
        
      // }
    }
  },
  mounted(){
      console.log(this.$route.params.uid)
    //   console.log(this.$route.query.articleId)
      this.$axios({
      method: "post",
      url: " http://127.0.0.1:5000/detail", // 接口地址
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
/* #app {
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
} */

.left {
  text-align:left
}

</style>