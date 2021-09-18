<template>
  <div class="page-guessyoulike">
    <el-row>
      <header>猜你喜欢</header>
    </el-row>
    <like-item :data="itemList" />
  </div>
</template>

<script>
import api from "@/api";
import LikeItem from "./LikeItem.vue";
export default {
  data() {
    return {
      itemList: [],
      fixImgList: [
        "https://p0.meituan.net/deal/__26218156__8593562.jpg@190w_106h_1e_1c",
        "https://p0.meituan.net/biztone/40a329b7324323fd075b48a80ec2239d356370.jpg@190w_106h_1e_1c",
        "https://p1.meituan.net/ugcpic/670527a3a73369867db524ade381e5b6@190w_106h_1e_1c",
        "https://p1.meituan.net/msmerchant/88fc1a96fa3f20273e8c36c51406ed0f132546.jpg@190w_106h_1e_1c",
        "https://p1.meituan.net/mogu/0da0cd3be3a6a1e107ca8fe6eb639ef967394.jpg@190w_106h_1e_1c",
        "https://p1.meituan.net/biztone/553272883_1629882838409.jpeg@190w_106h_1e_1c",
        "https://p0.meituan.net/biztone/5ef25579478f391dbc622eaf68f9218b1119164.jpg@190w_106h_1e_1c",
        "https://p0.meituan.net/biztone/36b76e477aadd7e348b5900d0a33dc4a105629.jpg@190w_106h_1e_1c",
        "https://p1.meituan.net/biztone/6399484_1624861938332.jpeg@190w_106h_1e_1c",
        "https://p0.meituan.net/msmerchant/d31b353ba0af321f09a1476841d4857744808.jpg@190w_106h_1e_1c",
      ],
    };
  },
  components: {
    LikeItem,
  },
  created() {
    api.getRecommendList().then((res) => {
      this.itemList = res.map((item, index) => {
        item["imgUrl"] = this.fixImgList[index];
        item.score = +item.score;
        return item;
      });
      // console.log(this.itemList);
    });
  },
};
</script>