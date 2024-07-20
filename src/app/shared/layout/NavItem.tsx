import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import * as React from "react";
import Link from "next/link";

type NavigationItemType = 'link' | 'dropdown'

export type NavItemProps = {
    label: string,
    content?: React.ReactNode,
    type?: NavigationItemType,
    path?: string
}
export function NavItem({content, label, type, path}: NavItemProps) {

    return<NavigationMenuItem>
        {type !== "dropdown" ?
            <Link href={path ?? '#'} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {label}
                </NavigationMenuLink>
            </Link>
            :
            <>
                <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                    {label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                    {content}
                </NavigationMenuContent>
            </>
        }
    </NavigationMenuItem>
}