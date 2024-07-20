import {useCallback, useEffect, useState} from "react";

// interface QueryInterface {
//     query: string
//     page?: number
//     limit?: number
//     sortBy?: string
//     order?: 'asc'|'desc'
//     filters?: any[]
// }

export function useSearch(arg: any){
    const {searchAction,
        // queryParams,
        // trigger,
        widget
    } = arg
    const [value, setValue] = useState<string>('')

    const handleSearch = useCallback(async ()=> searchAction({query: value}),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [value])

    useEffect(() => {
        value.length > 0 && handleSearch()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[value])

    return{
        setValue,
        widgetSetup: {show: true, icon: widget?.icon, action: handleSearch },
    }
}