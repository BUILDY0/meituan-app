<template>
  <div class="m-hcity">
    <dl>
      <dt>热门城市:</dt>
      <dd v-for="item in reg" :key="item">
        <a href="#">{{ item }}</a>
      </dd>
    </dl>
  </div>
</template>

<script>
import api from "@/api";
export default {
  data() {
    return {
      reg: [],
    };
  },
  created() {
    api.getHot().then((res) => {
      this.reg = res.map((item) => item.name);
    });
  },
};
</script>