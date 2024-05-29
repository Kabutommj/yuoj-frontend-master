<template>
  <a-card title="排行榜" style="width: 100%">
    <a-table :columns="columns" :data="data" pagination="false">
      <template #optional="{ record }">
        <a-space>
          <a-button type="primary" @click="redirectToDetails(record)"> 详情</a-button>
        </a-space>
      </template>
    </a-table>
  </a-card>
</template>

<script setup>
import { onMounted, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
import {CompetitionControllerService, CompetitionUserControllerService} from "../../../generated";
import message from "@arco-design/web-vue/es/message"; // 假设你使用了 Vue Router

const router = useRouter();

function redirectToDetails(record) {
  // 使用 Vue Router 进行页面跳转
  router.push({
    path: `/view/matchcontext/${record.gameId}`,
  });
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
    slotName: "optional",
  },
];

// action: "/match-details/1",
const data = ref([]);

const loadData = async () => {
  const res = await CompetitionUserControllerService.queryGameAndUserCountUsingGet();
  if (res.code === 0 ) {
    res.data.forEach(one => {
      data.value.push({
        rank: one.rank,
        match_name: one.gameName,
        num: one.userCount,
        gameId: one.gameId,
      })
    })
  } else {
    message.error("加载失败")
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
