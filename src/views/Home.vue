<template>
  <div class="layout-default">
    <el-container>
      <el-header height="">
        <m-header />
      </el-header>
      <el-main height="">
        <router-view />
      </el-main>
      <el-footer height="">
        <m-footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import MHeader from "@/components/M-Header/";
import MFooter from "@/components/M-Footer/";
export default {
  components: {
    MHeader,
    MFooter,
  },
  created() {
    if (document.cookie.includes("auth=true")) {
      const cookieArr = document.cookie.split(";").map((item) => item.trim());
      const targetStr = cookieArr.filter(
        (item) => item.indexOf("user=") !== -1
      )[0];
      const startIndex = targetStr.indexOf("user=");
      const sliceLen = "user=".length;
      let user = targetStr.slice(startIndex + sliceLen);
      this.$store.commit("CMT_USER", user);
    }
  },
};
</script>

<style lang="scss">
@import "@/assets/css/public/layout.scss";
</style>
