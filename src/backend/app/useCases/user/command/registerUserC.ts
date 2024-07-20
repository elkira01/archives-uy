import {IUserRepository} from "@/backend/core/repository/IUserRepository";
import {IUser} from "@/backend/core/model/IUser";

export const registerUserC = async (
    repository: IUserRepository,
    data: IUser
): Promise<any> => {
    try {
        return await repository.create(data)
    }
    catch (e) {
       throw new Error(`${e}`);
    }
}