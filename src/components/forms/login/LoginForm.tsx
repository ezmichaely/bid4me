"use client"

import Link from "next/link";
import { useState } from "react";
import { signIn } from 'next-auth/react';
import { BrandSvg, GoogleSvg } from '@/assets/icons'
import { colors } from "@/lib/constants";


// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import * as z from "zod"
// import { Button } from "@/components/ui/button"
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"


// const formSchema = z.object({
//   username: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
// })

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginInProgress, setLoginInProgress] = useState(false);

  const [error, setError] = useState(false);

  // const handleFormSubmit = async (ev) => {
  //   ev.preventDefault();
  //   setLoginInProgress(true);
  //   await signIn('credentials', { email, password, callbackUrl: '/' })

  //   // setLoginInProgress(false );
  // }

  return (
    <>
      {/* onSubmit={handleFormSubmit}  */}
      <form className='block w-full'>
        <input type="email" name="email" placeholder='email' value={email}
          disabled={loginInProgress}
          onChange={ev => setEmail(ev.target.value)} />

        <input type="password" name="password"
          placeholder='password' value={password}
          disabled={loginInProgress}
          onChange={ev => setPassword(ev.target.value)} />

        <button type="submit" disabled={loginInProgress}> Login </button>

        <div className='flex justify-between items-center flex-row flex-nowrap gap-x-4 my-5'>
          <div className='h-px w-full bg-gray-500'></div>
          <p className='whitespace-nowrap text-gray-500'>
            or Login with provider
          </p>
          <div className='h-px w-full bg-gray-500'></div>
        </div>
        <button className="gap-x-2 hover:bg-gray-100"
          onClick={() => signIn('google', { callbackUrl: '/' })}>
          <GoogleSvg size={32} />
          Login with Google
        </button>
      </form>

      <div className="inline-flex">
        <p>Don&apos;t have an account? &nbsp;</p>
        <Link href="/register"> Register here.</Link>
      </div>
    </>

  )
}
