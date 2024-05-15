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
    title: "得分",
    dataIndex: "score",
    key: "score",
  },
];

const data = ref([
  { rank: 1, username: "user1", score: 100 },
  { rank: 2, username: "user2", score: 95 },
  { rank: 3, username: "user3", score: 90 },
]);
</script>

<style scoped>
a-card {
  margin: 20px;
}
</style>
