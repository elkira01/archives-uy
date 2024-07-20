'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {z} from 'zod';
import userController from "@/app/(app)/user/userController";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {UserRole} from "@/backend/core/valueObject/UserRole";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "@/components/ui/form";


export const RegisterForm = () => {
    const {onRegister} = userController()

    const schema =
        z.object({
            name: z.string(),
            email: z.string().email(),
            password: z.string().min(8).max(20),
            // passwordConfirmation: z.string().min(8).max(20),
            role: z.enum([UserRole.ADMIN, UserRole.PLAYER]),
        })

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            role: UserRole.ADMIN,
            // passwordConfirmation: '',
            password: '',
            email: '',
            name: '',
        }
    })

    const onSubmit = (data: any) => onRegister(data);

    return <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
                control={form.control}
                name="name"
                render={({field}) => (
                    <FormItem>
                        <FormControl>
                            <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="email"
                render={({field}) => (
                    <FormItem>
                        <FormControl>
                            <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="password"
                render={({field}) => (
                    <FormItem>
                        <FormControl>
                            <Input type='password' placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />
            {/*<FormField*/}
            {/*    control={form.control}*/}
            {/*    name="passwordConfirmation"*/}
            {/*    render={({ field }) => (*/}
            {/*        <FormItem>*/}
            {/*            <FormLabel>Confirmer mot de passe</FormLabel>*/}
            {/*            <FormControl>*/}
            {/*                <Input placeholder="shadcn" {...field} />*/}
            {/*            </FormControl>*/}
            {/*            <FormMessage />*/}
            {/*        </FormItem>*/}
            {/*    )}*/}
            {/*/>*/}
            <FormField
                control={form.control}
                name="role"
                render={({field}) => (
                    <FormItem>
                        <FormControl>
                            <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />
            <Button className="my-5 w-full bg-black">Submit</Button>
        </form>
    </Form>
}