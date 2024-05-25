<template>
  <a-card title="排行榜" style="width: 100%">
    <a-table :columns="columns" :data="data" pagination="false" />
  </a-card>
</template>

<script setup>
import { onMounted, ref, watchEffect } from "vue";

const columns = [
  {
    title: "排名",
    dataIndex: "rank",
    key: "rank",
  },
  {
    title: "用户名",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "参加比赛数",
    dataIndex: "num",
    key: "num",
  },
];

const data = ref([
  { rank: 1, username: "user1", num: 100 },
  { rank: 2, username: "user2", num: 95 },
  { rank: 3, username: "user3", num: 90 },
]);
</script>

<style scoped>
a-card {
  margin: 20px;
}
</style>
