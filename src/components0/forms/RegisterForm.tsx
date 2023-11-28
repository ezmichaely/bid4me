'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { BsBoxArrowRight } from 'react-icons/bs'
import Link from "next/link"


const FormSchema = z
  .object({
    clan: z.string()
      .min(2, { message: "Family must be at least 2 characters." }),
    first: z.string()
      .min(2, { message: "First name must be at least 2 characters." }),
    middle: z.string(),
    last: z.string()
      .min(2, { message: "Last name must be at least 2 characters." }),
    suffix: z.string(),
    email: z.string().email({ message: 'Invalid Email.' }),
    username: z.string()
      .min(4, { message: "Username must be at least 4 characters." }),
    password: z.string()
      .min(6, { message: "Password must be at least 6 characters." })
      .max(12),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"], // path of error
  });

export default function RegisterForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      clan: "",
      first: "",
      middle: "",
      last: "",
      suffix: "",
      email: "",
      username: "",
      password: "",
      confirm: "",
    },
  })

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-3">

        {/* clan name */}
        <FormField
          control={form.control}
          name="clan"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-secondary-dark">
                CLAN / FAMILY NAME
                <span className="ml-1 text-red-500 font-bold">*</span>
              </FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter the Clan Name" {...field}
                  className="text-base"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {/* first name && middle name */}
        <div className="w-full flex justify-between items-start flex-row gap-3">
          <FormField
            control={form.control}
            name="first"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-secondary-dark mb-0">
                  First Name
                  <span className="ml-1 text-red-500 font-bold">*</span>
                </FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Enter first name" {...field}
                    className="text-base" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="middle"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-secondary-dark mb-0">
                  Middle Name
                </FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Enter middle name" {...field}
                    className="text-base" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* last name && suffix */}
        <div className="w-full flex justify-between items-start flex-row gap-3">
          <FormField
            control={form.control}
            name="last"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-secondary-dark mb-0">
                  Last Name
                  <span className="ml-1 text-red-500 font-bold">*</span>
                </FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Enter last name" {...field}
                    className="text-base" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="suffix"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-secondary-dark mb-0">
                  Suffix
                </FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Ex. SR/JR/III" {...field}
                    className="text-base" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* email address */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-secondary-dark mb-0">
                Email Address
              </FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter valid email" {...field}
                  className="text-base" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* username */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-secondary-dark mb-0">
                Username
                <span className="ml-1 text-red-500 font-bold">*</span>
              </FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter username" {...field}
                  className="text-base" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* password */}
        <div className="w-full flex justify-between items-start flex-row gap-3">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-secondary-dark mb-0">
                  Password
                  <span className="ml-1 text-red-500 font-bold">*</span>
                </FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Enter desired password" {...field}
                    className="text-base" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* confirm password */}
          <FormField
            control={form.control}
            name="confirm"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-secondary-dark mb-0">
                  Confirm Password
                  <span className="ml-1 text-red-500 font-bold">*</span>
                </FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Retype your password" {...field}
                    className="text-base" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit"
          size="lg"
          className="w-full text-base">
          <BsBoxArrowRight className='mr-3 text-xl' />
          <span className="tracking-widest">REGISTER</span>
        </Button>

        <h3 className="text-secondary-dark font-medium text-center">
          Already have an account? {` `}
          <Link href="/login" className="text-primary-dark hover:underline">Login Here.</Link>
        </h3>
      </form>
    </Form>
  )
}
