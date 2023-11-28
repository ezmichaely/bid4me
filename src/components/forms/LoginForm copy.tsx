"use client"

import Link from "next/link";
import { useState } from "react";
import { signIn } from 'next-auth/react';
import { FacebookSvg, GoogleSvg, CheckBoxSvg } from '@/assets/icons'
import { colors } from "@/constants/constants";
import { Input, Checkbox, Button } from "@nextui-org/react";
import { AtSign, KeyRound, Eye, EyeOff, Check } from "lucide-react";
import styles from '@/styles/authform.module.css'


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

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  // const handleFormSubmit = async (ev) => {
  //   ev.preventDefault();
  //   setLoginInProgress(true);
  //   await signIn('credentials', { email, password, callbackUrl: '/' })

  //   // setLoginInProgress(false );
  // }

  return (
    <div className={styles.formContainer}>
      {/* onSubmit={handleFormSubmit}  */}
      <h3 className={styles.formTitle}>LOGIN</h3>

      <form className={styles.formContent}>
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

        <div className={styles.formCredentials}>
          <div className={styles.formControl}>
            <Input
              type="email"
              label="Email"
              labelPlacement="outside"
              placeholder="Enter your email"
              size="lg"
              isInvalid={false}
              errorMessage={error}
              startContent={
                <AtSign size={20} color={colors.primary} />
              }
            // classNames={{
            //   label: "font-medium",
            // }}
            />
          </div>

          <div className={styles.formControl}>
            <Input
              type={isVisible ? "text" : "password"}
              label="Password"
              labelPlacement="outside"
              placeholder="Enter your desired password"
              size="lg"
              isInvalid={false}
              errorMessage={error}
              startContent={
                <KeyRound size={20} color={colors.primary} />
              }
              endContent={
                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                  {isVisible ? (
                    <EyeOff className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <Eye className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
            // classNames={{
            //   label: "font-medium",
            // }}
            />
          </div>

          <div className={styles.formCheck}>
            <Checkbox defaultSelected={false}
              size="md"
              // icon={<CheckBoxSvg fill={colors.secondary} />}
              classNames={{
                icon: "text-secondary-300",
                wrapper: "after:bg-primary-400",
                label: "font-medium"
              }}
            >
              Keep me logged in.
            </Checkbox>

            <Link href="/forgotpassword">Forgot Password?</Link>
          </div>
        </div>


        <Button size="lg" type="submit" disabled={loginInProgress}
          className={styles.btnSubmit}>
          LOGIN
        </Button>
      </form>

      <div className={styles.formFooter}>
        <p>Don&apos;t have an account? &nbsp;</p>
        <Link href="/signup">Sign Up here.</Link>
      </div>

    </div>
  )
}
