'use client'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {AppIcon} from "@/app/shared/components/icons/AppIcon";
import {UserIcon} from "lucide-react";

export function Profile({user}: any) {

    return<>
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <AppIcon
                        onClick={() => console.log('ok')}
                        shape='circle' icon={<UserIcon/>}
                    />
                </TooltipTrigger>
                <TooltipContent>
                    <p className='italic'>{user?.name ?? 'No'}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

    </>
}