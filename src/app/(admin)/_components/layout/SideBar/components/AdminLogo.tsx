import {useContext} from "react";
import {ToggleContext} from "@/app/(admin)/_components/layout/AdminDashboardLayout";
import * as SC from "@/app/(admin)/_components/layout/SideBar/_styles";
import {cn} from "@/lib/utils";
import {IconCircle} from "@/app/shared/components/icons/IconCircle";
import Link from "next/link";
import {adminRoutes} from "@/app/(admin)/_config/navigation/routes";

export const AdminLogo = ({ normal, minimal }: { normal: any, minimal: any }) => {
    const toggle = useContext(ToggleContext)

    return<SC.LogoContainer>
        <Link href={adminRoutes.HOME}>
            <div className={cn('block md:hidden', {'md:block': toggle?.toggledMainMenu})}>
                <IconCircle>
                    {minimal}
                </IconCircle>
            </div>
            <div className={cn('hidden md:flex text-center px-2', {'md:hidden': toggle?.toggledMainMenu})}>
                {normal}
            </div>
        </Link>
    </SC.LogoContainer>
}