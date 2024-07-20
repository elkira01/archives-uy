import {UserRole} from "@/backend/core/valueObject/UserRole";

export interface IUserDTO {
    id?: any
    name: string
    password: string
    role: UserRole
}