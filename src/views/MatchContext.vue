<template>
  <div class="layout-demo">
    <a-layout style="height: 400px">
      <a-layout-header>{{ data.competitionName }}</a-layout-header>
      <a-layout-content>
        <div>
          比赛名称: {{ data.competitionName }}
          <br />
          比赛开始时间: {{ formatDate(data.competitionStartTime) }}
          <br />
          比赛时长: {{ data.competitionDuration }} 分钟
          <br />
          详细介绍: {{ data.competitionContext }}
        </div>
        <a-col :flex="1">
          <a-countdown
              title="倒计时至比赛开始"
              :value="countdownValue"
              :now="now"
              format="HH:mm:ss.SSS"
          />
        </a-col>
      </a-layout-content>
      <a-layout-footer>
        <a-button type="primary" v-if="!baomingRef.value" @click="baomingClick">
          报名
        </a-button>
        <a-button type="primary" v-else disabled>
          已报名
        </a-button>
        <a-button type="primary" @click="toQuestionListPage">
          查看题目列表
        </a-button>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, onMounted, ref, withDefaults } from "vue";
import message from "@arco-design/web-vue/es/message";
import { useRouter } from "vue-router";
import { CompetitionControllerService, CompetitionUserControllerService } from "../../generated";
import moment from "moment";

interface Props {
  id: string;
}
const router = useRouter();
const props = withDefaults(defineProps<Props>(), {
  id: () => "",
});
const data = ref<any>({});
const now = Date.now();
const baomingRef = ref(false);

const loadData = async () => {
  const res = await CompetitionControllerService.getCompetitionDetailUsingGet(Number(props.id));
  if (res.code === 0) {
    data.value = res.data;
  } else {
    message.error(res.message);
  }
  await checkBaoMing();
};

onMounted(() => {
  loadData();
});

// Helper to format date
const formatDate = (date: string) => {
  return moment(date).format("YYYY-MM-DD HH:mm:ss");
};

const baomingClick = async () => {
  const res = await CompetitionUserControllerService.addCompetitionUserUsingPost(props.id);
  if (res.code === 0) {
    message.success("报名成功！");
    baomingRef.value = true;
  } else {
    message.error(res.message);
  }
};

const checkBaoMing = async () => {
  const res = await CompetitionUserControllerService.isBaoMingUsingGet(props.id);
  if (res.code === 0) {
    baomingRef.value = res.data;
  } else {
    message.error(res.message);
  }
};

// Calculate countdown value
const countdownValue = computed(() => {
  return new Date(data.value.competitionStartTime).getTime();
});

const toQuestionListPage = () => {
  router.push({
    path: `/questionList/${props.id}`,
  });
};
</script>

<style scoped>
.layout-demo {
  max-width: 1280px;
  margin: 20px auto;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
  border-radius: 8px;
  overflow: hidden;
}

.layout-demo :deep(.arco-layout-header),
.layout-demo :deep(.arco-layout-footer),
.layout-demo :deep(.arco-layout-sider-children),
.layout-demo :deep(.arco-layout-content) {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4a4a4a;
  font-size: 16px;
  text-align: center;
}

.layout-demo :deep(.arco-layout-header) {
  height: 64px;
  background-color: #0056b3;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
}

.layout-demo :deep(.arco-layout-footer) {
  height: 64px;
  background-color: #f0f0f0;
  border-top: 1px solid #e8e8e8;
}

.layout-demo :deep(.arco-layout-content) {
  padding: 20px;
  background-color: #ffffff;
}

.layout-demo :deep(.arco-button) {
  margin: 10px;
}

.layout-demo :deep(.arco-countdown) {
  margin-top: 20px;
}
</style>
