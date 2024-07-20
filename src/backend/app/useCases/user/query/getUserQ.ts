import {IUserRepository} from "@/backend/core/repository/IUserRepository";
import {IUser} from "@/backend/core/model/IUser";

export const getUserQ = async (
    repository: IUserRepository,
    id: any
): Promise<IUser | undefined> => {
    try {
        return await repository.findOne(id)
    }
    catch (e) {
        throw new Error(`${e}`)
    }
}