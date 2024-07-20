import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function NotFound(){

    return<main className='h-[100vh] justify-center flex items-center'>
        <div className='text-center'>
            <h1 className='text-5xl text-center'>404</h1>
            {/* <p className='my-5 text-xl text-blue-900 font-bold'>Sorry, the page you are looking for doesn't exist</p> */}
            <Link href='/'>
                <Button>
                    Home page
                </Button>
            </Link>
        </div>
    </main>
}