import {cn} from "@/lib/utils";
import {AppSideBar} from "@/app/(admin)/_components/layout/SideBar/AppSideBar";
import {menuList} from "@/app/(admin)/_config/navigation/menu";
import {SubMenuBar} from "@/app/(admin)/_components/layout/SideBar/SubMenuBar";
import React from "react";

export function MainMenuWrapper(props: { handleMenu: (key: any) => void, toggle: any }) {

    const classNames = { "md:basis-[5%]": props.toggle?.toggledMainMenu }

    return <aside id='main-menu-sidebar'  className={cn("basis-[7%] md:basis-[15%] bg-gray-200", classNames)}>
        <AppSideBar menuItems={menuList} handleMenu={props.handleMenu}/>
    </aside>;
}

export function SubMenuWrapper(props: { subMenu: any[], toggle: any }) {

    const classNames = { "md:basis-0": props.toggle?.toggledMainMenu || props.toggle?.toggledSubMenu }

    return <aside id='sub-menu-sidebar' className={cn("basis-0 md:basis-[10%] bg-gray-50", classNames)}>
        {props.subMenu.length > 0 && <SubMenuBar menuItems={props.subMenu}/>}
    </aside>;
}