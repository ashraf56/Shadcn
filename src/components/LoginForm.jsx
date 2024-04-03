'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";

const LoginForm = () => {
    const form = useForm()
    const onSubmit = (value) => {

        console.log(value)
        alert(value)
    }
    return (
        <div className="w-100 max-w-lg mx-auto my-5">
            <Card>
                <CardHeader>
                    <CardTitle>Log in Now</CardTitle>
                    <CardDescription>Log in to access your personalized experience</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem >
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="enter your email" type={'email'} {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem >
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input placeholder="password" type={'password'} {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div>
                                <FormDescription>
                                    <span>  Dont have any account <Link href={'/register'} className="font-bold text-black">Sign up now</Link>
                                    </span>
                                </FormDescription>

                            </div>
                            <Button type="submit" className='w-full'>Log in Now</Button>
                            <div className="text-center">
                                <FormDescription>
                                    <span className="text-black "> or log in with social </span>

                                </FormDescription>
                            </div>
                        </form>
                    </Form>
                    <div className="mt-5 justify-center mx-auto items-center text-center flex gap-2">
                        <Button type="submit" size={'icon'}  >G</Button>
                        <Button type="submit" size={'icon'}  >in</Button>
                        <Button type="submit" size={'icon'}>x</Button>
                    </div>
                </CardContent>

            </Card>

        </div>
    );
};

export default LoginForm;