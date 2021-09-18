<template>
  <div class="page-product">
    <el-row class="m-crumbs">
      <crumbs />
    </el-row>
    <el-row>
      <el-col :span="19">
        <el-row>
          <category />
        </el-row>
        <el-row>
          <product-show />
        </el-row>
      </el-col>
      <el-col :span="5">
        <el-row>
          <m-map />
        </el-row>
        <el-row>
          <guess-you-like />
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import category from "./Category.vue";
import Crumbs from "./Crumbs";
import guessYouLike from "./GuessYouLike.vue";
import MMap from "./Map.vue";
import ProductShow from "./ProductShow.vue";
export default {
  components: {
    category,
    Crumbs,
    guessYouLike,
    MMap,
    ProductShow,
  },
};
</script>

<style lang="scss">
@import "@/assets/css/products/index.scss";
@import "@/assets/css/products/list.scss";
</style>
