import {useSearch} from "./controller";
import {cn} from "@/lib/utils";
import BaseInput from "../BaseInput";
import {Search} from "lucide-react";
import {EventHandler} from "react";

type TriggerType  = 'keypress'|'async'|'widget'

interface SearchInputProps {
    placeholder?: string
    searchAction: Function
    queryParams?: any
    trigger?: TriggerType
    widget?: {
        icon: any
    }
}

function appendWidget({show, icon, action}: {show : boolean, icon?: any, action?: EventHandler<any>}){

    return(
        <button
            className={
            cn('basis-[15%] hidden border-l-[1px] border-l-black bg-black rounded-e-[20px] hover:opacity-85',
            { 'flex justify-center items-center': show })}
            onClick={action}
        >
            {icon ?? <Search size={20} color='#ffffff'/>}
        </button>
    )
}

const SearchInput = (props: SearchInputProps) => {
    const {widgetSetup, setValue} = useSearch(props)

    return<div className='flex w-full'>
        <div className={cn('basis-full', { 'basis-[85%]': widgetSetup.show })}>
            <BaseInput className='border-[1px] border-black font-light'
                $borderRadius='20px 0 0 20px'
                $rounded={!widgetSetup.show ? 'high': undefined}
                onChange={(e) => setValue(()=> e.target.value.length < 1 ? "-" : e.target.value )}
                placeholder={props.placeholder}
            />
        </div>
        {appendWidget({...widgetSetup})}
    </div>
}

export default SearchInput;