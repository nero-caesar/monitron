export default function QuickActionsBar() {
  return (
    <div style={{ display: "flex", gap: "1rem", padding: "1rem 2rem", background: "#fff", borderBottom: "1px solid #eee" }}>
      <button style={{ padding: "0.5rem 1.25rem", borderRadius: 6, background: "#00bcd4", color: "#fff", border: "none", fontWeight: 600, cursor: "pointer" }}>Add Device</button>
      <button style={{ padding: "0.5rem 1.25rem", borderRadius: 6, background: "#ff9800", color: "#fff", border: "none", fontWeight: 600, cursor: "pointer" }}>Send Alert</button>
      <button style={{ padding: "0.5rem 1.25rem", borderRadius: 6, background: "#4caf50", color: "#fff", border: "none", fontWeight: 600, cursor: "pointer" }}>Invite Staff</button>
    </div>
  )
} 