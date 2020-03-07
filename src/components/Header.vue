<template>
  
<div class="hello">
  <el-menu
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#409EFF"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">主页</el-menu-item>
  <el-menu-item index="2" v-if=!showname>
    <router-link to="/login" class="add-blog-btn" >登录</router-link>
  </el-menu-item>
  <el-menu-item index="3" v-if=showname>
    <router-link to="/addBlog" class="add-blog-btn" >写博客</router-link>
    </el-menu-item>
</el-menu>    
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
      infos: 'N/A',
      activeIndex: '1',
      activeIndex2: '1',
      showname:false
    }
  },
  beforeMount(){
        if(window.localStorage["token"]!=null){
      this.showname=true;
    }
  },
  mounted () {
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
