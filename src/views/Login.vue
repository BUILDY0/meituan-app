<template>
  <div class="page-login">
    <header class="login-header">
      <router-link :to="{ path: '/' }"> <div class="logo"></div></router-link>
    </header>
    <main>
      <div class="login-panel">
        <div class="banner">
          <img
            src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
            alt=""
          />
        </div>
        <div class="form">
          <h4 class="tips" v-show="error">
            <i></i>
            {{ error }}
          </h4>
          <p>
            <span class="reg">账号登录</span>
          </p>

          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="auto"
            class="demo-ruleForm"
          >
            <el-form-item
              label="用户名"
              prop="userName"
              style="margin-bottom: 20px"
            >
              <el-input
                type="text"
                v-model="ruleForm.userName"
                autocomplete="off"
                @change="auth"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="密码"
              prop="password"
              style="margin-bottom: 20px"
            >
              <el-input
                type="password"
                v-model="ruleForm.password"
                autocomplete="off"
                @change="auth"
              ></el-input>
            </el-form-item>
            <p class="foot">
              <a href="#">忘记密码？</a>
            </p>
            <el-form-item width="100%" class="btn">
              <el-button
                type="primary"
                @click="submitForm('ruleForm')"
                class="btn-login"
                >登录</el-button
              >
            </el-form-item>
          </el-form>
          <div class="agreement">
            <el-checkbox v-model="checked"></el-checkbox>
            <p class="info">
              我已阅读并同意
              <a href="#">《美团用户协议》</a>
              <a href="#"> 《隐私政策》</a>
              ，并授权美团使用该美团账号信息（如昵称、头像、收货地址）进行统一管理
            </p>
          </div>
          <div class="oauth-wrapper J-oauth-wrapper">
            <h3 class="title-wrapper">
              <span class="title">用合作网站账号登录</span>
            </h3>
            <div class="oauth cf">
              <span
                class="oauth__link oauth__link--qq third-login-btn"
                data-href="/account/connect/tencent"
                target="_blank"
                id="J-third-tencent"
              ></span>
              <span
                class="oauth__link oauth__link--weibo third-login-btn"
                data-href="/account/connect/sina"
                target="_blank"
                id="J-third-sina"
              ></span>
            </div>
            <i id="thirdLoginRiskpartner" data-riskpartner="0"></i>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <ul>
        <li><a href="#">关于美团</a></li>
        <li><a href="#">加入我们</a></li>
        <li><a href="#">商家入驻</a></li>
        <li><a href="#">帮助中心</a></li>
        <li><a href="#">美团手机版</a></li>
      </ul>
      <p>
        ©2021 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号
      </p>
    </footer>
  </div>
</template>

<script>
import api from "@/api";
import { setUser } from "@/util";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };

    return {
      error: "",
      ruleForm: {
        userName: "",
        password: "",
      },
      checked: true,
      rules: {
        userName: [{ validator: validatePass, trigger: "blur" }],
        password: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    auth() {
      api
        .login({
          params: {
            userName: this.ruleForm.userName,
            password: this.ruleForm.password,
          },
        })
        .then((res) => {
          if (res.status === "fail") {
            this.error = res.msg;
            return false;
          } else {
            this.error = "";
          }
        });
    },
    login() {
      api
        .login({
          params: {
            userName: this.ruleForm.userName,
            password: this.ruleForm.password,
          },
        })
        .then((res) => {
          if (res.status === "fail") {
            this.error = res.msg;
            return false;
          }
          this.$store.commit("CMT_USER", this.ruleForm.userName);

          setUser(
            this.ruleForm.userName,
            (res) => {
              alert(res + "已成功登录");
            },
            this
          );
        });
    },
    submitForm(formName) {
      //   this.$refs[formName].validate((valid) => {
      //     if (valid) {
      //       alert("submit!");
      //     } else {
      //       console.log("error submit!!");
      //       return false;
      //     }
      //   });
      if (!this.checked) {
        alert("请勾选“我已阅读并同意”协议，否则无法为您提供服务！");
      }
      this.login();
    },
  },
};
</script>


<style lang='scss'>
@import "@/assets/css/login/index";
</style>