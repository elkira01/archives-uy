'use server'

import {IUserRepository} from "@/backend/core/repository/IUserRepository";
import UserRepositoryImpl from "@/backend/infra/persistence/user/UserRepositoryImpl";
import {IUserAuth} from "@/backend/core/model/IUser";
import { SHA256 as sha256 } from "crypto-js";
import {Prisma} from "@prisma/client";
import {sign} from "jsonwebtoken";
import {RequestStatus} from "@/backend/core/Request";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";

let repository : IUserRepository = new UserRepositoryImpl()

export const authenticate = async (credentials: IUserAuth) =>  {
    let response: any = null

    try {
        response =  await repository.findOne(credentials.name)

        if (response) {
            if (response.password ===  sha256(credentials.password).toString()) {
                const secret = process.env.JWT_SECRET || "";
                const validity = process.env.COOKIE_VALIDITY

                const jwtToken = sign(
                    { email: response.email, name: response.name },
                    secret,
                    { expiresIn: Number(validity)  }
                );

                cookies().set('authToken', jwtToken,{
                    maxAge: Number(validity),
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: 'strict',
                    path: '/'
                })

                return {
                    status: RequestStatus.AUTHENTICATED,
                    data: response
                }
            }

            else {
                return {
                    message: 'Invalid credentials provided',
                    status: RequestStatus.UNAUTHORIZED
                }
            }
        }
    }
    catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError ){
            switch (e.code) {
                case 'P2007':
                    return { error: 'User not found', status: RequestStatus.NOT_FOUND}

                default:
                    return { error: e.message}
            }
        }

        else throw new Error(`${e}`)
    }
}

export const logout = async (redirectRoute: any) => {
  cookies().delete('authToken');
  redirect(redirectRoute);
}