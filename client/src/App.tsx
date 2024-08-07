import "./App.css"
import Layout from "./layout/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { routes } from "./routes/routes"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout theme="light">
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
