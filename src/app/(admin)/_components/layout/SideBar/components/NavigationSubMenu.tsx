import * as SC from "../_styles";
import {cn} from "@/lib/utils";
import {useContext} from "react";
import {ToggleContext} from "@/app/(admin)/_components/layout/AdminDashboardLayout";
import {MenuItemType} from "@/app/(admin)/_config/navigation/menu";
import { Undo2} from "lucide-react";

interface NavigationProps {
    menuItems: MenuItemType[],
    onSelect: Function
    backBtn: boolean
    handleBackBtn: any
}
export const NavigationSubMenu = ({menuItems, onSelect, ...props}: NavigationProps) => {
    const toggle = useContext(ToggleContext)


    return <>
        {!toggle.toggledSubMenu ?
            <SC.SubMenu>
                {props.backBtn &&
                    <div className='hidden md:flex md:justify-end cursor-pointer'>
                        <Undo2 size={20} onClick={props.handleBackBtn}/>
                    </div>
                }
                {menuItems?.length > 0 && menuItems.map((item) =>
                    <SC.MenuItem
                        href={item.path ?? ''}
                        key={item.key}
                        onClick={() => onSelect(item)}
                    >
                        {item.icon}
                        <div className={cn("hidden md:block")}>
                            <SC.MenuLabel>
                                {item.label}
                            </SC.MenuLabel>
                        </div>
                    </SC.MenuItem>
                )}
            </SC.SubMenu>
            :
            <></>
        }
    </>
}