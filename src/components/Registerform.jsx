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

const Registerform = () => {
  const form = useForm()
  const onSubmit = (value) => {

    console.log(value)
    alert(value)
  }
  return (
    <div className="w-100 max-w-xl mx-auto my-5">
      <Card>
        <CardHeader>
          <CardTitle>Register Now</CardTitle>
          <CardDescription>sign up to join our vibrant community</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div>


                <FormField
                  control={form.control}
                  name="username"

                  render={({ field }) => (
                    <FormItem className='mb-2'>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className='my-2'>
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
                  name="contact"
                  render={({ field }) => (
                    <FormItem className=''>
                      <FormLabel>Contact</FormLabel>
                      <FormControl>
                        <Input placeholder="Contact" type={'number'} {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className=" sm:flex  gap-5 ">


                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className='sm:w-[50%]'>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input placeholder="password" type={'password'} {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cpassword"
                  render={({ field }) => (
                    <FormItem className='sm:w-[50%] mt-2 sm:mt-0'>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input placeholder="confirm password" type={'password'} {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormDescription>
                  <span>Already have any account <Link href={'/login'} className="font-bold text-black">Log in now</Link>
                  </span>
                </FormDescription>

              </div>
              <Button type="submit" className='w-full'>Sign up</Button>
              <div className="text-center">
                <FormDescription>
                  <span className=" text-black"> Or log in with social </span>

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

export default Registerform;