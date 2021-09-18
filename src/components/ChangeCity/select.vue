<template>
  <div class="choose-wrap">
    <div
      class="choose"
      :class="{ disabled: state }"
      @click="emitClick($event, true)"
    >
      <span>{{ spanName }}</span>
      <i class="el-icon-caret-bottom"></i>
      <div
        class="mt-content"
        v-show="dropdownShow"
        v-document-click="emitClick"
      >
        <h2>{{ spanName }}</h2>
        <div class="wrapper">
          <div class="col">
            <span
              v-for="(item, index) in list"
              :key="index"
              class="mt-item"
              :class="{
                active: itemActive === item,
              }"
              @click="emitClick($event, false, item)"
              >{{ item }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      itemActive: "",
    };
  },
  props: {
    spanName: {
      type: String,
      required: true,
      default: "",
    },
    list: {
      default: "",
    },
    state: {
      default: false,
    },
    dropdownShow: {
      default: false,
    },
  },
  methods: {
    emitClick(e, val, item) {
      e.stopPropagation();
      if (e.target.className.includes("disabled")) {
        return;
      }
      if (e.target.tagName === "SPAN") {
        this.itemActive = item;
        this.$emit("emit-state", false);
      }
      this.$emit("emit-click", val, item);
    },
    emitStateChange(val) {
      this.$emit("emit-state", val, item);
    },
  },
  directives: {
    "document-click"(el, banding) {
      document.addEventListener("click", banding.value);
    },
  },
};
</script>