<template>
  <div id="questionsView">
    <a-form :model="searchParams" layout="inline">
      <!--      <a-form-item field="title" label="名称" style="min-width: 240px">-->
      <!--        <a-input v-model="searchParams.title" placeholder="请输入名称" />-->
      <!--      </a-form-item>-->
      <!--      <a-form-item field="tags" label="标签" style="min-width: 240px">-->
      <!--        <a-input-tag v-model="searchParams.tags" placeholder="请输入标签" />-->
      <!--      </a-form-item>-->
      <a-form-item>
        <!--        <a-button type="primary" @click="doSubmit">提交</a-button>-->
        <a-button type="primary" @click="paihangbang">查看排行榜</a-button>
        <a-button type="primary" @click="tijiaojilu">查看提交记录</a-button>
      </a-form-item>
    </a-form>
    <a-divider size="0" />
    <a-table
      :ref="tableRef"
      :columns="columns"
      :data="dataList"
      :pagination="{
        showTotal: true,
        pageSize: searchParams.pageSize,
        current: searchParams.current,
        total,
      }"
      @page-change="onPageChange"
    >
      <template #tags="{ record }">
        <a-space wrap>
          <a-tag v-for="(tag, index) of record.tags" :key="index" color="green"
            >{{ tag }}
          </a-tag>
        </a-space>
      </template>
      <template #acceptedRate="{ record }">
        {{
          `${
            record.submitNum ? record.acceptedNum / record.submitNum : "0"
          }% (${record.acceptedNum}/${record.submitNum})`
        }}
      </template>
      <template #createTime="{ record }">
        {{ moment(record.createTime).format("YYYY-MM-DD") }}
      </template>
      <template #optional="{ record }">
        <a-space>
          <a-button type="primary" @click="toQuestionPage(record)">
            查看题目
          </a-button>
        </a-space>
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue";
import { defineProps, withDefaults } from "vue";
import {
  CompetitionControllerService, CompetitionQuestionControllerService,
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

interface Props {
  id: string;
}
const props = withDefaults(defineProps<Props>(), {
  id: () => "",
});
const searchParams = ref<QuestionQueryRequest>({
  title: "",
  tags: [],
  pageSize: 8,
  current: 1,
});

const loadData = async () => {
  const res = await CompetitionQuestionControllerService.queryCompetitionQuestionUsingGet(
    props.id
  );
  if (res.code === 0) {
    dataList.value = res.data;
  } else {
    message.error("加载失败，" + res.message);
  }
};
const paihangbang = () => {
  console.log(`/rank/${props.id}`);
  router.push({
    path: `/rank/${props.id}`,
  });
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
    title: "题目编号",
    dataIndex: "id",
  },
  {
    title: "题目名称",
    dataIndex: "title",
  },
  {
    title: "通过率",
    slotName: "tags",
  },
  {
    slotName: "optional",
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
const toQuestionPage = (question: Question) => {
  router.push({
    path: `/view/question/${question.id}/${props.id}`,
  });
};

const tijiaojilu = () => {
  router.push({
    path: `/question_submit/${props.id}`,
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
