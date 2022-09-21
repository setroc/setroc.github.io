import { Route, Routes } from "react-router-dom"
import { Navbar } from "../Navbar/Navbar"
import { Proyectos } from "../Proyectos/Proyectos"
import { Sobremi } from "../SobreMi/Sobremi"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Sobremi />} />
        <Route path="projects" element={<Proyectos />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  )
}

const Error404 = () => {
  return (
    <>
      <h2>Error 404 Página no existe</h2>
    </>
  )
}