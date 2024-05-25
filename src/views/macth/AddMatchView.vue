<template>
  <div id="addQuestionView">
    <h2>创建比赛</h2>
    <a-form :model="form" label-align="left">
      <a-form-item label="赛事名称">
        <a-input v-model="form.competitionName" placeholder="请输入赛事名称" />
      </a-form-item>
      <a-form-item label="赛事介绍">
        <a-input v-model="form.competitionContext" placeholder="请输入赛事介绍" type="textarea" />
      </a-form-item>
      <a-form-item label="开始时间">
        <a-date-picker
            style="width: 220px"
            v-model="form.competitionStartTime"
            show-time
            format="YYYY-MM-DD HH:mm:ss"
        />
      </a-form-item>
      <a-form-item label="比赛时长 (分钟)">
        <a-input-number v-model="form.competitionDuration" min="1" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" style="min-width: 200px" @click="doSubmit">
          提交
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>


<script setup lang="ts">
import { defineProps, ref, onMounted } from "vue";
import message from "@arco-design/web-vue/es/message";
import { useRouter, useRoute } from "vue-router";
import {CompetitionControllerService, QuestionControllerService} from "../../../generated";

const route = useRoute();
const router = useRouter();
const form = ref({
  competitionName: "",
  competitionContext: "",
  competitionStartTime: null,
  competitionDuration: 1
});

onMounted(() => {
  // 如果是更新页面，则加载现有数据
  if (route.path.includes("update") && route.query.id) {
    loadData(route.query.id);
  }
});

const loadData = async (id) => {
  const res = await CompetitionControllerService.getCompetitionDetailUsingGet(id);
  if (res.code === 0 && res.data) {
    form.value = {...res.data};
  } else {
    message.error("加载失败：" + res.message);
  }
};

const doSubmit = async () => {
  let res;
  if (route.path.includes("update")) {
    res = await CompetitionControllerService.updateCompetitionUsingPost(form.value);
  } else {
    res = await CompetitionControllerService.createCompetitionUsingPost(form.value);
  }
  if (res.code === 0) {
    message.success(route.path.includes("update") ? "更新成功" : "创建成功");
    // router.push("/wherever-you-need");
  } else {
    message.error("操作失败：" + res.message);
  }
};
</script>


<style scoped>
#addQuestionView {
}
</style>
