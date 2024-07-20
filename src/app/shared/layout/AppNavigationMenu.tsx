"use client"

import * as React from "react"
import {NavigationMenu, NavigationMenuList} from "@/components/ui/navigation-menu"
import { NavItem, NavItemProps} from "@/app/shared/layout/NavItem";

const appMenu: NavItemProps[] = [
    {
        label: "Home",
        path: "/",
    },
    {
        label: "Quiz",
        path: "/quizz",
    },
    {
        label: "Admin",
        path: "/admin",
    }
]
export function AppNavigationMenu() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {appMenu.map((item) => {
                    return <NavItem key={item.label} {...item} />
                })}
            </NavigationMenuList>
        </NavigationMenu>
    )
}


