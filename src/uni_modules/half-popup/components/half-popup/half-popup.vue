<!-- #ifdef APP-VUE || MP-WEIXIN || MP-QQ || H5 -->
<script src="./use-touch.wxs" module="touchWxs" lang="wxs"></script>
<!-- #endif -->
<script setup lang="ts">
import { computed, ref } from 'vue'
import type { CSSProperties } from 'vue'
import { halfPopupProps, halfPopupEmits } from './half-popup'

const props = defineProps(halfPopupProps());
const emits = defineEmits(halfPopupEmits());

console.log(props)

const hello = ref('Hello world!')
</script>

<template>
    <view
        class="half-popup-container"
        @touchstart="touchWxs.touchstart"
        @touchmove="touchWxs.touchmove"
        @touchend="touchWxs.touchend"
        @touchcancel="touchWxs.touchend"
    >
        {{ hello }}
    </view>
</template>