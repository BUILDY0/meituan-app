<template>
  <div class="m-products-list">
    <ul>
      <li
        v-for="nav in navList"
        :key="nav"
        :class="{ 's-nav-active': nav === navActive }"
      >
        {{ nav }}
        <i class="el-icon-d-caret" v-if="nav === '价格排序'"></i>
      </li>
    </ul>
    <el-row>
      <dl class="s-item" v-for="(item, index) in showList" :key="index">
        <dt><img :src="item.image" alt="图片" /></dt>
        <dd>
          <h3>{{ item.title }}</h3>
          <p>
            <el-rate
              v-model="item.score"
              disabled
              text-color="#FF9900"
              score-template="{value}"
            >
            </el-rate>
            <span v-if="item.score > 4.5">很好</span>
            <span v-else-if="item.score > 4">好</span>
            <span v-else-if="item.score > 3.5">不错</span>
            <span v-else-if="item.score >= 3">一般</span>
            <span v-else>差</span>
            <span>{{ item.score }}分</span>
            <span class="s-item-comment-total"
              >{{ item.commentNum }}人评论</span
            >
          </p>
          <p>
            <span>{{ item.tab.join("|") }}</span>
            <span class="s-item-location">
              <i class="el-icon-location" />查看地图
            </span>
          </p>
          <p class="s-item-price">人均￥{{ item.avgPrice }}</p>
          <ul class="deal-items">
            <li
              v-for="(v, i) in item.dealItems.slice(0, showListNum)"
              :key="i"
              class="items"
            >
              <p class="deal-title">{{ v.title }}</p>
              <p>
                <span class="deal-price">￥{{ v.price }}</span>
                <span class="deal-old-price">门市价￥{{ v.counterPrice }}</span>
              </p>
            </li>
          </ul>
          <p v-if="item.dealItems.length > 2" class="toggle-btn">
            <span @click="handleClick($event, item.dealItems.length)"
              >更多{{ item.dealItems.length - showListNum }}个优惠</span
            >
            <i class="el-icon-arrow-down"></i>
          </p>
        </dd>
      </dl>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: "智能排序,价格排序,人气最高,评价最高".split(","),
      navActive: "智能排序",
      showList: [
        {
          image:
            "https://p0.meituan.net/dpmerchantalbum/6c83d5727ce38eb0f73664ea4c376a92210951.jpg@220w_125h_1e_1c",
          title: "火鸡老店",
          type: "food",
          score: 4.1,
          commentNum: 0,
          comment: [
            {
              username: "xxxx",
              evalaute: "好吃",
            },
          ],
          tab: ["火锅", "沙河"],
          address: "昌平区小汤山尚信村沿温榆河畔北岸向西3．5公里",
          avgPrice: 64,
          dealItems: [
            {
              title: "火鸡宴，建议10-14人使用",
              price: 909,
              counterPrice: 1150,
              saleNum: 0,
              priceType: "元",
            },
            {
              title: "火鸡宴，建议10-14人使用",
              price: 909,
              counterPrice: 1150,
              saleNum: 0,
              priceType: "元",
            },
            {
              title: "火鸡宴，建议10-14人使用",
              price: 909,
              counterPrice: 1150,
              saleNum: 0,
              priceType: "元",
            },
          ],
        },
        {
          image:
            "https://p0.meituan.net/dpmerchantalbum/6c83d5727ce38eb0f73664ea4c376a92210951.jpg@220w_125h_1e_1c",
          title: "火鸡老店",
          type: "food",
          score: 4.1,
          commentNum: 0,
          comment: [
            {
              username: "xxxx",
              evalaute: "好吃",
            },
          ],
          tab: ["火锅", "沙河"],
          address: "昌平区小汤山尚信村沿温榆河畔北岸向西3．5公里",
          avgPrice: 64,
          dealItems: [
            {
              title: "火鸡宴，建议10-14人使用",
              price: 909,
              counterPrice: 1150,
              saleNum: 0,
              priceType: "元",
            },
            {
              title: "火鸡宴，建议10-14人使用",
              price: 909,
              counterPrice: 1150,
              saleNum: 0,
              priceType: "元",
            },
            {
              title: "火鸡宴，建议10-14人使用",
              price: 909,
              counterPrice: 1150,
              saleNum: 0,
              priceType: "元",
            },
          ],
        },
        {
          image:
            "https://p0.meituan.net/dpmerchantalbum/6c83d5727ce38eb0f73664ea4c376a92210951.jpg@220w_125h_1e_1c",
          title: "火鸡老店",
          type: "food",
          score: 4.1,
          commentNum: 0,
          comment: [
            {
              username: "xxxx",
              evalaute: "好吃",
            },
          ],
          tab: ["火锅", "沙河"],
          address: "昌平区小汤山尚信村沿温榆河畔北岸向西3．5公里",
          avgPrice: 64,
          dealItems: [
            {
              title: "火鸡宴，建议10-14人使用",
              price: 909,
              counterPrice: 1150,
              saleNum: 0,
              priceType: "元",
            },
            {
              title: "火鸡宴，建议10-14人使用",
              price: 909,
              counterPrice: 1150,
              saleNum: 0,
              priceType: "元",
            },
            {
              title: "火鸡宴，建议10-14人使用",
              price: 909,
              counterPrice: 1150,
              saleNum: 0,
              priceType: "元",
            },
          ],
        },
        {
          image:
            "https://p0.meituan.net/dpmerchantalbum/6c83d5727ce38eb0f73664ea4c376a92210951.jpg@220w_125h_1e_1c",
          title: "火鸡老店",
          type: "food",
          score: 4.1,
          commentNum: 0,
          comment: [
            {
              username: "xxxx",
              evalaute: "好吃",
            },
          ],
          tab: ["火锅", "沙河"],
          address: "昌平区小汤山尚信村沿温榆河畔北岸向西3．5公里",
          avgPrice: 64,
          dealItems: [
            {
              title: "火鸡宴，建议10-14人使用",
              price: 909,
              counterPrice: 1150,
              saleNum: 0,
              priceType: "元",
            },
            {
              title: "火鸡宴，建议10-14人使用",
              price: 909,
              counterPrice: 1150,
              saleNum: 0,
              priceType: "元",
            },
            {
              title: "火鸡宴，建议10-14人使用",
              price: 909,
              counterPrice: 1150,
              saleNum: 0,
              priceType: "元",
            },
          ],
        },
        {
          image:
            "https://p0.meituan.net/dpmerchantalbum/6c83d5727ce38eb0f73664ea4c376a92210951.jpg@220w_125h_1e_1c",
          title: "火鸡老店",
          type: "food",
          score: 4.1,
          commentNum: 0,
          comment: [
            {
              username: "xxxx",
              evalaute: "好吃",
            },
          ],
          tab: ["火锅", "沙河"],
          address: "昌平区小汤山尚信村沿温榆河畔北岸向西3．5公里",
          avgPrice: 64,
          dealItems: [
            {
              title: "火鸡宴，建议10-14人使用",
              price: 909,
              counterPrice: 1150,
              saleNum: 0,
              priceType: "元",
            },
            {
              title: "火鸡宴，建议10-14人使用",
              price: 909,
              counterPrice: 1150,
              saleNum: 0,
              priceType: "元",
            },
            {
              title: "火鸡宴，建议10-14人使用",
              price: 909,
              counterPrice: 1150,
              saleNum: 0,
              priceType: "元",
            },
          ],
        },
        {
          image:
            "https://p0.meituan.net/dpmerchantalbum/6c83d5727ce38eb0f73664ea4c376a92210951.jpg@220w_125h_1e_1c",
          title: "火鸡老店",
          type: "food",
          score: 4.1,
          commentNum: 0,
          comment: [
            {
              username: "xxxx",
              evalaute: "好吃",
            },
          ],
          tab: ["火锅", "沙河"],
          address: "昌平区小汤山尚信村沿温榆河畔北岸向西3．5公里",
          avgPrice: 64,
          dealItems: [
            {
              title: "火鸡宴，建议10-14人使用",
              price: 909,
              counterPrice: 1150,
              saleNum: 0,
              priceType: "元",
            },
            {
              title: "火鸡宴，建议10-14人使用",
              price: 909,
              counterPrice: 1150,
              saleNum: 0,
              priceType: "元",
            },
            {
              title: "火鸡宴，建议10-14人使用",
              price: 909,
              counterPrice: 1150,
              saleNum: 0,
              priceType: "元",
            },
          ],
        },
      ],
      showListNum: 2,
    };
  },
  methods: {
    handleClick(e, length) {
      const dom = e.target;
      if (dom.textContent.includes("个")) {
        this.showListNum = length;
        dom.textContent = "收起";
        dom.nextElementSibling.className = "el-icon-arrow-up";
      } else {
        this.showListNum = 2;
        dom.textContent = `更多${length - 2}个优惠`;
        dom.nextElementSibling.className = "el-icon-arrow-down";
      }
    },
  },
};
</script>