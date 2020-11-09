<template>
    <div class="login-box">
        <!-- 通过:rules="loginFormRules"来绑定输入内容的校验规则 -->
        <el-form :rules="loginFormRules" ref="loginForm" :model="loginForm" label-position="right" label-width="auto" show-message>
            <span class="login-title">欢迎登录</span>
            <div style="margin-top: 5px"></div>
            <el-form-item label="用户名" prop="loginName">
                <el-col :span="22">
                    <el-input type="text" v-model="loginForm.loginName"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="密码" prop="loginPassword">
                <el-col :span="22">
                    <el-input type="password" v-model="loginForm.loginPassword"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="loginSubmit('loginForm')">登录</el-button>
                <el-button type="primary" @click="onRegit('loginForm')">注册</el-button>
            </el-form-item>
        </el-form>
        
    </div>
</template>
<script>
import cookie from '../Logup/cookie.js'
    export default {
        name: "login",
        data() {
            return {
                loginForm: {
                    loginName: '',
                    loginPassword: ''
                },
                // 表单验证，需要在 el-form-item 元素中增加 prop 属性
                loginFormRules: {
                    loginName: [
                        {required: true, message: '账号不可为空', trigger: 'blur'}
                    ],
                    loginPassword: [
                        {required: true, message: '密码不可为空', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            loginSubmit(formName) {
                var name = cookie.getCookie("name");
                    console.log(name==this.loginForm.loginName)
                // 为表单绑定验证功能
                this.$refs[formName].validate((valid) => {
                    
                    if (this.loginForm.loginName==name ) {
                        // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
                        this.$store.state.loginName=this.loginForm.loginName;
                        this.$router.replace("/");
                    } else {
                        alert('请检查用户名或密码')
                    }
                });
            },
            onRegit(){
                this.$router.replace("/logup");
            }
        }
    }
</script>
<style scoped>
    .login-box {
        border: 1px solid #DCDFE6;
        width: 350px;
        margin: 180px auto;
        padding: 35px 35px 15px 35px;
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        box-shadow: 0 0 25px palegreen;
    }
    .login-title {
        text-align: center;
        margin: 0 auto 40px auto;
        color: #66CD00;
        font-size: 30px;
        font-weight: bold;
    }
</style>
