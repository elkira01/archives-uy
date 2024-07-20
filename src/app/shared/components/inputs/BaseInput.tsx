import {InputProps} from "@/components/ui/input";
import {InputWrapper} from "@/app/shared/components/inputs/_styles";

interface CustomStylesInputProps {
    $rounded?: 'light'|'medium'|'high'
    $width?: any
    $borderRadius?: string
}

interface BaseInputProps extends InputProps, CustomStylesInputProps {}
 
export default function BaseInput(props: BaseInputProps){

    return <InputWrapper {...props}/>
}