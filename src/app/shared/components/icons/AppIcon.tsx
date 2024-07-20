'use client'

import {IconCircle} from "@/app/shared/components/icons/IconCircle";

export type IconProps = {
    $size?: number
    $border?: string
    $bgColor?: string
}

interface AppIconProps extends IconProps {
    icon?: any
    img?: any
    shape?: 'circle'|'squared'
    onClick?: any
    theme?: any
}

export const AppIcon = ({icon, shape, onClick, img, ...props}: AppIconProps) => {

    return<>
        {shape !== "circle" ?
            <span onClick={onClick ? onClick : () => {}}>
                {icon}
            </span>
            :
            <IconCircle onClick={onClick ? onClick : () => {}} {...props}>
                {img ?? icon}
            </IconCircle>
        }
    </>
}