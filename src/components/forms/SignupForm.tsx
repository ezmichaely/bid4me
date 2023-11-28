"use client"

import Link from "next/link";
import { useState } from "react";
import { signIn } from 'next-auth/react';
import { FacebookSvg, GoogleSvg, } from '@/assets/icons'
import { colors } from "@/constants/constants";
import { Input, Button } from "@nextui-org/react";
import { AtSign, KeyRound, Eye, EyeOff } from "lucide-react";
import styles from '@/styles/authform.module.css'


export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginInProgress, setLoginInProgress] = useState(false);

  const [error, setError] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className={styles.formContainer}>
      {/* onSubmit={handleFormSubmit}  */}
      <h3 className={styles.formTitle}>SIGN UP</h3>

      <form className={styles.formContent}>

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
          <div />
          <p> or Signup with Credentials </p>
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

          <div className={styles.formControl}>
            <Input
              type={isVisible ? "text" : "password"}
              label="Retype Password"
              labelPlacement="outside"
              placeholder="Retype your password"
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
        </div>

        <Button size="lg" type="submit" className={styles.btnSubmit}
          disabled={loginInProgress}>
          SIGN UP
        </Button>
      </form>

      <div className={styles.formFooter}>
        <p>Already have an account? &nbsp;</p>
        <Link href="/login">Login here.</Link>
      </div>

    </div>
  )
}
