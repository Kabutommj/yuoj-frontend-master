<template>
  <div class="layout">
    <div class="side-panel"></div>
    <div class="main-panel">

      <a-form>
        <Divider>基本信息</Divider>
        <div style="background: rgb(251, 251, 251)" class="container">
          <a-upload
            action="/"
            :fileList="file ? [file] : []"
            :show-file-list="false"
            @change="onChange"
            @progress="onProgress"
            class="left-panel"
          >
            <template #upload-button>
              <div
                :class="`arco-upload-list-item${
            file && file.status === 'error' ? ' arco-upload-list-item-error' : ''
          }`"
              >
                <div
                  class="arco-upload-list-picture custom-upload-avatar"
                  v-if="file && file.url"
                >
                  <img :src="file.url" />
                  <div class="arco-upload-list-picture-mask">
                    <IconEdit />
                  </div>
                  <a-progress
                    v-if="file.status === 'uploading' && file.percent < 100"
                    :percent="file.percent"
                    type="circle"
                    size="mini"
                    :style="{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translateX(-50%) translateY(-50%)',
              }"
                  />
                </div>
                <div class="arco-upload-picture-card" v-else>
                  <div class="arco-upload-picture-card-text">
                    <IconPlus />
                    <div style="margin-top: 10px; font-weight: 600">Upload</div>
                  </div>
                </div>
              </div>
            </template>
          </a-upload>
<!--          <a-avatar :size="100" :src="formData.userAvatar" class="left-panel"/>-->
          <div class="right-panel">
            <a-form-item label="用户名">
              <a-input v-model="formData.userAccount" />
            </a-form-item>
            <a-form-item label="昵称">
              <a-input v-model="formData.userName" />
            </a-form-item>
          </div>
        </div>
        <Divider>简介</Divider>
        <div  class="container">
          <a-textarea :autoSize="{
              minRows: 17,
              maxRows: 17
          }" v-model="formData.userProfile" />
        </div>

        <a-button type="primary" @click="saveUserInfo">保存</a-button>

      </a-form>
    </div>
    <div class="side-panel"></div>
  </div>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import { IconEdit, IconPlus } from '@arco-design/web-vue/es/icon';
import { Form, FormItem, Input, Avatar, Button, InputPassword, Textarea, Divider } from '@arco-design/web-vue';
import {
  UserControllerService
} from "../../../generated";
import { onMounted } from "vue";
const file = ref();

const onChange = (_, currentFile) => {
  file.value = {
    ...currentFile,
  };
};
const onProgress = (currentFile) => {
  file.value = currentFile;
};

defineComponent({
  'a-form': Form,
  'a-form-item': FormItem,
  'a-input': Input,
  'a-avatar': Avatar,
  'a-button': Button,
  'a-input-password': InputPassword,
  'a-textarea': Textarea,
  Divider,
});

async function saveUserInfo() {
  await UserControllerService.updateMyUserUsingPost(formData.value);

}

const formData = ref({});
async function getFormData() {
  const res = await UserControllerService.getLoginUserUsingGet();
  formData.value = res.data;
  // file.value.state = true;
  // file.value.url = formData.value.userAvatar;
}

onMounted(() => {
  getFormData();
})
</script>
<style scoped>
.layout {
  display: flex;
  height: 100vh;
}

.side-panel {
  flex: 1;
  background-color: #f5f5f5;
}

.main-panel {
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}

.container {
  display: flex;
  border: 1px solid #ccc;
  padding: 10px;
}

.left-panel {
  width: 50px;
  margin: auto;
  box-sizing: border-box;
}

.right-panel {
  flex: 1;
  padding: 10px;
  box-sizing: border-box;
}

.arco-card {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

:deep(.arco-divider-text) {
  font-size: 20px;
}
</style>