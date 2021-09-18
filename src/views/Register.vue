<template>
  <div class="page-register">
    <div class="header">
      <header>
        <router-link :to="{ path: '/' }">
          <div class="site-logo"></div>
        </router-link>
        <div class="login bold">
          已有美团账号？
          <router-link :to="{ name: 'login' }">登录</router-link>
        </div>
      </header>
    </div>
    <div class="content">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="auto"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input
            type="text"
            v-model="ruleForm.userName"
            autocomplete="off"
            placeholder="4位以上的字母数字或下划线"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            placeholder="6位以上的字母数字或下划线"
            @input="handleInput"
          ></el-input>
          <div class="pw-strength">
            <div class="bar" :class="psStrenth"></div>
            <div class="letter">
              <span>弱</span>
              <span>中</span>
              <span>强</span>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="确认密码" prop="repasswd">
          <el-input
            type="password"
            v-model="ruleForm.repasswd"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >完成注册并登录</el-button
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
    </div>
    <footer>
      <p>©meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
    </footer>
  </div>
</template>

<script>
import { gblen, setUser } from "@/util";
import api from "@/api";
export default {
  data() {
    let reg = /(?=.*[\d]+)((?=.*[A-z]+)|(?=.*[_]+))/;
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (gblen.call(value) < 4 || !reg.test(value)) {
        callback(new Error("用户名必须为4-16位的字母数字或下划线组成"));
      } else {
        callback();
      }
    };
    var validatePass1 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (gblen.call(value) < 6) {
        callback(new Error("密码不能小于6位"));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      checked: true,
      psStrenth: "",
      ruleForm: {
        userName: "",
        password: "",
        repasswd: "",
      },
      rules: {
        userName: [{ validator: validatePass, trigger: "blur" }],
        password: [{ validator: validatePass1, trigger: "blur" }],
        repasswd: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    handleInput(val) {
      const reg = /(?=.*[A-Za-z])(?=.*[\d])(?=.*_)/;
      if (!val) {
        this.psStrenth = "";
      } else if (val.length > 12 && reg.test(val)) {
        this.psStrenth = "strong";
      } else if (val.length > 12 || reg.test(val)) {
        this.psStrenth = "normal";
      } else {
        this.psStrenth = "week";
      }
    },
    submitForm() {
      api
        .register({
          params: {
            userName: this.ruleForm.userName,
            password: this.ruleForm.password,
            rePassword: this.ruleForm.repasswd,
          },
        })
        .then((res) => {
          if (res.status === "fail") {
            return false;
          }
          this.$store.commit("CMT_USER", res);

          setUser(
            this.ruleForm.userName,
            (res) => {
              alert(res + ",您已经注册成功！正在跳转...");
            },
            this
          );
        });
    },
  },
};
</script>



<style lang="scss">
@import "@/assets/css/register/index.scss";
</style>