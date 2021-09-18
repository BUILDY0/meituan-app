<template>
  <div class="m-product-select">
    <dl class="tab">
      <dt>
        <span>{{ title }}</span>
        <i class="el-icon-caret-bottom"></i>
      </dt>
      <dd>
        <h3 class="select-title">{{ title }}</h3>
        <span v-for="item in list" :key="item.id">{{ item.name }}</span>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  props: ["title", "list"],
};
</script>