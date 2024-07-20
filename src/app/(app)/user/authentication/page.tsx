import {LoginForm} from "@/app/(app)/user/components/forms/LoginForm";

export default function LoginPage() {

    return(
        <div className='flex justify-center py-5 md:py-10'>
            <div className='basis-1/4'>
                <LoginForm/>
            </div>
        </div>
    )
}