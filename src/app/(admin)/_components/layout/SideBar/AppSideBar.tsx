import * as SC from './_styles';
import {NavigationMenu} from "./components/NavigationMenu";
import { IconCircle } from "@/app/shared/components/icons/IconCircle";
import Image from "next/image";
import {logo} from "@/app/shared/assets";
import {AdminLogo} from "@/app/(admin)/_components/layout/SideBar/components/AdminLogo";

export const AppSideBar = ({ menuItems, handleMenu }: { menuItems: any[], handleMenu: Function }) => {

    return<SC.Container>
        <section className='px-[10px] md:px-[20px]'>
            <AdminLogo
                minimal={<Image src={logo} alt='Logo' width={100}/>}
                normal={
                <>
                    <IconCircle>
                        <Image src={logo} alt='' width={100}/>
                    </IconCircle>
                    <div className='font-bold sm:text-[1rem] lg:text-2xl xl:text-2xl text-center flex items-center mx-2'>
                        R-Encarta
                    </div>
                </>}
            />
            <div className='mt-10'>
                <NavigationMenu menuItems={menuItems} onSelect={handleMenu} displayTooltip/>
            </div>
        </section>
        <SC.Footer>
            F
        </SC.Footer>
    </SC.Container>
}