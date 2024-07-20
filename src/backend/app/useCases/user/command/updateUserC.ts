import {IUserRepository} from "@/backend/core/repository/IUserRepository";
import {IUser} from "@/backend/core/model/IUser";

export const updateUserC = async (
    repository: IUserRepository,
    id: any,
    data: IUser
)   :Promise<void> => {
    try {
        return await repository.update(id, data)
    }
    catch (e) {
        throw new Error(`${e}`);
    }
}

