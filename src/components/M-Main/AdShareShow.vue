<template>
  <div class="m-life-2">
    <el-col :span="7">
      <router-link to="/"><div class="m-life-hotel"></div></router-link>
    </el-col>
    <el-col :span="7">
      <router-link to="/"><div class="m-life-music"></div></router-link>
    </el-col>
    <el-col :span="4">
      <router-link to="/"> <div class="m-life-coop"></div></router-link>
    </el-col>
    <el-col :span="6">
      <div class="m-life-downapp">
        <img
          src="https://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"
          alt=""
        />
        <p>美团APP手机版</p>
        <p>
          <span>1元起</span>
          <em>吃喝玩乐</em>
        </p>
      </div>
    </el-col>
  </div>
</template>