import { ref, type Ref, watch} from 'vue'
import type {HalfPopupEmits, HalfPopupProps} from '../half-popup'

export const usePopup = (props: HalfPopupProps, emits: HalfPopupEmits) => {
    // 是否显示弹框
    const visiblePopup: Ref<boolean> = ref(false)
    const wxsPropsType: Ref<string> = ref('')
    const isFullScreen: Ref<boolean> = ref(false)
    const popupHeight: Ref<string> = ref(<string>props.height)

    /**
     * @description 更新弹窗状态
     * @param value
     */
    const updateVisiblePopup = (value: boolean) => {
        // 关闭弹窗后回弹默认高度
        if (!value && isFullScreen.value) {
            onFullScreen()
        }
        visiblePopup.value = value
    }

    watch(
        () => props.modelValue,
        (value: boolean) => {
            wxsPropsType.value = JSON.stringify({
                duration: props.duration,
                modelValue: value
            })
            value ? emits('open') : emits('close')
            value ?
                updateVisiblePopup(value) :
                setTimeout(updateVisiblePopup, props.duration)
        },
        { immediate: true }
    )

    /**
     * @description 放大/回弹默认高度
     */
    const onFullScreen = () => {
        const systemInfo: UniApp.GetSystemInfoResult    = uni.getSystemInfoSync()

        if (isFullScreen.value) {
            // 目前是全屏状态，恢复到默认高度
            popupHeight.value = <string>props.height
        } else {
            // 目前不是全屏，设置高度以充满整个屏幕
            popupHeight.value = systemInfo.windowHeight + 'px'
        }
        // 切换全屏状态
        isFullScreen.value = !isFullScreen.value
    }

    /**
     * @description 更新弹窗状态
     * @param value
     */
    const updateModelValue = (value: boolean) => {
        emits('update:modelValue', value)
    }

    /**
     * @description 点击关闭按钮
     */
    const onClickClose = () => {
        updateModelValue(false)
    }

    /**
     * @description 点击遮罩关闭弹窗
     */
    const onOverlayClose = () => {
        if (!props.closeOnOverlay) {
            return
        }
        updateModelValue(false)
    }

    return {
        visiblePopup,
        wxsPropsType,
        isFullScreen,
        popupHeight,

        onFullScreen,
        onClickClose,
        onOverlayClose
    }
}