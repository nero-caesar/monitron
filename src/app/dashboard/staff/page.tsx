"use client"

import { useState } from "react"
import styles from "./staff.module.css"

interface StaffMember {
  id: string
  name: string
  email: string
  department: string
  role: string
  status: "active" | "away" | "offline"
  lastActivity: string
  location: string
  loginTime: string
  sessionsToday: number
}

export default function StaffPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState("all")

  const staffMembers: StaffMember[] = [
    {
      id: "1",
      name: "John Doe",
      email: "john.doe@company.com",
      department: "Engineering",
      role: "Senior Developer",
      status: "active",
      lastActivity: "2 minutes ago",
      location: "Office Floor 2",
      loginTime: "09:15 AM",
      sessionsToday: 3,
    },
    {
      id: "2",
      name: "Sarah Smith",
      email: "sarah.smith@company.com",
      department: "Design",
      role: "UI/UX Designer",
      status: "active",
      lastActivity: "5 minutes ago",
      location: "Design Studio",
      loginTime: "08:45 AM",
      sessionsToday: 2,
    },
    {
      id: "3",
      name: "Mike Johnson",
      email: "mike.johnson@company.com",
      department: "Engineering",
      role: "DevOps Engineer",
      status: "away",
      lastActivity: "1 hour ago",
      location: "Remote",
      loginTime: "09:30 AM",
      sessionsToday: 4,
    },
    {
      id: "4",
      name: "Lisa Wilson",
      email: "lisa.wilson@company.com",
      department: "Marketing",
      role: "Marketing Manager",
      status: "offline",
      lastActivity: "3 hours ago",
      location: "Meeting Room B",
      loginTime: "08:00 AM",
      sessionsToday: 1,
    },
    {
      id: "5",
      name: "Alex Brown",
      email: "alex.brown@company.com",
      department: "Design",
      role: "Creative Director",
      status: "active",
      lastActivity: "Just now",
      location: "Office Floor 3",
      loginTime: "09:00 AM",
      sessionsToday: 2,
    },
  ]

  const filteredStaff = staffMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = departmentFilter === "all" || member.department === departmentFilter
    return matchesSearch && matchesDepartment
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "rgb(76, 175, 80)"
      case "away":
        return "rgb(255, 193, 7)"
      case "offline":
        return "rgb(244, 67, 54)"
      default:
        return "rgb(107, 114, 128)"
    }
  }

  const departments = ["Engineering", "Design", "Marketing", "Sales", "HR"]

  return (
    <div className={styles.staffPage}>
      <div className={styles.header}>
        <h1 className={styles.title}>Staff Activity</h1>
        <p className={styles.subtitle}>Monitor employee activity and presence</p>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <div className={styles.statValue}>156</div>
          <div className={styles.statLabel}>Total Staff</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>142</div>
          <div className={styles.statLabel}>Active Today</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>89</div>
          <div className={styles.statLabel}>Currently Online</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>7.2h</div>
          <div className={styles.statLabel}>Avg. Session Time</div>
        </div>
      </div>

      <div className={styles.controls}>
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Search staff members..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        <select
          value={departmentFilter}
          onChange={(e) => setDepartmentFilter(e.target.value)}
          className={styles.filterSelect}
        >
          <option value="all">All Departments</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.activityFeed}>
        <h3 className={styles.sectionTitle}>Recent Activity</h3>
        <div className={styles.activityList}>
          <div className={styles.activityItem}>
            <div className={styles.activityIcon}>🔐</div>
            <div className={styles.activityContent}>
              <p>
                <strong>John Doe</strong> logged in from MacBook Pro
              </p>
              <span className={styles.activityTime}>2 minutes ago</span>
            </div>
          </div>
          <div className={styles.activityItem}>
            <div className={styles.activityIcon}>📄</div>
            <div className={styles.activityContent}>
              <p>
                <strong>Sarah Smith</strong> accessed project files
              </p>
              <span className={styles.activityTime}>15 minutes ago</span>
            </div>
          </div>
          <div className={styles.activityItem}>
            <div className={styles.activityIcon}>💻</div>
            <div className={styles.activityContent}>
              <p>
                <strong>Mike Johnson</strong> started remote session
              </p>
              <span className={styles.activityTime}>1 hour ago</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.staffTable}>
          <thead>
            <tr>
              <th>Staff Member</th>
              <th>Department</th>
              <th>Role</th>
              <th>Status</th>
              <th>Location</th>
              <th>Login Time</th>
              <th>Last Activity</th>
              <th>Sessions Today</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStaff.map((member) => (
              <tr key={member.id}>
                <td>
                  <div className={styles.memberInfo}>
                    <div className={styles.avatar}>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className={styles.memberName}>{member.name}</div>
                      <div className={styles.memberEmail}>{member.email}</div>
                    </div>
                  </div>
                </td>
                <td>{member.department}</td>
                <td>{member.role}</td>
                <td>
                  <span className={styles.statusBadge} style={{ backgroundColor: getStatusColor(member.status) }}>
                    {member.status}
                  </span>
                </td>
                <td>{member.location}</td>
                <td>{member.loginTime}</td>
                <td>{member.lastActivity}</td>
                <td className={styles.sessionsCount}>{member.sessionsToday}</td>
                <td>
                  <div className={styles.actions}>
                    <button className={styles.actionButton}>View</button>
                    <button className={styles.actionButton}>Track</button>
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
