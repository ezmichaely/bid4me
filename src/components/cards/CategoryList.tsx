import { ScrollArea } from "@/components/ui/scroll-area"
import { mainCategory } from "@/constants/constants"
import Link from "next/link"

export default function CategoryList() {


  return (
    <ScrollArea className="w-full border p-4">
      <div className="w-full text-left">
        {mainCategory.map((item, index) => (
          <Link key={index} href={`${item.link}/${item.params}`}
            className="py-2 hover:bg-primary dark:hover:text-accent-foreground dark:hover:font-bold font-medium text-left">
            {item.name}
          </Link>
        ))}
      </div>
    </ScrollArea>
  )
}
