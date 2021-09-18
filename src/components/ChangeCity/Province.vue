<template>
  <div class="m-iselect">
    按省份选择：
    <m-select
      :spanName="spanName1"
      :list="provinceList"
      :dropdownShow="dropdownShowleft"
      @emit-click="dropdownShowleftChange"
      @emit-state="stateChange"
    ></m-select>
    <m-select
      :spanName="spanName2"
      :list="cityList"
      :state="popState"
      :dropdownShow="dropdownShowright"
      @emit-click="dropdownShowrightChange"
      class="city"
    ></m-select>
    直接搜索：
    <el-select
      v-model="value"
      filterable
      remote
      reserve-keyword
      placeholder="请输入城市中文名字"
    >
      <el-option
        v-for="item in searchList"
        :key="item"
        :value="item"
        :label="item"
        @click.native="changeCity(item)"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
import MSelect from "./select.vue";
import api from "@/api";
export default {
  components: {
    MSelect,
  },
  data() {
    return {
      searchWordList: ["A", "B", "C"],
      value: "",
      spanName1: "省份",
      spanName2: "城市",
      provinceList: [],
      cityList: [],
      positionData: {},
      dropdownShowleft: false,
      dropdownShowright: false,
      popState: true,
      searchList: [],
    };
  },
  methods: {
    dropdownShowleftChange(flag, item) {
      this.dropdownShowleft = flag;

      if (item) {
        this.spanName1 = item;
        this.spanName2 = "城市";
        this.$store.commit("CMT_POSITION_PROVINCE", item);

        const provinceData = this.positionData.filter(
          (item) => item.provinceName === this.$store.state.curPostionProvince
        )[0];

        this.cityList = provinceData.cityInfoList.map((item) => item.name);
      }

      if (this.dropdownShowright) {
        this.dropdownShowright = false;
      }
    },
    dropdownShowrightChange(flag, item) {
      this.dropdownShowright = flag;
      if (item) {
        this.spanName2 = item;
        this.changeCity(item);
        // console.log(this.$route);
      }
      if (this.dropdownShowleft) {
        this.dropdownShowleft = false;
      }
    },
    stateChange(flag) {
      this.popState = flag;
    },
    changeCity(item) {
      this.$store.commit("CMT_POSITION_CITY", item);
      this.$router.push({ name: "main" });
      // window.scrollTo(0, 0);
    },
  },
  created() {
    api.getProvince().then((res) => {
      this.positionData = res;
      this.provinceList = res.map((item) => item.provinceName);

      // 获取所有城市

      res
        .map((item) => {
          return item.cityInfoList;
        })
        .forEach((item) => {
          item.forEach((item) => this.searchList.push(item.name));
        });
    });
  },
};
</script>