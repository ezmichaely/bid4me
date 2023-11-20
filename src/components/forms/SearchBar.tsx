"use client"

import { Input } from "@nextui-org/react";
import { Search } from 'lucide-react';
import { colors } from "@/lib/constants";
import styles from '@/styles/forms/searchBar.module.css'


export default function SearchBar() {
  return (
    <Input
      radius="full"
      type="search"
      placeholder="search in bid4me"
      labelPlacement="outside"
      startContent={
        <div className={styles.icon}>
          <Search size={16} color={colors.accent} strokeWidth={3} />
        </div>
      }
    />
  )
}
