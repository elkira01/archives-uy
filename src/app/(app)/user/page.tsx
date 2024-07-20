import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <Link href='/'>
            <Button className='bg-black'>Register page</Button>
        </Link>
    </main>
  );
}
