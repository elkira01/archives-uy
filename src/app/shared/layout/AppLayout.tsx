import Header from "@/app/shared/layout/Header";
import {type ReactNode} from "react";

export default function AppLayout({children}: {children: ReactNode}){

    return<div>
        <Header/>
        <main>
            {children}
        </main>
        <footer className='border-t-2 border-t-gray-300'>
            gg
        </footer>
    </div>
}