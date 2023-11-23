"use client"


import {
  Dropdown, DropdownTrigger,
  DropdownMenu, DropdownItem,
  User
} from "@nextui-org/react";
import { signOut } from "next-auth/react";

export default function ProfileAvatar() {

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <User
          as="button"
          avatarProps={{
            className: "min-w-[32px] min-h-[32px] w-8 h-8 text-xs border-2 border-secondary-300",
            isBordered: false,
            src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
          }}
          isFocusable={true}
          className="transition-transform"
          description=""
          name=""
          // name={(<ChevronDown color={colors.white} strokeWidth={2} size={24} />)}
          classNames={{
            // base: 'gap-1 bg-primary-500 py-1 px-2 hover:bg-primary-500/70',
            base: 'gap-0',
            wrapper: '',
            name: 'hidden',
            description: 'hidden'
          }}
        />
      </DropdownTrigger>

      <DropdownMenu aria-label="User Actions" variant="flat">
        <DropdownItem key="settings">
          My Settings
        </DropdownItem>
        <DropdownItem key="team_settings">Team Settings</DropdownItem>
        <DropdownItem key="analytics">
          Analytics
        </DropdownItem>
        <DropdownItem key="system">System</DropdownItem>
        <DropdownItem key="configurations">Configurations</DropdownItem>
        <DropdownItem key="help_and_feedback">
          Help & Feedback
        </DropdownItem>
        <DropdownItem key="logout" color="danger" onClick={() => signOut()}>
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
