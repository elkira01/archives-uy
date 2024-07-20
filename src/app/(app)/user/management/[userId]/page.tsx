'use client'

import userController from "@/app/(app)/user/userController";
import {Input} from "@/components/ui/input";
import {useEffect} from "react";
import {useParams} from "next/navigation";

export default function UserDetailPage() {
    const {user, getUser} = userController()
    const params = useParams()

    useEffect(() => {
        getUser(params.userId)

        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[params])

    return<div>
        <Input value={user?.name}/>
        <Input value={user?.email ?? ''} type={"email"}/>
        <Input value={user?.role}/>
        <span>Date registered: {user?.createdAt.toDateString()}</span>
    </div>
}