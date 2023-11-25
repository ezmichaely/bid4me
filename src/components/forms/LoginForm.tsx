"use client"

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { signIn } from 'next-auth/react';
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FacebookSvg, GoogleSvg } from '@/assets/icons'
import { Eye, EyeOff, Mail, KeySquare, } from "lucide-react";
import styles from '@/styles/authform.module.css'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"


function LoginForm() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const formSchema = z.object({
    email: z.string()
      .min(1, { message: "Email address is required." })
      .email({ message: "Invalid Email address." }),
    password: z.string()
      .min(8, { message: "Password must be at least 8 characters." })
  })


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })


  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }


  return (
    <div className={styles.formContainer}>
      <h3 className={styles.formTitle}>LOGIN</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <div className={styles.formProviders}>
            <Button size="lg" type="button" className={styles.btnProvider}
              onClick={() => signIn('google', { callbackUrl: '/' })}>
              <GoogleSvg size={20} />
              Continue with Google
            </Button>

            <Button size="lg" type="button" className={styles.btnProvider}
              onClick={() => signIn('facebook', { callbackUrl: '/' })}>
              <FacebookSvg size={20} />
              Continue with Facebook
            </Button>
          </div>

          <div className={styles.formDivider}>
            <Separator />
            <p> or Login with Credentials </p>
            <Separator />
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
          </div>


          <div className={styles.forgotPass}>
            <Link href="/forgotpassword">Forgot Password?</Link>
          </div>

          <div className="py-2">
            <Button size="lg" type="submit" className="w-full font-bold text-md">
              {/* <ArrowRightFromLine /> */}
              <span>Log me in</span>
            </Button>
          </div>

          <div className={styles.formFooter}>
            <p>Don&apos;t have an account? &nbsp;</p>
            <Link href="/signup" className="text-secondary hover:text-secondary/80 dark:text-primary dark:hover:text-primary/80">
              Signup here.
            </Link>
          </div>
        </form>
      </Form>
    </div>
  )
}


export default LoginForm;