"use client"

import { useState } from "react"
import styles from "./devices.module.css"

interface Device {
  id: string
  name: string
  type: string
  status: "online" | "offline" | "idle"
  lastSeen: string
  location: string
  user: string
  ipAddress: string
}

export default function DevicesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const devices: Device[] = [
    {
      id: "1",
      name: "MacBook Pro - John's Laptop",
      type: "Laptop",
      status: "online",
      lastSeen: "2 minutes ago",
      location: "Office Floor 2",
      user: "john.doe@company.com",
      ipAddress: "192.168.1.45",
    },
    {
      id: "2",
      name: "iPhone 14 Pro",
      type: "Mobile",
      status: "online",
      lastSeen: "5 minutes ago",
      location: "Conference Room A",
      user: "sarah.smith@company.com",
      ipAddress: "192.168.1.78",
    },
    {
      id: "3",
      name: "Dell Workstation",
      type: "Desktop",
      status: "idle",
      lastSeen: "1 hour ago",
      location: "Development Lab",
      user: "mike.johnson@company.com",
      ipAddress: "192.168.1.92",
    },
    {
      id: "4",
      name: "Surface Tablet",
      type: "Tablet",
      status: "offline",
      lastSeen: "3 hours ago",
      location: "Meeting Room B",
      user: "lisa.wilson@company.com",
      ipAddress: "192.168.1.156",
    },
    {
      id: "5",
      name: "iMac 27-inch",
      type: "Desktop",
      status: "online",
      lastSeen: "Just now",
      location: "Design Studio",
      user: "alex.brown@company.com",
      ipAddress: "192.168.1.203",
    },
  ]

  const filteredDevices = devices.filter((device) => {
    const matchesSearch =
      device.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      device.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      device.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || device.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "rgb(76, 175, 80)"
      case "offline":
        return "rgb(244, 67, 54)"
      case "idle":
        return "rgb(255, 193, 7)"
      default:
        return "rgb(107, 114, 128)"
    }
  }

  return (
    <div className={styles.devicesPage}>
      <div className={styles.header}>
        <h1 className={styles.title}>Device Management</h1>
        <p className={styles.subtitle}>Monitor and manage all company devices</p>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <div className={styles.statValue}>247</div>
          <div className={styles.statLabel}>Total Devices</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>198</div>
          <div className={styles.statLabel}>Online</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>34</div>
          <div className={styles.statLabel}>Idle</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>15</div>
          <div className={styles.statLabel}>Offline</div>
        </div>
      </div>

      <div className={styles.controls}>
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Search devices, users, or locations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className={styles.filterSelect}>
          <option value="all">All Status</option>
          <option value="online">Online</option>
          <option value="idle">Idle</option>
          <option value="offline">Offline</option>
        </select>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.devicesTable}>
          <thead>
            <tr>
              <th>Device</th>
              <th>Type</th>
              <th>Status</th>
              <th>User</th>
              <th>Location</th>
              <th>Last Seen</th>
              <th>IP Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDevices.map((device) => (
              <tr key={device.id}>
                <td>
                  <div className={styles.deviceInfo}>
                    <div className={styles.deviceIcon}>
                      {device.type === "Laptop"
                        ? "💻"
                        : device.type === "Mobile"
                          ? "📱"
                          : device.type === "Tablet"
                            ? "📱"
                            : "🖥️"}
                    </div>
                    <span className={styles.deviceName}>{device.name}</span>
                  </div>
                </td>
                <td>{device.type}</td>
                <td>
                  <span className={styles.statusBadge} style={{ backgroundColor: getStatusColor(device.status) }}>
                    {device.status}
                  </span>
                </td>
                <td>{device.user}</td>
                <td>{device.location}</td>
                <td>{device.lastSeen}</td>
                <td className={styles.ipAddress}>{device.ipAddress}</td>
                <td>
                  <div className={styles.actions}>
                    <button className={styles.actionButton}>View</button>
                    <button className={styles.actionButton}>Manage</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
