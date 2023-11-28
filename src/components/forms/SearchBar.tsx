"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';
import { colors } from "@/constants/constants";


export default function SearchBar() {

  const handleSearch = () => {
    console.log('search')
  }

  return (
    <div className="rounded-full flex justify-start items-center gap-2 z-40 bg-background w-full px-2 py-1">
      <Button type="button" size="iconSmall" onClick={handleSearch}
        className='cursor-pointer bg-primary rounded-full h-8 w-8'>
        <Search size={20} color={colors.accent} strokeWidth={3} />
      </Button>
      <Input
        type="search"
        placeholder="search in bid4me"
        className="rounded-none border-0 h-9 bg-transparent px-0 placeholder:text-accent/70 mr-2
        focus-visible:ring-0"
      />
    </div>
  )
}
