import { Router, Route, Routes } from "react-router-dom"
import NavBar from "./components/common/NavBar"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"


function App() {

  return (
    <>
      <div className="flex min-h-screen w-screen flex-col">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/seller-signup" element={<SignUp/>}/>
          <Route path="/seller-login" element={<Login/>}/>

        </Routes>

      </div>
    </>
  )
}

export default App
