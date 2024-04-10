import { ref, watch } from 'vue'
import type {HalfPopupEmits, HalfPopupProps} from '../half-popup'

export const usePopup = (props: HalfPopupProps, emits: HalfPopupEmits) => {
    // 是否显示弹框
    const visiblePopup = ref<boolean>(false)
    const wxsPropsType = ref<string>('')
    const isFullScreen = ref<boolean>(false)
    const popupHeight = ref<string>(<string>props.height)
    const systemInfo = uni.getSystemInfoSync()

    watch(
        () => props.modelValue,
        (value) => {
            wxsPropsType.value = JSON.stringify({
                duration: props.duration,
                modelValue: value,
            })
            value ?
                updateVisiblePopup(value) :
                setTimeout(updateVisiblePopup, props.duration)
        },
        { immediate: false }
    )

    // 更新弹窗状态
    const updateVisiblePopup = (value: boolean) => {
        visiblePopup.value = value
    }

    // 放大/回弹默认高度
    const onFullScreen = () => {
        if (isFullScreen.value) {
            // 目前是全屏状态，恢复到默认高度
            popupHeight.value = <string>props.height
        } else {
            // 目前不是全屏，设置高度以充满整个屏幕
            popupHeight.value = systemInfo.windowHeight + 'px'
            console.log(systemInfo)
        }
        // 切换全屏状态
        isFullScreen.value = !isFullScreen.value
    }

    // 点击关闭按钮
    const onClickClose = () => {
        if (!props.overlayClose) {
            return;
        }
        emits('update:modelValue', false)
    }

    return {
        visiblePopup,
        wxsPropsType,
        isFullScreen,
        popupHeight,

        onFullScreen,
        onClickClose
    }
}