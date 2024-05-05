import { BrowserRouter, Routes, Route, Router } from "react-router-dom"
import HomePage from './pages/Home'
import Products from './pages/Products'
import NoPage from "./pages/404"
import LoginPg from "./pages/Login"
import SignUp from "./pages/SignUp"
import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<LoginPg />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
