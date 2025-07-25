"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import styles from "./forgot-password.module.css"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate password reset email sending
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.logoSection}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>🏢</span>
              <h1 className={styles.logoText}>CompanyMonitor</h1>
            </div>
          </div>

          <div className={styles.successMessage}>
            <div className={styles.successIcon}>✅</div>
            <h2 className={styles.successTitle}>Check Your Email</h2>
            <p className={styles.successText}>
              We've sent a password reset link to <strong>{email}</strong>
            </p>
            <p className={styles.successSubtext}>If you don't see the email, check your spam folder or try again.</p>
          </div>

          <div className={styles.footer}>
            <Link href="/login" className={styles.backLink}>
              ← Back to Login
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logoSection}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>🏢</span>
            <h1 className={styles.logoText}>CompanyMonitor</h1>
          </div>
          <p className={styles.subtitle}>Reset Your Password</p>
        </div>

        <div className={styles.description}>
          <p>Enter your email address and we'll send you a link to reset your password.</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="admin@company.com"
              required
            />
          </div>

          <button type="submit" className={styles.resetButton} disabled={isLoading}>
            {isLoading ? "Sending Reset Link..." : "Send Reset Link"}
          </button>
        </form>

        <div className={styles.footer}>
          <p>
            Remember your password?{" "}
            <Link href="/login" className={styles.link}>
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
