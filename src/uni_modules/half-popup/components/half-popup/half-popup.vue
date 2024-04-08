<!-- #ifdef APP-VUE || MP-WEIXIN || MP-QQ || H5 -->
<script src="./use-touch.wxs" module="wxs" lang="wxs"></script>
<!-- #endif -->
<script setup lang="ts">
import { halfPopupEmits, halfPopupProps } from './half-popup'
import { usePopup } from './composables/use-popup'

const props = defineProps(halfPopupProps);
const emits = defineEmits(halfPopupEmits);

const {
    showPopup,
    visiblePopup,
    wxsPropsType,
    onClickClose
} = usePopup(props, emits)


defineExpose({ onClickClose })
</script>



<template>
    <view
        class="half-popup"
        v-if="showPopup"
        ref="halfPopupRef"
        @tap.stop="onClickClose"
    >
        <!-- 弹出内容 -->
        <view
            :class="['half-popup__container']"
            :change:prop="wxs.observePropChanges"
            :prop="wxsPropsType"
            :data-popup="showPopup"
            @tap.stop
            @onClickClose="onClickClose"
            @touchstart="wxs.handleTouchstart"
            @touchmove="wxs.handleTouchmove"
            @touchend="wxs.handleTouchend"
            @touchcancel="wxs.handleTouchend"
        >
            <view>
                {{ visiblePopup }}
            </view>
            <slot></slot>

            <!-- 关闭按钮 -->
            <view
                v-if="closeBtn"
                class="close-btn"
                @tap.stop="onClickClose"
            >
                <text class="close-btn__icon" />
            </view>
        </view>
    </view>
</template>

<style lang="scss">
@import 'half-popup.scss';
</style>