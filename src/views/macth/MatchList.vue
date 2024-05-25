<template>
  <div id="questionsView">
    <a-form :model="searchParams" layout="inline">
      <!-- Form content -->
    </a-form>
    <a-divider size="0" />
    <a-table
        :columns="columns"
        :data="dataList"
        @page-change="onPageChange"
    >
      <template #competitionContext="{ record }">
        {{ record.competitionContext }}
      </template>
      <template #competitionStartTime="{ record }">
        {{ moment(record.competitionStartTime).format("YYYY-MM-DD HH:mm:ss") }}
      </template>
      <template #competitionEndTime="{ record }">
        {{ moment(record.competitionEndTime).format("YYYY-MM-DD HH:mm:ss") }}
      </template>
      <template #optional="{ record }">
        <a-space>
          <a-button type="primary" @click="toQuestionPage(record)">
            查看比赛
          </a-button>
        </a-space>
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue";
import {
  type Competition,
  CompetitionControllerService,
  Page_Question_,
  Question,
  QuestionControllerService,
  QuestionQueryRequest,
} from "../../../generated";
import message from "@arco-design/web-vue/es/message";
import * as querystring from "querystring";
import { useRouter } from "vue-router";
import moment from "moment";

const tableRef = ref();

const dataList = ref([]);
const total = ref(0);
const searchParams = ref<QuestionQueryRequest>({
  title: "",
  tags: [],
  pageSize: 8,
  current: 1,
});

const loadData = async () => {
  const res = await CompetitionControllerService.getCompetitionListUsingGet(
  );
  if (res.code === 0) {
    dataList.value = res.data
  } else {
    message.error("加载失败，" + res.message);
  }
};

/**
 * 监听 searchParams 变量，改变时触发页面的重新加载
 */
watchEffect(() => {
  loadData();
});

/**
 * 页面加载时，请求数据
 */
onMounted(() => {
  loadData();
});

// {id: "1", title: "A+ D", content: "新的题目内容", tags: "["二叉树"]", answer: "新的答案", submitNum: 0,…}

const columns = [
  {
    title: "比赛号",
    dataIndex: "competitionId",
    align: "center",
    width: 100,
    sorter: true,
  },
  {
    title: "赛事名称",
    dataIndex: "competitionName",
    align: "center",
    width: 150,
    sorter: true,
  },
  {
    title: "简介",
    slotName: "competitionContext",
    align: "center",
    width: 200,
  },
  {
    title: "开始时间",
    slotName: "competitionStartTime",
    align: "center",
    width: 150,
    sorter: true,
  },
  {
    title: "结束时间",
    slotName: "createTime",
    align: "center",
    width: 150,
    sorter: true,
  },
  {
    title: "创建人",
    slotName: "tags",
    align: "center",
    width: 150,
  },
  {
    slotName: "optional",
    align: "center",
    width: 150,
  },
];

const onPageChange = (page: number) => {
  searchParams.value = {
    ...searchParams.value,
    current: page,
  };
};

const router = useRouter();

/**
 * 跳转到做题页面
 * @param question
 */
const toQuestionPage = (question:Competition) => {
  router.push({
    path: `/view/matchcontext/${question.competitionId}`,
  });
};

/**
 * 确认搜索，重新加载数据
 */
const doSubmit = () => {
  // 这里需要重置搜索页号
  searchParams.value = {
    ...searchParams.value,
    current: 1,
  };
};
</script>

<style scoped>
#questionsView {
  max-width: 1280px;
  margin: 0 auto;
}
</style>
