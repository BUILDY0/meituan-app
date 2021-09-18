<template>
  <div class="category">
    <dl class="m-category">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="item in ABCs" :key="item">
        <a :href="'#city-' + item">{{ item }}</a>
      </dd>
    </dl>
    <dl class="m-category-section" v-for="(item, index) in ABCs" :key="index">
      <dt :id="'city-' + item">{{ item }}</dt>
      <dd>
        <span
          @click="changeCity(city)"
          v-for="city in ABCList[item]"
          :key="city"
          >{{ city }}</span
        >
      </dd>
    </dl>
  </div>
</template>

<script>
import api from "@/api";
export default {
  data() {
    return {
      ABCs: [],
      ABCList: {},
    };
  },
  methods: {
    changeCity(item) {
      this.$store.commit("CMT_POSITION_CITY", item);
      this.$router.push({ name: "main" });
      // window.scrollTo(0, 0);
    },
  },
  created() {
    api.getProvince().then((res) => {
      res.forEach((item) => {
        item.cityInfoList.forEach((item) => {
          if (!this.ABCs.includes(item.firstChar)) {
            this.ABCs.push(item.firstChar);
          }
          if (this.ABCList[item.firstChar]) {
            this.ABCList[item.firstChar].push(item.name);
          } else {
            this.ABCList[item.firstChar] = [];
          }
        });
      });
      this.ABCs.sort();

      for (const key in this.ABCList) {
        this.ABCList[key].sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
      }
    });
  },
};
</script>
