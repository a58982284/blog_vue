<template>
  
<div class="hello">
    <!-- <h1>{{ msg }}</h1>
    <button @click="go">点我跳转</button> -->
    <!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled>消息中心</el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
</el-menu> -->
<div class="line"></div>
<!-- <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#409EFF"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-menu-item index="2">登录</el-menu-item> -->
  <el-menu

  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#409EFF"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">主页</el-menu-item>
  <el-menu-item index="2">登录</el-menu-item>
  <!-- <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu> -->
  <!-- <el-menu-item index="3" disabled>消息中心</el-menu-item> -->
  <el-menu-item index="3">
    <!-- <a href="https://www.ele.me" target="_blank">写博客</a> -->
    <router-link to="/addBlog" class="add-blog-btn">写博客</router-link>
    </el-menu-item>
</el-menu>
    <ul>
          <li v-for="info in infos" v-bind:key="info">
            {{info.name}}
            <!-- <router-link :to="{path: '/detail/' + info.id}">link</router-link> -->
            <!-- <router-link :to="info.id">link</router-link> -->
            <button @click="go(info.id)">点我跳转</button>
          </li>
      </ul>
    
</div>
</template>

<script>
// import AddBlog from '@/components/addBlog'
export default {
  name: 'HelloWorld',
  // components:{
  //   AddBlog,
  // },
  data () {
    return {
      msg: '哈哈',
      infos: 'N/A',
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  mounted () {
    console.log(this.$route.query.id)
      
      this.$axios({
      method: "get",
      url: " http://127.0.0.1:5000/legendary", // 接口地址
      data: {
        keyword: "1"   // 传接口参数
      }
    })
      .then(response => {
        // console.log(typeof response.data);
        // console.log(response.data, "success");   // 成功的返回      
        this.infos = response.data;
      })
      .catch(error => console.log(error, "error")); // 失败的返回

    
    
  },
  methods:{
  go(uid){
  // this.$router.push('/aaa')
  this.$router.push({ path: `/player/${uid}` })
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header{
    width: 100%;
    line-height: 60px;
    background-color: #D2483E;
    color: #fff;
    text-align: center;
  }
  .header-row{
    max-width: 985px;
    margin: 0 auto;
  }
  .header-title{
    text-align: center;
  }
  .header-title a{
    color: #fff;
  }
  .el-main{
    margin: 0 auto;
    margin-bottom: 60px;
  }
  .blog-main{
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0 auto;
    position: fixed;
    top: 60px;
    right: 0;
    left: 0;
    bottom: 0;
  }
  a{
    text-decoration: none;
    color: #000;
  }
  .add-blog-btn{
    color: #f5f5f5;
    font-size: 15px;
  }
  .search-input{
    display: inline-block;
    height: 30px;
    line-height: 30px;
    width: 250px;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    font-size: inherit;
    outline: 0;
    padding: 0 10px;
    font-size: 14px;
  }
  .el-icon-search{
    color: #696969;
    margin-left: -40px;
    cursor: pointer;
    width: 30px;
    height: 30px;
    line-height: 30px;
  }
</style>
