<template>
	<div>
    <el-col>
      <input type="text" v-model="loginForm.username" placeholder="用户名"/>
    </el-col>
    <el-col>
      <input type="text" v-model="loginForm.password" placeholder="密码"/>
    </el-col>
    
    <el-button type="primary" @click="login">登录</el-button>

	</div>
	
</template>
 
<script>
import {mapMutations} from 'vuex';
export default {
  name: 'aaa',
  data () {
    return {
      loginForm:{
          username:'',
          password:''
      },
      userToken:''
    };

  },
   methods: {
    ...mapMutations(['changeLogin']),
    login() {
            let _this =this;
            if(this.loginForm.username===''||this.loginForm.password===''){
                alert('账号或密码不能为空');
            }
            else{
                this.$axios({
      method: "post",
      url: " http://127.0.0.1:5000/login", // 接口地址
      data: {
        content: _this.loginForm   // 传接口参数
      }
    })
      .then(response => {
        // console.log(typeof response.data);
        // console.log(response.data, "success");   // 成功的返回      
        this.userToken = response.data.token;
        
        //讲用户token保存到vuex中
        //全局存储token
        window.localStorage["token"] = JSON.stringify(this.userToken);
        console.log('ddddddddd'+window.localStorage["token"])
        // console.log(_this.userToken)
        this.changeLogin({Authorizaion:this.userToken});
        console.log(this.changeLogin)
        this.$router.push('/');
        alert('登录成功');
      })
      .catch(error => console.log(error, "error")); // 失败的返回
            }
            
        }
    }
  }

// }
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