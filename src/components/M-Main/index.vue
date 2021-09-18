<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <menu-list />
      </el-col>
      <el-col :span="19" class="m-life">
        <el-row>
          <sub-nav />
        </el-row>
        <el-row>
          <carousel-login-show />
        </el-row>
        <el-row>
          <ad-share-show />
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <container
          :containerList="sendDataList.minsu"
          :containerBody="sendDataBody.minsu"
        />
        <container
          :containerList="sendDataList.like"
          :containerBody="sendDataBody.like"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import AdShareShow from "./AdShareShow.vue";
import CarouselLoginShow from "./CarouselLoginShow.vue";
import MenuList from "./MenuList.vue";
import SubNav from "./SubNav.vue";
import Container from "./Container.vue";
export default {
  components: {
    AdShareShow,
    CarouselLoginShow,
    MenuList,
    SubNav,
    Container,
  },
  data() {
    return {
      sendDataList: {
        minsu: {
          listTitle: "推荐民宿",
          listItems: [
            "天津",
            "济南",
            "大连",
            "太原",
            "石家庄",
            "秦皇岛",
            "呼和浩特",
            "潍坊",
            "唐山",
            "泰安",
          ],
        },
        like: {
          listTitle: "猜你喜欢",
          listItems: ["为你甄选最适合的"],
        },
      },
      sendDataBody: {
        minsu: [
          {
            tag: "minsu-item",
            targetURL:
              "https://minsu.meituan.com/housing/12533645/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=recommend",
            imgURL:
              "https://img.meituan.net/phoenix/9c73cb8436c9ed74a2de1cfe02134efa197229.jpg@740w_416h_1e_1c",
            imgAvatarURL:
              "https://img.meituan.net/avatar/f197c2700db0eb746c7b0370bb313a3b27280.jpg@200w_200h_1e_1c",
            title:
              "【青涵美宿】青粹./天津120寸投影观影/天津之眼/海河游船/鼓楼/古文化街",
            subTitle: "整套可住2人 | 长虹公园/天津西站",
            price: 178,
          },
          {
            tag: "minsu-item",
            targetURL:
              "https://minsu.meituan.com/housing/11269584/?phx_wake_up_type=mtpc_category&phx_wake_up_source=recommend",
            imgURL:
              "https://img.meituan.net/phoenix/99c1b8dbf845c7a20406cf150925e0e36278612.jpg@740w_416h_1e_1c",
            imgAvatarURL:
              "https://img.meituan.net/avatar/0c878cc673a096a66dd4cf27eec9070d23536.jpg@200w_200h_1e_1c",
            title: "[澜途]投影仪/电视大床房拱北富华里九州大道",
            subTitle: "整套1居室·可住2人 | 拱北口岸",
            price: 120,
          },
          {
            tag: "minsu-item",
            targetURL:
              "https://minsu.meituan.com/housing/10651659/?phx_wake_up_type=mtpc_category&phx_wake_up_source=recommend",
            imgURL:
              "https://img.meituan.net/phoenix/dfade0bdd7a645b0cf7f98823c4147955339899.jpg@740w_416h_1e_1c",
            imgAvatarURL:
              "https://img.meituan.net/avatar/4570c2cf7f155be24f5ac74ff93e61a895786.jpg@200w_200h_1e_1c",
            title:
              "贝壳•拱北口岸/长隆海洋王/港珠澳大桥/珠海站/富华里/华发商都「混搭风一居室」",
            subTitle: "整套可住2人 | 长虹公园/天津西站",
            price: 148,
          },
          {
            tag: "minsu-item",
            targetURL:
              "https://minsu.meituan.com/housing/7455191/?phx_wake_up_type=mtpc_category&phx_wake_up_source=recommend",
            imgURL:
              "http://p0.meituan.net/iphoenix/8ff50c4086bb034069800aa6e505f6704294187.jpg@740w_416h_1e_1c",
            imgAvatarURL:
              "https://img.meituan.net/avatar/d2755faa0dcf875bf8f8ea50a564a17a38549.jpg@200w_200h_1e_1c",
            title:
              "『灯火繁雅』长隆旅游度假区·长隆欢乐世界·7号线直达广州南站&番禺万达广场·番禺天河城 ·大学城南 休闲简欧轻奢一居公寓",
            subTitle: "整套1居室·可住2人 | 长隆旅游度假区",
            price: 238,
          },
          {
            tag: "minsu-item",
            targetURL:
              "https://minsu.meituan.com/housing/2628352/?phx_wake_up_type=mtpc_category&phx_wake_up_source=recommend",
            imgURL:
              "http://p1.meituan.net/iphoenix/8c336f2dbe1fd9f3fdc232bf675daa301222100.jpg@740w_416h_1e_1c",
            imgAvatarURL:
              "https://img.meituan.net/avatar/f03b98f001252208f21a7c3b6bafb32f13038.jpg@200w_200h_1e_1c",
            title:
              "已消毒特惠/近广州白云国际机场/含24小时机场免费接送/近机场南机场北T1T2.可开发票",
            subTitle: "整套1居室·可住2人 | 新白云国际机场",
            price: 199,
          },
          {
            tag: "minsu-item",
            targetURL:
              "https://minsu.meituan.com/housing/13599344/?phx_wake_up_type=mtpc_category&phx_wake_up_source=recommend",
            imgURL:
              "https://img.meituan.net/phoenix/5fa80d71a08a33420b357d714cc183991934753.jpg@740w_416h_1e_1c",
            imgAvatarURL:
              "https://img.meituan.net/avatar/61a9218b22487d66cc5475302e36e7da31656.jpg@200w_200h_1e_1c",
            title:
              "万达套房月租日式江景房即刻好心情！舒达怡情。温馨满分！一线江景 巨幕投影",
            subTitle: "整套1居室·可住2人 | 南沙商圈",
            price: 225,
          },
        ],
        like: [
          {
            tag: "like",
            targetURL:
              "https://minsu.meituan.com/housing/12533645/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=recommend",
            imgURL:
              "https://img.meituan.net/phoenix/9c73cb8436c9ed74a2de1cfe02134efa197229.jpg@740w_416h_1e_1c",
            title:
              "【青涵美宿】青粹./天津120寸投影观影/天津之眼/海河游船/鼓楼/古文化街",
            subTitle: "整套可住2人 | 长虹公园/天津西站",
            comment: 1385,
            rate: 4.6,
            price: 178,
          },
          {
            tag: "like",
            targetURL:
              "https://minsu.meituan.com/housing/11269584/?phx_wake_up_type=mtpc_category&phx_wake_up_source=recommend",
            imgURL:
              "https://img.meituan.net/phoenix/99c1b8dbf845c7a20406cf150925e0e36278612.jpg@740w_416h_1e_1c",
            title: "[澜途]投影仪/电视大床房拱北富华里九州大道",
            subTitle: "整套1居室·可住2人 | 拱北口岸",
            price: 120,
            comment: 1385,
            rate: 4.6,
          },
          {
            tag: "like",
            targetURL:
              "https://minsu.meituan.com/housing/10651659/?phx_wake_up_type=mtpc_category&phx_wake_up_source=recommend",
            imgURL:
              "https://img.meituan.net/phoenix/dfade0bdd7a645b0cf7f98823c4147955339899.jpg@740w_416h_1e_1c",
            title:
              "贝壳•拱北口岸/长隆海洋王/港珠澳大桥/珠海站/富华里/华发商都「混搭风一居室」",
            subTitle: "整套可住2人 | 长虹公园/天津西站",
            price: 148,
            comment: 1385,
            rate: 4.6,
          },
          {
            tag: "like",
            targetURL:
              "https://minsu.meituan.com/housing/7455191/?phx_wake_up_type=mtpc_category&phx_wake_up_source=recommend",
            imgURL:
              "http://p0.meituan.net/iphoenix/8ff50c4086bb034069800aa6e505f6704294187.jpg@740w_416h_1e_1c",
            title:
              "『灯火繁雅』长隆旅游度假区·长隆欢乐世界·7号线直达广州南站&番禺万达广场·番禺天河城 ·大学城南 休闲简欧轻奢一居公寓",
            subTitle: "整套1居室·可住2人 | 长隆旅游度假区",
            price: 238,
            comment: 1385,
            rate: 4.6,
          },
          {
            tag: "like",
            targetURL:
              "https://minsu.meituan.com/housing/2628352/?phx_wake_up_type=mtpc_category&phx_wake_up_source=recommend",
            imgURL:
              "http://p1.meituan.net/iphoenix/8c336f2dbe1fd9f3fdc232bf675daa301222100.jpg@740w_416h_1e_1c",
            title:
              "已消毒特惠/近广州白云国际机场/含24小时机场免费接送/近机场南机场北T1T2.可开发票",
            subTitle: "整套1居室·可住2人 | 新白云国际机场",
            price: 199,
            comment: 1385,
            rate: 4.6,
          },
          {
            tag: "like",
            targetURL:
              "https://minsu.meituan.com/housing/13599344/?phx_wake_up_type=mtpc_category&phx_wake_up_source=recommend",
            imgURL:
              "https://img.meituan.net/phoenix/5fa80d71a08a33420b357d714cc183991934753.jpg@740w_416h_1e_1c",
            title:
              "万达套房月租日式江景房即刻好心情！舒达怡情。温馨满分！一线江景 巨幕投影",
            subTitle: "整套1居室·可住2人 | 南沙商圈",
            price: 225,
            comment: 1385,
            rate: 4.6,
          },
          {
            tag: "like",
            targetURL:
              "https://minsu.meituan.com/housing/12533645/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=recommend",
            imgURL:
              "https://img.meituan.net/phoenix/9c73cb8436c9ed74a2de1cfe02134efa197229.jpg@740w_416h_1e_1c",
            title:
              "【青涵美宿】青粹./天津120寸投影观影/天津之眼/海河游船/鼓楼/古文化街",
            subTitle: "整套可住2人 | 长虹公园/天津西站",
            price: 178,
            comment: 1385,
            rate: 4.6,
          },
          {
            tag: "like",
            targetURL:
              "https://minsu.meituan.com/housing/11269584/?phx_wake_up_type=mtpc_category&phx_wake_up_source=recommend",
            imgURL:
              "https://img.meituan.net/phoenix/99c1b8dbf845c7a20406cf150925e0e36278612.jpg@740w_416h_1e_1c",
            title: "[澜途]投影仪/电视大床房拱北富华里九州大道",
            subTitle: "整套1居室·可住2人 | 拱北口岸",
            price: 120,
            comment: 1385,
            rate: 4.6,
          },
          {
            tag: "like",
            targetURL:
              "https://minsu.meituan.com/housing/10651659/?phx_wake_up_type=mtpc_category&phx_wake_up_source=recommend",
            imgURL:
              "https://img.meituan.net/phoenix/dfade0bdd7a645b0cf7f98823c4147955339899.jpg@740w_416h_1e_1c",
            title:
              "贝壳•拱北口岸/长隆海洋王/港珠澳大桥/珠海站/富华里/华发商都「混搭风一居室」",
            subTitle: "整套可住2人 | 长虹公园/天津西站",
            price: 148,
            comment: 1385,
            rate: 4.6,
          },
          {
            tag: "like",
            targetURL:
              "https://minsu.meituan.com/housing/7455191/?phx_wake_up_type=mtpc_category&phx_wake_up_source=recommend",
            imgURL:
              "http://p0.meituan.net/iphoenix/8ff50c4086bb034069800aa6e505f6704294187.jpg@740w_416h_1e_1c",
            title:
              "『灯火繁雅』长隆旅游度假区·长隆欢乐世界·7号线直达广州南站&番禺万达广场·番禺天河城 ·大学城南 休闲简欧轻奢一居公寓",
            subTitle: "整套1居室·可住2人 | 长隆旅游度假区",
            price: 238,
            comment: 1385,
            rate: 4.6,
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
@import "@/assets/css/index/life.scss";
@import "@/assets/css/index/artistic.scss";
</style>