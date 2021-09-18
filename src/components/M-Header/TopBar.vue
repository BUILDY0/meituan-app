<template>
  <el-row class="m-header m-header-topbar">
    <el-col :span="10">
      <div class="m-geo">
        <div class="position">
          <i class="el-icon-location" />
          {{ $store.state.curPostionCity }}
          <router-link class="changeCity" :to="{ name: 'changeCity' }">
            切换城市
          </router-link>
          [<a href="#" v-for="(item, index) in nearCity" :key="index">{{
            item.name
          }}</a
          >]
        </div>
        <div class="m-user">
          <router-link
            class="login"
            :to="{ name: 'login' }"
            v-show="!$store.state.user"
            >立即登录</router-link
          >
          <router-link
            class="register"
            :to="{ name: 'register' }"
            v-show="!$store.state.user"
            >注册</router-link
          >
          <a
            href="#"
            v-show="$store.state.user"
            class="quit"
            @click="quitHandleClick"
            >退出</a
          >
        </div>
      </div>
    </el-col>
    <el-col :span="14">
      <div class="m-nav">
        <ul class="nav">
          <li class="list">
            <router-link to="/">我的美团</router-link>
            <dl>
              <dd>我的美团</dd>
              <dd>我的订单</dd>
              <dd>我的收藏</dd>
              <dd>抵用券</dd>
              <dd>账户设置</dd>
            </dl>
          </li>
          <li>
            <router-link to="/">手机APP</router-link>
          </li>
          <li class="list bd">
            <router-link to="/">商家中心</router-link>
            <dl>
              <dd>美团餐饮商户中心</dd>
              <dd>登录商家中心</dd>
              <dd>美团智能收银</dd>
              <dd>我想合作</dd>
              <dd>手机免费开店</dd>
              <dd>到店综合业务招募</dd>
              <dd>餐饮合作商招募</dd>
              <dd>商家申请开票</dd>
              <dd>免费合作美团排队</dd>
            </dl>
          </li>
          <li class="list">
            <router-link to="/">美团规则</router-link>
            <dl>
              <dd>规则中心</dd>
              <dd>规则目录</dd>
              <dd>规则评议院</dd>
            </dl>
          </li>
          <li class="list">
            <router-link to="/">网站导航</router-link>
            <div class="subContainer">
              <dl class="hotel">
                <dt>酒店旅游</dt>
                <dd><router-link to="/"> 国际机票</router-link></dd>
                <dd><router-link to="/"> 火车票</router-link></dd>
                <dd><router-link to="/"> 民宿</router-link></dd>
                <dd><router-link to="/"> 经济型酒店</router-link></dd>
                <dd><router-link to="/"> 主题酒店</router-link></dd>
                <dd><router-link to="/"> 商务酒店</router-link></dd>
                <dd><router-link to="/"> 公寓</router-link></dd>
                <dd><router-link to="/"> 豪华酒店</router-link></dd>
                <dd><router-link to="/"> 客栈</router-link></dd>
                <dd><router-link to="/"> 青年旅社</router-link></dd>
                <dd><router-link to="/"> 度假酒店</router-link></dd>
                <dd><router-link to="/"> 别墅</router-link></dd>
                <dd><router-link to="/"> 农家院</router-link></dd>
              </dl>
              <dl class="food">
                <dt>吃美食</dt>
                <dd>烤鱼</dd>
                <dd>特色小吃</dd>
                <dd>烧烤</dd>
                <dd>自助餐</dd>
                <dd>火锅</dd>
                <dd>代金券</dd>
              </dl>
              <dl class="movie">
                <dt>看电影</dt>
                <dd>热映电影</dd>
                <dd>热门影院</dd>
                <dd>热映电影口碑榜</dd>
                <dd>最受期待电影</dd>
                <dd>国内票房榜</dd>
                <dd>北美票房榜</dd>
                <dd>电影排行榜</dd>
              </dl>
              <dl class="app">
                <dt>手机应用</dt>
                <dd>
                  <a
                    href="https://i.meituan.com/mobile/down/meituan"
                    target="_blank"
                    ><img
                      class="appicon"
                      src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png"
                      title="美团app"
                      alt="美团app"
                  /></a>
                </dd>
                <dd>
                  <a
                    href="https://waimai.meituan.com/mobile/download/default"
                    target="_blank"
                    ><img
                      class="appicon"
                      src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png"
                      title="外卖app"
                      alt="外卖app"
                  /></a>
                </dd>
                <dd>
                  <a href="https://minsu.meituan.com/app/" target="_blank"
                    ><img
                      class="appicon"
                      src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png"
                      title="民宿app"
                      alt="民宿app"
                  /></a>
                </dd>
                <dd>
                  <a
                    href="https://www.dianping.com/events/m/index.htm"
                    target="_blank"
                    ><img
                      class="appicon"
                      src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png"
                      title="点评app"
                      alt="点评app"
                  /></a>
                </dd>
                <dd>
                  <a href="https://maoyan.com/app" target="_blank"
                    ><img
                      class="appicon"
                      src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png"
                      title="猫眼app"
                      alt="猫眼app"
                  /></a>
                </dd>
              </dl>
            </div>
          </li>
        </ul>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { mapMutations } from "vuex";
import { CMT_POSITION_CITY, CMT_USER } from "@/store/name.config";
import api from "@/api";
export default {
  data() {
    return {
      nearCity: [],
    };
  },
  methods: {
    ...mapMutations([CMT_POSITION_CITY, CMT_USER]),
    quitHandleClick() {
      this[CMT_USER]("");
      const timeout = new Date();
      timeout.setFullYear(timeout.getFullYear() - 1);
      document.cookie = `auth=;expires=${timeout.toUTCString()};path=/`;
      document.cookie = `user=;expires=${timeout.toUTCString()};path=/`;
      this.$router.push({ path: "/" });
    },
  },
  created() {
    this[CMT_POSITION_CITY]("北京");
    api.getPosition().then((res) => {
      if (this.$store.state.curPostionCity === res.name) {
        this.nearCity = res.nearCity;
      }
    });
  },
  updated() {
    api.getPosition().then((res) => {
      if (this.$store.state.curPostionCity === res.name) {
        this.nearCity = res.nearCity;
      }
    });
  },
};
</script>

