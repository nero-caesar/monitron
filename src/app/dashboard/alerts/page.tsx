"use client"

import { useState } from "react"
import styles from "./alerts.module.css"

interface Alert {
  id: string
  type: "security" | "system" | "user" | "device"
  severity: "low" | "medium" | "high" | "critical"
  title: string
  description: string
  timestamp: string
  status: "new" | "acknowledged" | "resolved"
  source: string
  affectedUsers?: string[]
}

export default function AlertsPage() {
  const [severityFilter, setSeverityFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")

  const alerts: Alert[] = [
    {
      id: "1",
      type: "security",
      severity: "critical",
      title: "Multiple Failed Login Attempts",
      description: "User account john.doe@company.com has 5 failed login attempts in the last 10 minutes",
      timestamp: "2 minutes ago",
      status: "new",
      source: "Authentication System",
      affectedUsers: ["john.doe@company.com"],
    },
    {
      id: "2",
      type: "system",
      severity: "high",
      title: "Server CPU Usage High",
      description: "Production server CPU usage has exceeded 90% for the past 15 minutes",
      timestamp: "15 minutes ago",
      status: "acknowledged",
      source: "Monitoring System",
    },
    {
      id: "3",
      type: "device",
      severity: "medium",
      title: "Unauthorized Device Connection",
      description: "Unknown device attempted to connect to company network",
      timestamp: "1 hour ago",
      status: "new",
      source: "Network Security",
    },
    {
      id: "4",
      type: "user",
      severity: "low",
      title: "Unusual Access Pattern",
      description: "User sarah.smith@company.com accessed files outside normal hours",
      timestamp: "2 hours ago",
      status: "resolved",
      source: "File Access Monitor",
      affectedUsers: ["sarah.smith@company.com"],
    },
    {
      id: "5",
      type: "security",
      severity: "high",
      title: "Suspicious File Download",
      description: "Large file download detected from external IP address",
      timestamp: "3 hours ago",
      status: "acknowledged",
      source: "Data Loss Prevention",
    },
  ]

  const filteredAlerts = alerts.filter((alert) => {
    const matchesSeverity = severityFilter === "all" || alert.severity === severityFilter
    const matchesStatus = statusFilter === "all" || alert.status === statusFilter
    const matchesType = typeFilter === "all" || alert.type === typeFilter
    return matchesSeverity && matchesStatus && matchesType
  })

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "rgb(244, 67, 54)"
      case "high":
        return "rgb(255, 152, 0)"
      case "medium":
        return "rgb(255, 193, 7)"
      case "low":
        return "rgb(76, 175, 80)"
      default:
        return "rgb(107, 114, 128)"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "rgb(244, 67, 54)"
      case "acknowledged":
        return "rgb(255, 193, 7)"
      case "resolved":
        return "rgb(76, 175, 80)"
      default:
        return "rgb(107, 114, 128)"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "security":
        return "🔒"
      case "system":
        return "⚙️"
      case "user":
        return "👤"
      case "device":
        return "📱"
      default:
        return "⚠️"
    }
  }

  const handleAcknowledge = (alertId: string) => {
    // Handle acknowledge logic
    console.log("Acknowledging alert:", alertId)
  }

  const handleResolve = (alertId: string) => {
    // Handle resolve logic
    console.log("Resolving alert:", alertId)
  }

  return (
    <div className={styles.alertsPage}>
      <div className={styles.header}>
        <h1 className={styles.title}>Security Alerts</h1>
        <p className={styles.subtitle}>Monitor and manage security alerts and incidents</p>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <div className={styles.statValue}>23</div>
          <div className={styles.statLabel}>Active Alerts</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>5</div>
          <div className={styles.statLabel}>Critical</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>12</div>
          <div className={styles.statLabel}>Acknowledged</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>156</div>
          <div className={styles.statLabel}>Resolved Today</div>
        </div>
      </div>

      <div className={styles.controls}>
        <select
          value={severityFilter}
          onChange={(e) => setSeverityFilter(e.target.value)}
          className={styles.filterSelect}
        >
          <option value="all">All Severities</option>
          <option value="critical">Critical</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className={styles.filterSelect}>
          <option value="all">All Status</option>
          <option value="new">New</option>
          <option value="acknowledged">Acknowledged</option>
          <option value="resolved">Resolved</option>
        </select>
        <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className={styles.filterSelect}>
          <option value="all">All Types</option>
          <option value="security">Security</option>
          <option value="system">System</option>
          <option value="user">User</option>
          <option value="device">Device</option>
        </select>
      </div>

      <div className={styles.alertsList}>
        {filteredAlerts.map((alert) => (
          <div key={alert.id} className={styles.alertCard}>
            <div className={styles.alertHeader}>
              <div className={styles.alertInfo}>
                <div className={styles.alertIcon}>{getTypeIcon(alert.type)}</div>
                <div>
                  <h3 className={styles.alertTitle}>{alert.title}</h3>
                  <p className={styles.alertSource}>Source: {alert.source}</p>
                </div>
              </div>
              <div className={styles.alertBadges}>
                <span className={styles.severityBadge} style={{ backgroundColor: getSeverityColor(alert.severity) }}>
                  {alert.severity}
                </span>
                <span className={styles.statusBadge} style={{ backgroundColor: getStatusColor(alert.status) }}>
                  {alert.status}
                </span>
              </div>
            </div>

            <p className={styles.alertDescription}>{alert.description}</p>

            {alert.affectedUsers && (
              <div className={styles.affectedUsers}>
                <strong>Affected Users:</strong> {alert.affectedUsers.join(", ")}
              </div>
            )}

            <div className={styles.alertFooter}>
              <span className={styles.alertTime}>{alert.timestamp}</span>
              <div className={styles.alertActions}>
                {alert.status === "new" && (
                  <button className={styles.actionButton} onClick={() => handleAcknowledge(alert.id)}>
                    Acknowledge
                  </button>
                )}
                {alert.status !== "resolved" && (
                  <button className={styles.actionButton} onClick={() => handleResolve(alert.id)}>
                    Resolve
                  </button>
                )}
                <button className={styles.actionButton}>View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
