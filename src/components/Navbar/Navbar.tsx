"use client"

import { useRouter } from "next/navigation"
import styles from "./Navbar.module.css"
import { useState, useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface NavbarProps {
  onMenuClick: () => void
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [notifications, setNotifications] = useState(3) // Placeholder

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleLogout = () => {
    router.push("/login")
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <div className={styles.leftSection}>
          <button className={styles.menuButton} onClick={onMenuClick} aria-label="Toggle menu">
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
          </button>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>🏢</span>
            <span className={styles.logoText}>CompanyMonitor</span>
          </div>
        </div>
        <div className={styles.rightSection}>
          {/* Notifications Bell */}
          <button className={styles.bellButton} aria-label="Notifications">
            <span className={styles.bellIcon}>🔔</span>
            {notifications > 0 && <span className={styles.bellBadge}>{notifications}</span>}
          </button>
          {/* Theme Toggle */}
          <button className={styles.themeToggle} onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme">
            {theme === "light" ? "🌞" : "🌙"}
          </button>
          {/* Profile Dropdown */}
          <div className={styles.profileWrapper} ref={dropdownRef}>
            <button className={styles.adminAvatar} onClick={() => setDropdownOpen((v) => !v)} aria-label="Profile menu">
              A
            </button>
            {dropdownOpen && (
              <div className={styles.profileDropdown}>
                <div className={styles.profileDropdownItem} onClick={() => router.push("/dashboard/profile")}>Profile</div>
                <div className={styles.profileDropdownItem} onClick={() => router.push("/dashboard/settings")}>Settings</div>
                <div className={styles.profileDropdownItem} onClick={handleLogout}>Logout</div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Breadcrumbs and Quick Actions will be rendered below by parent layout */}
    </nav>
  )
}
