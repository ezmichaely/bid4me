"use client"

import Link from "next/link";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { signIn } from 'next-auth/react';
import { Button } from "@/components/ui/button"
import { FacebookSvg, GoogleSvg } from '@/assets/icons'
import { Eye, EyeOff, Mail, KeySquare, ArrowRightFromLine } from "lucide-react";
import styles from '@/styles/authform.module.css'
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
const formSchema = z.object({
  email: z.string()
    .min(1, { message: "Email address is required." })
    .email({ message: "Invalid Email address." }),
  password: z.string()
    .regex(regex, { message: "Password needs an uppercase, a digit, a special character, and must be 8-20 characters long." })
    .min(8, { message: "Password must be at least 8 characters." }),
  retypepassword: z.string()
})
  .refine((data) => data.password === data.retypepassword, {
    message: "Passwords don't match.",
    path: ["retypepassword"], // path of error
  });


function SignupForm() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      retypepassword: "",
    },
  })


  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }


  return (
    <div className={styles.formContainer}>
      <h3 className={styles.formTitle}>SIGN UP</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <div className={styles.formProviders}>
            <Button size="lg" type="button" className={styles.btnProvider}
              onClick={() => signIn('google', { callbackUrl: '/' })}>
              <GoogleSvg size={20} />
              Signup with Google
            </Button>

            <Button size="lg" type="button" className={styles.btnProvider}
              onClick={() => signIn('facebook', { callbackUrl: '/' })}>
              <FacebookSvg size={20} />
              Signup with Facebook
            </Button>
          </div>

          <div className={styles.formDivider}>
            <div></div>
            <p> or Signup with Credentials </p>
            <div></div>
          </div>

          <div className={styles.formCredentials}>
            <FormField control={form.control} name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <div className="w-full flex justify-start items-center flex-row gap-3 border border-input rounded-md pl-3 overflow-hidden
                      focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                      <Mail />
                      <Input type="email"
                        placeholder="Enter your email" {...field}
                        className="border-0 border-input px-0 rounded-none
                        focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField control={form.control} name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="w-full flex justify-start items-center flex-row gap-3 border border-input rounded-md px-3 pl-3 overflow-hidden
                      focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ">
                      <KeySquare />
                      <Input type={isVisible ? "text" : "password"}
                        placeholder="Enter your password" {...field}
                        className="border-0 border-input px-0 rounded-none
                        focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                      <button className="focus:outline-none opacity-60" type="button"
                        onClick={toggleVisibility}>
                        {isVisible ? <EyeOff /> : <Eye />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField control={form.control} name="retypepassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Retype password</FormLabel>
                  <FormControl>
                    <div className="w-full flex justify-start items-center flex-row gap-3 border border-input rounded-md px-3 pl-3 overflow-hidden
                      focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ">
                      <KeySquare />
                      <Input type={isVisible ? "text" : "password"}
                        placeholder="Retype your password" {...field}
                        className="border-0 border-input px-0 rounded-none
                        focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                      <button className="focus:outline-none opacity-60" type="button"
                        onClick={toggleVisibility}>
                        {isVisible ? <EyeOff /> : <Eye />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>


          <div className="items-top flex gap-2 pt-2">
            <Checkbox id="termsCondition" />
            <div className="grid gap-1.5 mt-1 select-none">
              <label
                htmlFor="termsCondition"
                className="text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70 hover:text-foreground/80"
              >
                Accept terms and conditions
              </label>
              <p className="text-sm text-muted-foreground inline-flex">
                <span>You agree to our</span>
                <Link href="/terms" target="_blank" className="hover:text-foreground/80">&nbsp;Terms of Service and Privacy Policy. </Link>
              </p>
            </div>
          </div>

          <div className="py-2">
            <Button size="lg" type="submit" className="w-full font-bold text-md">
              <span>Sign me up</span>
              {/* <ArrowRightFromLine /> */}
            </Button>
          </div>

          <div className={styles.formFooter}>
            <p>Already have an account? &nbsp;</p>
            <Link href="/login" className="text-secondary hover:text-secondary/80 dark:text-primary dark:hover:text-primary/80">
              Login here.
            </Link>
          </div>
        </form>
      </Form>
    </div>
  )
}


export default SignupForm;