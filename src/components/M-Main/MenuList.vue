<template>
  <div class="m-menu" v-detail-show>
    <dl class="nav">
      <dt>全部分类</dt>
      <dd
        v-for="(item, index) in detailList"
        :key="item.name"
        @mouseenter="handleMouseenter(index)"
      >
        <i :class="item.type"></i>
        <router-link to="/">{{ item.name }}</router-link>
        <i class="arrow"></i>
      </dd>
      <div
        class="detail"
        v-show="isDetailShow || isEnterDetailShow"
        @mouseenter="handleEnter(true)"
        @mouseleave="handleEnter(false)"
      >
        <template v-for="item in detailListFilter">
          <h4 :key="item.title">{{ item.title }}</h4>
          <span :key="i" v-for="i in item.items">{{ i }}</span>
        </template>
      </div>
    </dl>
  </div>
</template>

<script>
import api from "@/api";
export default {
  data() {
    return {
      detailList: [],
      detailListFilter: "",
      detailListFilterIndex: "",
      isDetailShow: false,
      isEnterDetailShow: false,
    };
  },
  methods: {
    handleMouseenter(index) {
      this.detailListFilterIndex = index;
      this.detailListFilter = this.detailList[index].items;
      return;
    },
    handleEnter(boolean) {
      this.isEnterDetailShow = boolean;
    },
  },
  directives: {
    detailShow(el, binding, { context: vm }) {
      el.addEventListener("mouseover", (e) => {
        // console.log(e.target);
        if (
          vm.detailListFilter[0] &&
          e.target.tagName === "DD"
          // el.contains(e.target)
        ) {
          vm.isDetailShow = true;
        } else {
          vm.isDetailShow = false;
        }
      });
      // el.addEventListener("mouseleave", () => {
      //   vm.isDetailShow = false;
      // });
    },
  },
  created() {
    api.getNavList().then((res) => {
      this.detailList = res;
    });
  },
};
</script>