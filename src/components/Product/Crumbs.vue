<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item
      to="/"
      v-for="(item, index) in curVistedNodeList"
      :key="index"
      >{{ item }}</el-breadcrumb-item
    >
  </el-breadcrumb>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";
import { CMT_VISITED_LIST } from "@/store/name.config";
export default {
  computed: {
    ...mapState(["curVistedNodeList"]),
  },
  methods: {
    ...mapMutations([CMT_VISITED_LIST]),
  },
  watch: {
    "$route.params.wd": {
      handler() {
        this[CMT_VISITED_LIST](this.$route.params.wd);
      },
      immediate: true,
    },
  },
};
</script>