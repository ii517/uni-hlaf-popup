import type { ExtractPropTypes } from 'vue'
import { makeNumberProp, makeNumericProp, truthProp } from '../../utils'

export const halfPopupProps = {
    /**
     * @description 控制弹框是否显示
     */
    modelValue: truthProp,
    /**
     * @description 弹框高度
     */
    height: makeNumericProp(0),
    /**
     * @description 弹框的内容的圆角
     */
    radius: makeNumericProp(0),
    /**
     * @description 弹框的内容的圆角
     */
    duration: makeNumberProp(200),
    /**
     * @description 点击overlay关闭弹框
     */
    overlayClose: truthProp,
    /**
     * @description 是否显示关闭按钮
     */
    closeBtn: truthProp,
    /**
     * @description 是否显示可以充满屏幕按钮
     */
    fullScreen: truthProp
}

export const halfPopupEmits = {
    'update:modelValue': (value: boolean) => value,
    'open': () => true,
    'close': () => true
}

export type HalfPopupProps = ExtractPropTypes<typeof halfPopupProps>
export type HalfPopupEmits =
    ((event: "update:modelValue", value: boolean) => void) &
    ((event: "open") => void) &
    ((event: "close") => void)