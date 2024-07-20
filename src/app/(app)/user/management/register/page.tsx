import {RegisterForm} from "@/app/(app)/user/components/forms/RegisterForm";

export default function RegisterPage() {

    return<div className='flex justify-center py-5 md:py-10'>
        <div className='basis-1/4'>
            <RegisterForm/>
        </div>
    </div>
}