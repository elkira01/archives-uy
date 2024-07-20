import React, {useEffect, useState} from "react";
import * as SC from './_styles';
import {NavigationSubMenu} from "@/app/(admin)/_components/layout/SideBar/components/NavigationSubMenu";
import {MenuItemType} from "@/app/(admin)/_config/navigation/menu";

export function SubMenuBar(props: { menuItems: MenuItemType[] }) {
    const [currentSubMenu, setCurrentSubMenu] = useState<MenuItemType[]>([])
    const [backBtn, setBackBtn] = useState<boolean>(false)

    useEffect(() => {
        setCurrentSubMenu(props.menuItems)
        setBackBtn(false)
    },[props.menuItems])
    const onClick = (menuItem: any) => {
        let array = props.menuItems?.find((item: any) => item.key === menuItem.key)?.children ?? []

        array.length > 0 &&
        (() => {
            setCurrentSubMenu(() => array)
            setBackBtn(true)
        })()
    }

    const handleBackBtn = () => {
        setBackBtn(false)
        setCurrentSubMenu(props.menuItems)
    }

    return <SC.Container>
        <NavigationSubMenu
            menuItems={currentSubMenu}
            onSelect={onClick}
            backBtn={backBtn}
            handleBackBtn={handleBackBtn}
        />
    </SC.Container>
}