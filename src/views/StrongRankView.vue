<template>
  <a-card title="排行榜" style="width: 100%">
    <a-table :columns="columns" :data="data" pagination="false" />
  </a-card>
</template>

<script setup>
import { onMounted, ref, watchEffect } from "vue";
import {CompetitionControllerService, CompetitionUserControllerService} from "../../generated";
import message from "@arco-design/web-vue/es/message";

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

const data = ref([]);

const loadData = async () => {
  const res = await CompetitionUserControllerService.queryUserNameAndGameCountUsingGet();
  if (res.code === 0) {
    res.data.forEach(one => {
      data.value.push({
        rank: one.rank,
        username: one.userName,
        num: one.gameCount,
      })
    })
  }
};

onMounted(() => {
  loadData();
});


</script>

<style scoped>
a-card {
  margin: 20px;
}
</style>
