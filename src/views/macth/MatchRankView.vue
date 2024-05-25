<template>
  <a-card title="排行榜" style="width: 100%">
    <a-table :columns="columns" :data="data" pagination="false">
      <template #customRender="{ text }">
        <a-button type="primary" @click="redirectToDetails(text)"
          >详情</a-button
        >
      </template>
    </a-table>
  </a-card>
</template>

<script setup>
import { onMounted, ref, watchEffect } from "vue";
import { useRouter } from "vue-router"; // 假设你使用了 Vue Router

const router = useRouter();

function redirectToDetails(matchId) {
  // 根据比赛 ID 构建详情页面的路由路径
  const detailsPath = `/manage/match/`;

  // 使用 Vue Router 进行页面跳转
  router.push(detailsPath);
}

const columns = [
  {
    title: "排名",
    dataIndex: "rank",
    key: "rank",
  },
  {
    title: "赛事名称",
    dataIndex: "match_name",
    key: "match_name",
  },
  {
    title: "参与人数",
    dataIndex: "num",
    key: "num",
  },
  {
    title: "操作",
    key: "action",
    slots: { customRender: "customRender" },
  },
];

const data = ref([
  { rank: 1, match_name: "1317杯", num: 100, action: "/match-details/1" },
  {
    rank: 2,
    match_name: "全国高校计算机能力挑战赛",
    num: 95,
    action: "/match-details/1",
  },
  { rank: 3, match_name: "蓝桥杯", num: 90, action: "/match-details/1" },
]);
</script>

<style scoped>
a-card {
  margin: 20px;
}
</style>
