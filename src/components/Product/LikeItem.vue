<template>
  <div class="like-items">
    <a href="#">
      <el-row v-for="item in data" :key="item.itemId">
        <div class="ad-banner">
          <img :src="item.imgUrl" alt="/" />
        </div>
        <p class="ad-title">
          {{ item.title }}
        </p>
        <p class="ad-comments">
          <el-rate
            v-model="item.score"
            disabled
            text-color="#ff9900"
            score-template="{value}"
          >
          </el-rate>
          <span>{{ item.commentNum }}个评价</span>
        </p>
        <p class="ad-position">{{ item.areaName }}</p>
        <p class="ad-price">
          <span>￥</span>
          <span>{{ item.lowPrice }}</span>
          <span>起</span>
        </p>
      </el-row>
    </a>
  </div>
</template>
<script>
export default {
  props: ["data"],
};
</script>