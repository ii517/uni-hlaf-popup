import type { ExtractPropTypes } from 'vue'
import { makeNumberProp, makeNumericProp, truthProp } from './utils'

export const halfPopupProps = () => ({
    modelValue: truthProp,
    height: makeNumericProp(0),
    radius: makeNumericProp(0),
    duration: makeNumberProp(200),
    fullScreen: truthProp,
    safeAreaInsetBottom: truthProp
})
export const halfPopupEmits = () => ({
    ['click']: null,
    ['close']: null
})

export type HalfPopupProps = ExtractPropTypes<typeof halfPopupProps>
export type HalfPopupEmits = typeof halfPopupEmits
