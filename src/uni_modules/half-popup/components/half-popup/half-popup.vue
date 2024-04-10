<!-- #ifdef APP-VUE || MP-WEIXIN || MP-QQ || H5 -->
<script src="./use-touch.wxs" module="wxs" lang="wxs"></script>
<!-- #endif -->
<script setup lang="ts">
import { halfPopupEmits, halfPopupProps } from './half-popup'
import { convertUnit } from '../../utils'
import { usePopup } from './composables/use-popup'

const props = defineProps(halfPopupProps);
const emits = defineEmits(halfPopupEmits);

const {
    visiblePopup,
    wxsPropsType,
    isFullScreen,
    popupHeight,
    onClickClose,
    onFullScreen
} = usePopup(props, emits)

defineExpose({ onClickClose })
</script>

<template>
    <view
        v-if="visiblePopup"
        class="half-popup"
        @tap.stop="onClickClose"
    >
        <!-- 弹出内容 -->
        <view
            :class="['half-popup__container']"
            :style="{
                '--height': `${convertUnit(popupHeight)}`,
                '--radius': `${convertUnit(radius)}`
            }"
            :change:prop="wxs.observePropChanges"
            :prop="wxsPropsType"
            @tap.stop
            @touchstart="wxs.handleTouchstart"
            <!-- #ifdef MP-WEIXIN -->
            :catchtouchmove="wxs.handleTouchmove"
            <!-- #endif -->
            <!-- #ifndef MP-WEIXIN -->
            @touchmove="wxs.handleTouchmove"
            @onClickClose="onClickClose"
            <!-- #endif -->
            @touchend="wxs.handleTouchend"
            @touchcancel="wxs.handleTouchend"
        >
            <slot></slot>

            <!-- 放大-充满屏幕 -->
            <view
                v-if="fullScreen"
                class="btn fullscreen-btn"
                @tap.stop="onFullScreen"
            >
                <text :class="isFullScreen ? 'fullscreen-icon2' : 'fullscreen-icon1'" />
            </view>
            <!-- 关闭按钮 -->
            <view
                v-if="closeBtn"
                class="btn close-btn"
                @tap.stop="onClickClose"
            >
                <text class="close-icon" />
            </view>
        </view>
    </view>
</template>

<style lang="scss">
@import 'half-popup.scss';
</style>