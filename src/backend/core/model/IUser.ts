import {UserRole} from "@/backend/core/valueObject/UserRole";

export interface IUser {
    id?: any
    name: string
    email?: string
    password: string
    role?: UserRole
    createdAt?: any
    updatedAt?: any
}

// interface IUserForSelect {
//     id: any
//     name: any
//     email?: any
// }

export interface IUserAuth {
    id?: any
    name?: string
    email?: string
    password: string
}