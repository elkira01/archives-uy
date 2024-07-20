import {useState} from "react";
import {User} from ".prisma/client";
import {useRouter} from "next/navigation";
import {createUser, fetchAllUser, fetchUser} from "@/backend/ui/user/controller/userController";

const UserController = () => {
    const [user, setUser] = useState<User|undefined>()
    const [userList, setUserList] = useState<User[]>([])
    const router = useRouter();
    const onRegister = async (data: any) => {
       let response: any

        try {
            response = await createUser(data)
            setUser(response)
        }
        catch (e: any) {
            console.log(e.message)
        }
    }

    const list = async () => {
        let response: any

        try {
            response = await fetchAllUser()
            setUserList(response)
        }
        catch (e: any) {
            console.log(e.message)
        }
    }

    const onSelect = (value: any) => router.push(`/page/user/management/${value.id}/`)
    const getUser = async (userId: any) => {
        let response: any

        try {
            response = await fetchUser(userId)
            setUser(response)
        }
        catch (e: any) {
            console.log(e.message)
        }
    }


    return {
        user,
        users: userList,
        list,
        onRegister,
        onSelect,
        getUser,
    }
}
export default UserController;