"use client"

import { Input } from "@nextui-org/react";
import { Search } from 'lucide-react';
import { colors } from "@/lib/constants";


export default function SearchBar() {
  return (
    <Input
      radius="full"
      type="search"
      placeholder="search in bid4me"
      labelPlacement="outside"
      startContent={
        <div className='bg-secondary-300 rounded-full p-2 -ml-3 mr-2'>
          <Search size={16} color={colors.accent} strokeWidth={3} />
        </div>
      }
    />
  )
}
