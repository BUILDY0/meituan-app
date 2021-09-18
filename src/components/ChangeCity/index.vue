<template>
  <div class="page-changeCity">
    <el-row>
      <province />
    </el-row>
    <el-row>
      <city />
    </el-row>
    <el-row>
      <hot-history />
    </el-row>
    <el-row>
      <category />
    </el-row>
  </div>
</template>
<script>
import Category from "./Category";
import City from "./City";
import HotHistory from "./HotHistory";
import Province from "./Province";
export default {
  components: {
    Category,
    City,
    HotHistory,
    Province,
  },
};
</script>
<style lang="scss">
@import "@/assets/css/changecity/category";
@import "@/assets/css/changecity/hot";
@import "@/assets/css/changecity/iselect";
@import "@/assets/css/changecity/select";
</style>