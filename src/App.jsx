import { BrowserRouter, Routes, Route, Router } from "react-router-dom"
import HomePage from './pages/Home'
import Products from './pages/Products'
import NoPage from "./pages/NoPage"
import LoginPg from "./pages/Login"
import SignUp from "./pages/SignUp"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Login" element={<LoginPg />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
