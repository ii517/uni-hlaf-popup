import { ref, watch } from 'vue'
import type {HalfPopupEmits, HalfPopupProps} from '../half-popup'

export const usePopup = (props: HalfPopupProps, emits: HalfPopupEmits) => {
    // 是否显示弹框
    const showPopup = ref(false)
    const visiblePopup = ref(true)
    const wxsPropsType = ref<string>('')

    watch(
        () => props.modelValue,
        (value) => {
            console.log('showPopup', value)
            if (value) {
                showPopup.value = value
                setTimeout(() => {
                    visiblePopup.value = value
                    wxsPropsType.value = JSON.stringify(props)
                }, props.duration)
            } else {
                visiblePopup.value = value
                setTimeout(() => {
                    showPopup.value = value
                }, props.duration)
                wxsPropsType.value = JSON.stringify(props)
            }
        },
        { immediate: false }
    )

    // 点击关闭按钮
    const onClickClose = () => {
        if (!props.overlayClose) return
        emits('update:modelValue', false)
    }

    return {
        showPopup,
        visiblePopup,
        wxsPropsType,

        onClickClose
    }
}