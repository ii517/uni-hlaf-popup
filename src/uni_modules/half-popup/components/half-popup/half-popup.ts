import type { ExtractPropTypes } from 'vue'
import { makeNumberProp, makeNumericProp, truthProp } from '../../utils'

export const halfPopupProps = {
    /**
     * @description 控制弹框是否显示
     * @type { Boolean }
     */
    modelValue: truthProp,
    /**
     * @description 弹框高度
     * @type { Number }
     */
    height: makeNumericProp(980),
    /**
     * @description 弹框的内容的圆角
     * @type { Number }
     */
    radius: makeNumericProp(20),
    /**
     * @description 弹框的内容的圆角
     * @type { Number }
     */
    duration: makeNumberProp(200),
    /**
     * @description 点击overlay关闭弹框
     * @type { Boolean }
     */
    closeOnOverlay: truthProp,
    /**
     * @description 是否显示关闭按钮
     * @type { Boolean }
     */
    closeBtn: truthProp,
    /**
     * @description 是否显示可以充满屏幕按钮
     * @type { Boolean }
     */
    fullScreen: truthProp,
    /**
     * @description 层级
     * @type { Boolean }
     */
    zIndex: makeNumberProp(9999)
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