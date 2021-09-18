<template>
  <div class="m-life-1">
    <el-col :span="14" class="slide">
      <el-carousel trigger="click" height="240px">
        <el-carousel-item v-for="img in imgURLList" :key="img">
          <router-link to="/"><img :src="img" alt="\" /></router-link>
        </el-carousel-item>
      </el-carousel>
    </el-col>
    <el-col :span="4">
      <router-link to="/">
        <div class="m-life-pic" />
      </router-link>
    </el-col>
    <el-col :span="6" class="m-life-login">
      <h4>
        <img
          src="https://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg"
        />
      </h4>
      <p class="m-life-login-name">
        Hi! {{ $store.state.user ? $store.state.user : "你好" }}
      </p>
      <p v-show="!$store.state.user">
        <router-link :to="{ name: 'login' }"
          ><el-button round>登录</el-button></router-link
        >
      </p>
      <p v-show="!$store.state.user">
        <router-link :to="{ name: 'register' }">
          <el-button round>注册</el-button>
        </router-link>
      </p>
    </el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgURLList: [
        "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
        "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
        "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png",
        "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg",
      ],
    };
  },
};
</script>