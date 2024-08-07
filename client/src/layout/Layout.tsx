import { ReactNode } from "react"
import { Link } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { routes } from "../routes/routes"
interface LayoutProps {
  children: ReactNode
  theme: "light" | "dark"
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div>
        {routes.map((route, index) => (
          <>
            <Link key={index} to={route.path}>
              {route.title}
            </Link>
            {index !== routes.length - 1 && (
              <span style={{ marginRight: ".5rem", marginLeft: ".5rem" }}>
                |
              </span>
            )}
          </>
        ))}

        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
