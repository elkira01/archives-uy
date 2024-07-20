import {useContext} from "react";
import * as SC from '../_styles';
import {cn} from "@/lib/utils";
import {IconCircle} from "@/app/shared/components/icons/IconCircle";
import {withTooltip} from "@/app/shared/components/utils/withTooltip";
import {ToggleContext} from "@/app/(admin)/_components/layout/AdminDashboardLayout";
import {MenuItemType} from "@/app/(admin)/_config/navigation/menu";


export const NavigationMenu = ({ menuItems, onSelect, displayTooltip } : { menuItems: MenuItemType[], onSelect: Function, displayTooltip?: boolean}) => {
    const toggle = useContext(ToggleContext)

    return<SC.Menu>
        {menuItems?.length > 0 && menuItems.map((item) => {
            return displayTooltip ?
                withTooltip(
                    <SC.MenuItem href={item.path ?? ''} key={item.key} onClick={() => onSelect(item)}>
                        <IconCircle>
                            {item.icon}
                        </IconCircle>
                        <div className={cn("hidden md:block", {'md:hidden': toggle.toggledMainMenu})}>
                            <SC.MenuLabel >
                                {item.label}
                            </SC.MenuLabel>
                        </div>
                    </SC.MenuItem>,
                    item.label
                )
                :
                <SC.MenuItem  href={item.path ?? ''} key={item.key} onClick={() => onSelect(item.key)}>
                    <IconCircle>
                        {item.icon}
                    </IconCircle>
                    <div className={cn("hidden md:block", {'md:hidden': toggle.toggledMainMenu})}>
                        <SC.MenuLabel>
                            {item.label}
                        </SC.MenuLabel>
                    </div>
                </SC.MenuItem>})
        }
    </SC.Menu>
}

