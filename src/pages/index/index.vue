<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <button class="title" @click="show = !show">{{ show }}</button>
    </view>

      <half-popup v-model="show" color="red" radius="20" @close="close">
          <scroll-view
              :scroll-y="true"
              style="height: 100%"
          >
              <view style="padding: 20rpx" v-for="item in 60">
                  你好呀 {{item }}
              </view>
          </scroll-view>
      </half-popup>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello1')
const show = ref(true)

const close = () => {
  console.log('关闭了')
}
</script>

<style>
page {
    background: #f5f5f5;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
