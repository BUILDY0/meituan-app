<template>
  <div class="m-istyle" :class="containerBody[0].tag">
    <dl class="istyle" @mouseover="handleMouseover">
      <dt>{{ containerList.listTitle }}</dt>
      <dd
        v-for="item in containerList.listItems"
        :key="item"
        :data-class-name="item"
        :class="{ active: activeClassName === item }"
      >
        {{ item }}
      </dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in containerBody" :key="item.tag + index">
        <el-card shadow="never">
          <div :class="item.tag">
            <a :href="item.targetURL" target="_blank">
              <div class="product-card-header">
                <img :src="item.imgURL" class="product-img" /><img
                  :src="item.imgAvatarURL"
                  alt=""
                  class="head-img"
                  v-if="item.imgAvatarURL"
                />
              </div>
              <div class="product-info">
                <p class="product-title">
                  {{ item.title }}
                </p>
                <p class="sub-title" v-if="item.comment">
                  <el-rate v-model="item.rate" disabled text-color="#ff9900">
                  </el-rate>
                  <span>{{ item.comment }}个评价</span>
                </p>
                <p class="sub-title">
                  <span>{{ item.subTitle }}</span>
                </p>

                <p class="price-number numfont price">
                  <span class="price-icon">￥</span>{{ item.price }}
                </p>
              </div></a
            >
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
import api from "@/api";
export default {
  props: {
    containerList: {
      type: [Object, Array],
      required: true,
      default: {},
    },
    containerBody: {
      type: [Object, Array],
      required: true,
      default: [],
    },
  },
  data() {
    return {
      activeClassName: this.containerList.listItems[0],
    };
  },
  methods: {
    handleMouseover(e) {
      const dom = e.target;
      const tagName = dom.tagName;
      if (tagName === "DD") {
        this.activeClassName = dom.getAttribute("data-class-name");
      }
      // console.log(this.activeClassName);
    },
  },
  created() {
    api.getContainer().then((res) => {});
  },
};
</script>
