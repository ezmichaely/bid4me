"use client"

import { Input } from "@nextui-org/react";
import { Search } from 'lucide-react';


export default function SearchBar() {
  return (
    <Input
      type="search"
      placeholder="search in bid4me"
      labelPlacement="outside"
      startContent={
        <div className="rotate-90">
          <Search size={20} color="#0F172A" strokeWidth={3} />
        </div>
      }
      classNames="rounded-full"
    />
  )
}
