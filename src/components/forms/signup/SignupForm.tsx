"use client"

import Link from "next/link";
import { useState } from "react";
import { signIn } from 'next-auth/react';
import { FacebookSvg, GoogleSvg, CheckBoxSvg } from '@/assets/icons'
import { colors } from "@/lib/constants";
import { Input, Checkbox } from "@nextui-org/react";
import { AtSign, KeyRound, Eye, EyeOff, Check } from "lucide-react";
import styles from './signupForm.module.css'


export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginInProgress, setLoginInProgress] = useState(false);

  const [error, setError] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className={styles.container}>
      {/* onSubmit={handleFormSubmit}  */}
      <h3>REGISTER</h3>

      <form>
        <div className={styles.div01}>
          <button
            onClick={() => signIn('google', { callbackUrl: '/' })}>
            <GoogleSvg size={20} />
            Register using Google
          </button>
        </div>

        <div className={styles.div02}>
          <button
            onClick={() => signIn('facebook', { callbackUrl: '/' })}>
            <FacebookSvg size={20} />
            Register using Facebook
          </button>
        </div>

        <div className={styles.div03}>
          <div />
          <p> or Register with Credentials </p>
          <div />
        </div>

        <div className={styles.div04}>
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
            classNames={{
              label: "font-medium",
            }}
          />
        </div>

        <div className={styles.div04}>
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
            classNames={{
              label: "font-medium",
            }}
          />
        </div>

        <div className={styles.div04}>
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
            classNames={{
              label: "font-medium",
            }}
          />
        </div>

        <button type="submit" disabled={loginInProgress}
          className={styles.btnSubmit}>
          SIGNUP
        </button>
      </form>

      <div className={styles.formFooter}>
        <p>Already have an account? &nbsp;</p>
        <Link href="/login"> Login here.</Link>
      </div>

    </div>
  )
}
