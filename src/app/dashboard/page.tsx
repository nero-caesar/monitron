"use client"

import { useState } from "react"
import DashboardCard from "../../components/DashboardCard/DashboardCard"
import styles from "./dashboard.module.css"

export default function DashboardPage() {
  const [adminName, setAdminName] = useState("Admin User")

  const dashboardStats = [
    {
      title: "Devices Online",
      value: "247",
      change: "+12%",
      changeType: "positive" as const,
      icon: "💻",
    },
    {
      title: "Suspicious Activity",
      value: "3",
      change: "-25%",
      changeType: "negative" as const,
      icon: "⚠️",
    },
    {
      title: "Last Login",
      value: "2 min ago",
      change: "Active",
      changeType: "neutral" as const,
      icon: "🔐",
    },
    {
      title: "Active Sessions",
      value: "156",
      change: "+8%",
      changeType: "positive" as const,
      icon: "👥",
    },
  ]

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1 className={styles.title}>Welcome back, {adminName}!</h1>
        <p className={styles.subtitle}>Here is what is happening with your company today.</p>
      </div>

      <div className={styles.statsGrid}>
        {dashboardStats.map((stat, index) => (
          <DashboardCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            changeType={stat.changeType}
            icon={stat.icon}
          />
        ))}
      </div>

      <div className={styles.chartsSection}>
        <div className={styles.chartCard}>
          <h3 className={styles.chartTitle}>Activity Overview</h3>
          <div className={styles.chartPlaceholder}>
            <div className={styles.chartBars}>
              <div className={styles.bar} style={{ height: "60%" }}></div>
              <div className={styles.bar} style={{ height: "80%" }}></div>
              <div className={styles.bar} style={{ height: "45%" }}></div>
              <div className={styles.bar} style={{ height: "90%" }}></div>
              <div className={styles.bar} style={{ height: "70%" }}></div>
              <div className={styles.bar} style={{ height: "55%" }}></div>
              <div className={styles.bar} style={{ height: "85%" }}></div>
            </div>
            <p className={styles.chartLabel}>Weekly Activity Trends</p>
          </div>
        </div>

        <div className={styles.chartCard}>
          <h3 className={styles.chartTitle}>Device Status</h3>
          <div className={styles.chartPlaceholder}>
            <div className={styles.pieChart}>
              <div
                className={styles.pieSlice}
                style={{
                  background: `conic-gradient(rgb(0, 255, 255) 0deg 216deg, rgb(76, 175, 80) 216deg 324deg, rgb(255, 193, 7) 324deg 360deg)`,
                }}
              ></div>
            </div>
            <div className={styles.pieLabels}>
              <div className={styles.pieLabel}>
                <span className={styles.pieDot} style={{ background: "rgb(0, 255, 255)" }}></span>
                Online (60%)
              </div>
              <div className={styles.pieLabel}>
                <span className={styles.pieDot} style={{ background: "rgb(76, 175, 80)" }}></span>
                Idle (30%)
              </div>
              <div className={styles.pieLabel}>
                <span className={styles.pieDot} style={{ background: "rgb(255, 193, 7)" }}></span>
                Offline (10%)
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.recentActivity}>
        <h3 className={styles.sectionTitle}>Recent Activity</h3>
        <div className={styles.activityList}>
          <div className={styles.activityItem}>
            <div className={styles.activityIcon}>🔐</div>
            <div className={styles.activityContent}>
              <p className={styles.activityText}>User john.doe@company.com logged in</p>
              <span className={styles.activityTime}>2 minutes ago</span>
            </div>
          </div>
          <div className={styles.activityItem}>
            <div className={styles.activityIcon}>⚠️</div>
            <div className={styles.activityContent}>
              <p className={styles.activityText}>Suspicious login attempt detected</p>
              <span className={styles.activityTime}>15 minutes ago</span>
            </div>
          </div>
          <div className={styles.activityItem}>
            <div className={styles.activityIcon}>💻</div>
            <div className={styles.activityContent}>
              <p className={styles.activityText}>New device registered: MacBook Pro</p>
              <span className={styles.activityTime}>1 hour ago</span>
            </div>
          </div>
          <div className={styles.activityItem}>
            <div className={styles.activityIcon}>👥</div>
            <div className={styles.activityContent}>
              <p className={styles.activityText}>Team meeting started in Conference Room A</p>
              <span className={styles.activityTime}>2 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
