"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import styles from "./Sidebar.module.css"
import { useState } from "react"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  const menuItems = [
    {
      name: "Overview",
      href: "/dashboard",
      icon: "📊",
    },
    {
      name: "Devices",
      href: "/dashboard/devices",
      icon: "💻",
    },
    {
      name: "Register",
      href: "/dashboard/register",
      icon: "📱",
    },
    {
      name: "Staff Activity",
      href: "/dashboard/staff",
      icon: "👥",
    },
    {
      name: "Alerts",
      href: "/dashboard/alerts",
      icon: "⚠️",
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: "⚙️",
    },
  ]

  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={onClose} />}
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""} ${collapsed ? styles.collapsed : ""}`}>
        <button className={styles.collapseButton} onClick={() => setCollapsed((v) => !v)} aria-label="Collapse sidebar">
          {collapsed ? ">" : "<"}
        </button>
        <nav className={styles.nav}>
          <ul className={styles.menuList}>
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`${styles.menuItem} ${pathname === item.href ? styles.active : ""}`}
                  onClick={onClose}
                >
                  <span className={styles.menuIcon}>{item.icon}</span>
                  {!collapsed && <span className={styles.menuText}>{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}
