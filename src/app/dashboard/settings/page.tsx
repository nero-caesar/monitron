"use client"

import { useState } from "react"
import styles from "./settings.module.css"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general")
  const [settings, setSettings] = useState({
    companyName: "Company Monitor Inc.",
    adminEmail: "admin@company.com",
    timezone: "UTC-5",
    language: "English",
    notifications: {
      email: true,
      push: true,
      sms: false,
    },
    security: {
      twoFactor: true,
      sessionTimeout: 30,
      passwordExpiry: 90,
    },
    monitoring: {
      realTimeAlerts: true,
      dataRetention: 365,
      autoBackup: true,
    },
  })

  const handleInputChange = (section: string, field: string, value: any) => {
    setSettings((prev) => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value,
      },
    }))
  }

  const handleSave = () => {
    // Handle save logic
    console.log("Saving settings:", settings)
    alert("Settings saved successfully!")
  }

  const tabs = [
    { id: "general", label: "General", icon: "⚙️" },
    { id: "notifications", label: "Notifications", icon: "🔔" },
    { id: "security", label: "Security", icon: "🔒" },
    { id: "monitoring", label: "Monitoring", icon: "📊" },
  ]

  return (
    <div className={styles.settingsPage}>
      <div className={styles.header}>
        <h1 className={styles.title}>Settings</h1>
        <p className={styles.subtitle}>Manage your company monitoring preferences</p>
      </div>

      <div className={styles.settingsContainer}>
        <div className={styles.sidebar}>
          <nav className={styles.tabNav}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className={styles.tabIcon}>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className={styles.content}>
          {activeTab === "general" && (
            <div className={styles.tabContent}>
              <h2 className={styles.sectionTitle}>General Settings</h2>

              <div className={styles.formGroup}>
                <label className={styles.label}>Company Name</label>
                <input
                  type="text"
                  value={settings.companyName}
                  onChange={(e) => handleInputChange("", "companyName", e.target.value)}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Admin Email</label>
                <input
                  type="email"
                  value={settings.adminEmail}
                  onChange={(e) => handleInputChange("", "adminEmail", e.target.value)}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Timezone</label>
                <select
                  value={settings.timezone}
                  onChange={(e) => handleInputChange("", "timezone", e.target.value)}
                  className={styles.select}
                >
                  <option value="UTC-8">Pacific Time (UTC-8)</option>
                  <option value="UTC-7">Mountain Time (UTC-7)</option>
                  <option value="UTC-6">Central Time (UTC-6)</option>
                  <option value="UTC-5">Eastern Time (UTC-5)</option>
                  <option value="UTC+0">UTC</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Language</label>
                <select
                  value={settings.language}
                  onChange={(e) => handleInputChange("", "language", e.target.value)}
                  className={styles.select}
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                </select>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className={styles.tabContent}>
              <h2 className={styles.sectionTitle}>Notification Preferences</h2>

              <div className={styles.toggleGroup}>
                <div className={styles.toggleItem}>
                  <div>
                    <h3 className={styles.toggleTitle}>Email Notifications</h3>
                    <p className={styles.toggleDescription}>Receive alerts and updates via email</p>
                  </div>
                  <label className={styles.toggle}>
                    <input
                      type="checkbox"
                      checked={settings.notifications.email}
                      onChange={(e) => handleInputChange("notifications", "email", e.target.checked)}
                    />
                    <span className={styles.toggleSlider}></span>
                  </label>
                </div>

                <div className={styles.toggleItem}>
                  <div>
                    <h3 className={styles.toggleTitle}>Push Notifications</h3>
                    <p className={styles.toggleDescription}>Receive real-time push notifications</p>
                  </div>
                  <label className={styles.toggle}>
                    <input
                      type="checkbox"
                      checked={settings.notifications.push}
                      onChange={(e) => handleInputChange("notifications", "push", e.target.checked)}
                    />
                    <span className={styles.toggleSlider}></span>
                  </label>
                </div>

                <div className={styles.toggleItem}>
                  <div>
                    <h3 className={styles.toggleTitle}>SMS Notifications</h3>
                    <p className={styles.toggleDescription}>Receive critical alerts via SMS</p>
                  </div>
                  <label className={styles.toggle}>
                    <input
                      type="checkbox"
                      checked={settings.notifications.sms}
                      onChange={(e) => handleInputChange("notifications", "sms", e.target.checked)}
                    />
                    <span className={styles.toggleSlider}></span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className={styles.tabContent}>
              <h2 className={styles.sectionTitle}>Security Settings</h2>

              <div className={styles.toggleGroup}>
                <div className={styles.toggleItem}>
                  <div>
                    <h3 className={styles.toggleTitle}>Two-Factor Authentication</h3>
                    <p className={styles.toggleDescription}>Add an extra layer of security to your account</p>
                  </div>
                  <label className={styles.toggle}>
                    <input
                      type="checkbox"
                      checked={settings.security.twoFactor}
                      onChange={(e) => handleInputChange("security", "twoFactor", e.target.checked)}
                    />
                    <span className={styles.toggleSlider}></span>
                  </label>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Session Timeout (minutes)</label>
                <input
                  type="number"
                  value={settings.security.sessionTimeout}
                  onChange={(e) => handleInputChange("security", "sessionTimeout", Number.parseInt(e.target.value))}
                  className={styles.input}
                  min="5"
                  max="480"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Password Expiry (days)</label>
                <input
                  type="number"
                  value={settings.security.passwordExpiry}
                  onChange={(e) => handleInputChange("security", "passwordExpiry", Number.parseInt(e.target.value))}
                  className={styles.input}
                  min="30"
                  max="365"
                />
              </div>
            </div>
          )}

          {activeTab === "monitoring" && (
            <div className={styles.tabContent}>
              <h2 className={styles.sectionTitle}>Monitoring Settings</h2>

              <div className={styles.toggleGroup}>
                <div className={styles.toggleItem}>
                  <div>
                    <h3 className={styles.toggleTitle}>Real-time Alerts</h3>
                    <p className={styles.toggleDescription}>Enable instant notifications for critical events</p>
                  </div>
                  <label className={styles.toggle}>
                    <input
                      type="checkbox"
                      checked={settings.monitoring.realTimeAlerts}
                      onChange={(e) => handleInputChange("monitoring", "realTimeAlerts", e.target.checked)}
                    />
                    <span className={styles.toggleSlider}></span>
                  </label>
                </div>

                <div className={styles.toggleItem}>
                  <div>
                    <h3 className={styles.toggleTitle}>Automatic Backup</h3>
                    <p className={styles.toggleDescription}>Automatically backup monitoring data</p>
                  </div>
                  <label className={styles.toggle}>
                    <input
                      type="checkbox"
                      checked={settings.monitoring.autoBackup}
                      onChange={(e) => handleInputChange("monitoring", "autoBackup", e.target.checked)}
                    />
                    <span className={styles.toggleSlider}></span>
                  </label>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Data Retention (days)</label>
                <input
                  type="number"
                  value={settings.monitoring.dataRetention}
                  onChange={(e) => handleInputChange("monitoring", "dataRetention", Number.parseInt(e.target.value))}
                  className={styles.input}
                  min="30"
                  max="1095"
                />
              </div>
            </div>
          )}

          <div className={styles.saveSection}>
            <button onClick={handleSave} className={styles.saveButton}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
