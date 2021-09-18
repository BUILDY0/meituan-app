<template>
  <div class="m-header">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <router-link to="/"
          ><img
            src="//s0.meituan.net/bs/fe-web-meituan/10afbf1/img/logo.png"
            alt="美团"
        /></router-link>
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="searchVal"
            placeholder="搜索商家或地点"
            @focus="showControl(true)"
            @blur="showControl(false)"
          ></el-input>
          <router-link :to="{ name: 's', params: { wd: searchVal } }">
            <el-button type="primary" icon="el-icon-search"></el-button>
          </router-link>
          <dl class="searchList" v-show="searchVal && isShow">
            <dd
              v-for="(item, index) in searchList"
              :key="index"
              @click="handleClick(item)"
            >
              <router-link :to="{ name: 's', params: { wd: item } }">{{
                item
              }}</router-link>
            </dd>
          </dl>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import { CMT_VISITED_LIST } from "@/store/name.config";
import api from "@/api";
export default {
  data() {
    return {
      searchVal: "",
      searchList: [],
      isShow: true,
    };
  },
  methods: {
    ...mapMutations([CMT_VISITED_LIST]),
    showControl(boolean) {
      setTimeout(() => (this.isShow = boolean), 200);
    },
    handleClick(item) {
      if (!this.$store.state.user) {
        this.$router.push({ path: "/login" });
      }
      this[CMT_VISITED_LIST](this.$route.params.wd);
      this.searchVal = item;
    },
  },
  watch: {
    searchVal: {
      handler() {
        api.getSearch().then((res) => {
          this.searchList = res.list.filter((item) =>
            item.includes(this.searchVal)
          );
        });
      },
      immediate: true,
    },
  },
};
</script>
