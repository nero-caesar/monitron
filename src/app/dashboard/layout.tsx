"use client"

import type React from "react"

import { useState } from "react"
import Navbar from "../../components/Navbar/Navbar"
import Sidebar from "../../components/Sidebar/Sidebar"
import Breadcrumbs from "../../components/Breadcrumbs"
import QuickActionsBar from "../../components/QuickActionsBar"
import styles from "./dashboard-layout.module.css"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className={styles.layout}>
      <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <Breadcrumbs />
      <QuickActionsBar />
      <div className={styles.content}>
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  )
}
