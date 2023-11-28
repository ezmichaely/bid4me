"use client"

import Link from "next/link";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { signIn } from 'next-auth/react';
import { Button } from "@/components/ui/button"
import { FacebookSvg, GoogleSvg } from '@/assets/icons'
import { AtSign, KeyRound, Eye, EyeOff, Check } from "lucide-react";
import styles from '@/styles/authform.module.css'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const formSchema = z.object({
  email: z.string().email().min(1, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 2 characters."
  })
})


function LoginForm() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [error, setError] = useState(false);


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
          <div />
          <p> or Login with Credentials </p>
          <div />
        </div>

        <div >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type={isVisible ? "text" : "password"}
                    placeholder="Enter your password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>


        <Button type="submit">Log me in</Button>
        <div className={styles.formFooter}>
          <p>Don&apos;t have an account? &nbsp;</p>
          <Link href="/signup">Sign Up here.</Link>
        </div>
      </form>
    </Form>
  )
}


export default LoginForm;