<template>
	<div id="main">

    <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
  <el-form-item
    label="标题"
    prop="age"
    :rules="[
    {}
    ]"
  >
    <el-input type="age" v-model="title" autocomplete="off"></el-input>
  </el-form-item>

<el-main class="content-content">
     <mavon-editor
     v-model = 'content'
     :ishljs="true"
     @change="saveDoc" 
      :codeStyle="code_style"
     ref=md @imgAdd="$imgAdd" @imgDel="$imgDel"
      />
 </el-main>

  <el-form-item>
    <el-button type="primary" @click="submitForm">提交</el-button>
  </el-form-item>


</el-form>




</div>
	
</template>
 
<script>
export default {
    name: "Create",
    // components: { mavonEditor },
    data() {
        return {
            content: "",
            html:'',    // 转成的html
            title:"",
        };
    },
    methods: {
        
        // updateDoc(markdown) {
        //     // 此时会自动将 markdown 和 html 传递到这个方法中
        //     console.log("markdown内容: " + markdown);
        //     console.log("html内容:" + markdown);
        // },
        saveDoc(value, render) {
            // 此时会自动将 markdown 和 html 传递到这个方法中
            // console.log("markdown内容:" + markdown);
            // console.log("html内容:" + html);
            // console.log(this.doc);
            this.html = render
          console.log(this.html)
            
        },

        submitForm() {
        this.$axios({
      method: "post",
      url: " http://127.0.0.1:5000/insert", // 接口地址
      data: {
        content: this.html,   // 传接口参数
        title:this.title,
      }
    })
      // .then(response => {
      //   // console.log(typeof response.data);
      //   // console.log(response.data, "success");   // 成功的返回      
      //   this.infos = response.data;
      // })
      .catch(error => console.log(error, "error")); // 失败的返回
        this.$router.push('/');

        },
      },

      
    };
    

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