'use client'

import {AppNavigationMenu} from "@/app/shared/layout/AppNavigationMenu";
import {Profile} from "@/app/shared/layout/Profile";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import authController from "@/app/(app)/user/authentication/useAuthController";

export default function Header(){
    const {onLogout} = authController()

    return<header className="my-2 flex justify-center items-center py-3 border-b-[1px] border-b-gray-300">
        <div className='basis-1/3 text-center'>
            <span className="text-4xl font-bold text-red-600">? ? ?</span>
        </div>
        <nav  className='basis-1/3 border-[1.5px] border-gray-300 rounded-[50px] flex justify-center'>
            <AppNavigationMenu/>
        </nav>
        <div className='basis-1/3 flex justify-center'>
            <div className='mx-2 flex items-center'>
                <Profile/>
            </div>
            <div  className='mx-2 flex items-center'>
                <Link href='/'>
                    <Button className='bg-black'>Login page</Button>
                </Link>
            </div>
            <div className='mx-2 flex items-center'>
                <Button className='bg-white text-gray-600 hover:bg-white hover:text-gray-400' onClick={onLogout}>
                    Logout
                </Button>
            </div>
        </div>
    </header>
}