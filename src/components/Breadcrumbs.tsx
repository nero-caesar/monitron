import { usePathname } from "next/navigation"

export default function Breadcrumbs() {
  const pathname = usePathname()
  const parts = pathname.split("/").filter(Boolean)
  return (
    <nav style={{ padding: "0.5rem 2rem", background: "#f9fafb", fontSize: "0.95rem" }} aria-label="Breadcrumb">
      {parts.length === 0 ? (
        <span>Dashboard</span>
      ) : (
        <>
          <span>Dashboard</span>
          {parts.map((part, idx) => (
            <span key={idx}>
              {" / "}
              {part.charAt(0).toUpperCase() + part.slice(1)}
            </span>
          ))}
        </>
      )}
    </nav>
  )
} 