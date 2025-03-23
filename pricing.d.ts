/* This file was generated by Unframer, do not edit manually */
import * as React from "react"

import { UnframerBreakpoint } from "unframer"

type Locale = string
export interface Props {
    children?: React.ReactNode
    locale?: Locale
    style?: React.CSSProperties
    className?: string
    id?: string
    width?: any
    height?: any
    layoutId?: string
    "variant"?: 'monthly' | 'yearly' | 'mobile v1' | 'mobile v2'
}

const PricingFramerComponent = (props: Props) => any

type VariantsMap = Partial<Record<UnframerBreakpoint, Props['variant']>> & { base: Props['variant'] }

PricingFramerComponent.Responsive = (props: Omit<Props, 'variant'> & {variants?: VariantsMap}) => any

export default PricingFramerComponent

