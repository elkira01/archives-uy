import {Button} from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <>
        <main className="text-center">
            <p>APP SECTION</p>
            <div className='my-5'>
                <Link href='/user/management/register/'>
                    <Button className='bg-black'>Register page</Button>
                </Link>
            </div>
        </main>
    </>
  );
}
