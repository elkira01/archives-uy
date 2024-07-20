import {IUserRepository} from "@/backend/core/repository/IUserRepository";

export const deleteUserC = async (
    repository: IUserRepository,
    id: any
): Promise<any> => {
    try {
        return await repository.delete(id)
    }
    catch (e) {
       throw new Error(`${e}`);
    }
}