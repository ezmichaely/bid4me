"use client"

import { useState, useEffect } from 'react'
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import styles from '@/styles/toggleSwitch.module.css'

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()


  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div className={styles.switchDiv}>
      <label className={styles.switchLabel}>
        <div className={styles.switchInner}>
          <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
          <div className={`${styles.switchBg} `} />
          <div className={styles.switchHandle}>
            {theme === 'dark' ? <Moon size={22} /> : <Sun size={22} />}
          </div>
        </div>
      </label>
    </div>

  )
}
