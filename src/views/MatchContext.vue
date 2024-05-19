<template>
  <div class="layout-demo">
    <a-layout style="height: 400px">
      <a-layout-header>qit编程挑战赛</a-layout-header>
      <a-layout-content>
        比赛详细内容
        <br />
        1317杯
        <a-col :flex="1">
          <a-countdown
            title="Milliseconds"
            :value="now + 1000 * 60 * 60 * 2"
            :now="now"
            format="HH:mm:ss.SSS"
          />
        </a-col>
      </a-layout-content>
      <a-layout-footer>
        <a-button type="primary" v-if="!baomingRef.value" @click="baomingClick">
          报名
        </a-button>
        <a-button type="primary" v-if="baomingRef.value" disabled>
          已报名
        </a-button>
        <a-button type="primary" @click="toQuestionListPage()">
          查看题目列表
        </a-button>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, withDefaults } from "vue";
import message from "@arco-design/web-vue/es/message";
import { useRouter } from "vue-router";
interface Props {
  id: string;
}
const router = useRouter();
const props = withDefaults(defineProps<Props>(), {
  id: () => "",
});
console.log(props.id);
const now = Date.now();
const start = ref(true);

const handleFinish = () => {
  message.info("Finish");
};
const baomingRef = ref(true);
const baomingClick = () => {
  console.log("1111");
  baomingRef.value = !baomingRef.value;
  console.log(baomingRef.value);
};

const toQuestionListPage = () => {
  router.push({
    path: `/questionList/${props.id}`,
  });
};
</script>
<style scoped>
.layout-demo :deep(.arco-layout-header),
.layout-demo :deep(.arco-layout-footer),
.layout-demo :deep(.arco-layout-sider-children),
.layout-demo :deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #000000;
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
}

.layout-demo :deep(.arco-layout-header),
.layout-demo :deep(.arco-layout-footer) {
  height: 64px;
  background-color: #ffffff;
}

.layout-demo :deep(.arco-layout-sider) {
  width: 206px;
  background-color: #ffffff;
}

.layout-demo :deep(.arco-layout-content) {
  background-color: #ffffff;
}
</style>
