"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Briefcase, CreditCard, Globe, LayoutDashboard, LifeBuoy, Network, Router, Settings, Users } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  collapsed?: boolean
}

export function Sidebar({ className, collapsed = false }: SidebarNavProps) {
  const pathname = usePathname()

  const navItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      title: "Customers",
      href: "/dashboard/customers",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Billing",
      href: "/dashboard/billing",
      icon: <CreditCard className="h-5 w-5" />,
    },
    {
      title: "Network",
      href: "/dashboard/network",
      icon: <Network className="h-5 w-5" />,
    },
    {
      title: "Devices",
      href: "/dashboard/devices",
      icon: <Router className="h-5 w-5" />,
    },
    {
      title: "Reports",
      href: "/dashboard/reports",
      icon: <BarChart3 className="h-5 w-5" />,
    },
    {
      title: "Services",
      href: "/dashboard/services",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      title: "Support",
      href: "/dashboard/support",
      icon: <LifeBuoy className="h-5 w-5" />,
    },
    {
      title: "Services",
      href: "/dashboard/services",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ]

  return (
    <div
      className={cn("flex flex-col h-screen border-r bg-background", collapsed ? "w-[70px]" : "w-[240px]", className)}
    >
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/dashboard" className={cn("flex items-center gap-2 font-semibold", collapsed && "justify-center")}>
          <Globe className="h-6 w-6 text-primary" />
          {!collapsed && <span>NetSphere</span>}
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {navItems.map((item, index) => (
            <Button
              key={index}
              asChild
              variant={pathname === item.href ? "secondary" : "ghost"}
              className={cn("justify-start", collapsed && "justify-center px-0")}
            >
              <Link href={item.href}>
                {item.icon}
                {!collapsed && <span className="ml-2">{item.title}</span>}
              </Link>
            </Button>
          ))}
        </nav>
      </div>
    </div>
  )
}
