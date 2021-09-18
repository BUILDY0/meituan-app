<template>
  <div>
    <ul class="nav">
      <li v-for="item in navList" :key="item.name">
        <router-link to="/" :class="{ [item.style]: item.style }">{{
          item.name
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          name: "美团外卖",
          style: "takeout",
        },
        {
          name: "猫眼电影",
          style: "",
        },
        {
          name: "美团酒店",
          style: "takeout",
        },
        {
          name: "民宿／公寓",
          style: "apartment",
        },
        {
          name: "商家入驻",
          style: "business",
        },
        {
          name: "美团公益",
          style: "",
        },
      ],
    };
  },
};
</script>