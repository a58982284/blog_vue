<template>



<div class="article-list">
            <el-col>
                <div class="container">
                    <el-col class="article-list">
                        <ul>
                            <li v-for="item in infos" v-bind:key="item">
                                <h1 v-html="item.title"></h1>
                                <div class="article-rendered" v-html="item.content" @click="goarticle(item.articleId)"></div>
                                <span @click="goarticle(item.articleId)">查看详情</span>
                            </li>
                            <p v-if="total<1">该分类下没有文章</p>
                        </ul>
                    </el-col>
                </div>
                <div class="container">
                    <div class="pagination">
                        <el-col>
                            <el-pagination v-if="total>0" layout="prev, pager, next" :page-size="per_page" :total="total">
                            </el-pagination>
                        </el-col>
                    </div>
                </div>
            </el-col>


  <!-- <article class="block post wysiwyg" v-for="item in infos" v-bind:key="item">
    <h2>{{item.title}}</h2>
    <p class="article-meta">发布于 {{item.createDate}}</p>
    <div class="ui ribbon label red">
      <a href="">{{item.tag}}</a>
    </div>
    <div class="abstract" v-html="item.content">
    </div>
    <p class="more" @click="goarticle(item.articleId)">
        阅读全文
    </p>
  </article> -->
  <div class="pages">
    <a href="javascript:;" @click="go(page-=1)" style="float: left;">上一页</a>
    <a href="javascript:;" @click="go(page+=1)" style="float: right;">下一页</a>
  </div>
</div>

</template>

<script>
// import { Store } from 'vuex';
export default {
  name: 'bloglist',
  data () {
    return {
      showname:false,
      infos: 'N/A',
    }
  },
  mounted () {
    // console.log(this.$route.query.id)
    //   console.log(this.uid)
    
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
        // console.log('aaaaaa'+Store)
      })
      .catch(error => console.log(error, "error")); // 失败的返回
    
      
    
    
  },
  methods:{
  goarticle(uid){
  // this.$router.push('/aaa')
  this.$router.push({ path: `/player/${uid}` })
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style media="screen">
.article-rendered {
  text-align:left
}
</style>