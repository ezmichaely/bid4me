"use client"

import { useState, useEffect } from 'react'
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Switch } from "@nextui-org/react";



export default function ThemeSwitcher() {
  const [isSelected, setIsSelected] = useState(true);
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => { setMounted(true) }, [])

  if (!mounted) { return null }

  const toggleTheme = () => {
    isSelected === true ? setTheme('light') : setTheme('dark')
  };

  return (
    <Switch size="lg" onValueChange={setIsSelected} onChange={toggleTheme}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <Sun className={className} />
        ) : (
          <Moon className={className} />
        )
      }
    />
  );
}
