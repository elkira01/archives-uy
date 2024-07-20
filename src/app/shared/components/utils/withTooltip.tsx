import React from "react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

export const withTooltip  = ( component: React.ReactNode, content: any ) => {

    return <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
                {component}
            </TooltipTrigger>
            <TooltipContent>
                <p>{content}</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
}