import styles from "./DashboardCard.module.css"

interface DashboardCardProps {
  title: string
  value: string
  change: string
  changeType: "positive" | "negative" | "neutral"
  icon: string
}

export default function DashboardCard({ title, value, change, changeType, icon }: DashboardCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.cardInfo}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardValue}>{value}</p>
        </div>
        <div className={styles.cardIcon}>{icon}</div>
      </div>

      <div className={styles.cardFooter}>
        <span className={`${styles.change} ${styles[changeType]}`}>{change}</span>
        <span className={styles.changeLabel}>from last period</span>
      </div>
    </div>
  )
}
