import './App.css'
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/home"

const router = createBrowserRouter([
  { path: "", element: <Home />, errorElement: <><h1>You Lost? 🫠</h1><a href="/" className='btn'>Head home</a></> },
])

export default router
