import prismaClient from "@/lib/PrismaClient";
import {IUserRepository} from "@/backend/core/repository/IUserRepository";
import {IUser} from "@/backend/core/model/IUser";
import { SHA256 as sha256 } from "crypto-js";

export default class UserRepositoryImpl implements IUserRepository {
    create(data: IUser): Promise<any> {
        return prismaClient.user.create({
            data: {
                ...data,
                password: sha256(data.password).toString()
            }
        })
    }

    delete(id: any): Promise<any> {
        return prismaClient.user.delete({
            where: {
                id: id
            }
        })
    }

    findAll(query?: any): Promise<any[]> {
        let q = query.query ?? '';

        if (q.length > 0){

            return prismaClient.user.findMany({
                where:
                    {
                        OR: [
                            {
                                name: { contains: q }
                            },
                            {
                                email: { contains: q }
                            }
                        ]
                    }
            });
        }
        return prismaClient.user.findMany();
    }

    findOne(id: any): Promise<any | undefined> {
        return prismaClient.user.findUnique({
            where: {
                id: id
            }
        });
    }

    update(id: any, data: IUser): Promise<any> {
        return prismaClient.user.update({
            where: {id: id},
            data: {
                name: data.name,
                email: data.email,
                password:  data.password,
                role: data.role,
            }
        });
    }

}