import React from 'react'
import {
  FreeReturnIcon, OnlineSupportIcon,
  SecurePayIcon, TruckIcon, WalletIcon
} from '@/components/icons'
import { TagCard } from '@/components'

const taglines = [
  {
    title: "GREAT VALUE",
    icon: <WalletIcon />,
    tagline: 'Quality Meets Affordability - Explore Products at Great Value Prices!'
  },
  {
    title: "FAST DELIVERY",
    icon: <TruckIcon />,
    tagline: 'From Cart to Doorstep in No Time - Fast, Reliable Deliveries Every Time!'
  },
  {
    title: "FREE RETURN",
    icon: <FreeReturnIcon />,
    tagline: 'Shop Risk-Free, Return Hassle-Free - Enjoy Free 7 Day Return on Every Purchase!'
  },
  {
    title: "SAFE PAYMENT",
    icon: <SecurePayIcon />,
    tagline: 'Shop Securely, Pay Safely - Your Transactions Protected Every Step of the Way!'
  },
  {
    title: "CUSTOMER SERVICE",
    icon: <OnlineSupportIcon />,
    tagline: 'Service Beyond Sales - Experience Superior Customer Care Today!'
  },
]


export default function Taglines() {
  return (
    <div className='w-full text-center grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2'>
      {taglines.map((item, index) => (
        <TagCard key={index} title={item.title}
          icon={item.icon} tagline={item.tagline} />
      ))}
    </div>
  )
}
