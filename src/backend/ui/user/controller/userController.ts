"use server"

import {IUserRepository} from "@/backend/core/repository/IUserRepository";
import {IUserDTO} from "@/backend/ui/user/dto/UserDTO";
import UserRepositoryImpl from "@/backend/infra/persistence/user/UserRepositoryImpl";
import {getUserQ} from "@/backend/app/useCases/user/query/getUserQ";
import {updateUserC} from "@/backend/app/useCases/user/command/updateUserC";
import {deleteUserC} from "@/backend/app/useCases/user/command/deleteUserC";
import {registerUserC} from "@/backend/app/useCases/user/command/registerUserC";
import {userCollection} from "@/backend/app/useCases/user/query/userCollection";

let repository : IUserRepository = new UserRepositoryImpl()

export async function createUser(
    data: IUserDTO
) {
   return registerUserC(repository, data)
}

export async function updateUser(
    userId: any,
    data: IUserDTO
) {
   return updateUserC(repository,userId, data)
}

export async function deleteUser(
    userId: any
) {
   return deleteUserC(repository, userId)
}

export async function fetchAllUser(q?: any)
{
    return await userCollection(repository, q);
}

export async function fetchUser(id: any){
    return await getUserQ(repository,id)
}

