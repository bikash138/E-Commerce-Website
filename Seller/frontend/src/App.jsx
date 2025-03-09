import React, { useEffect } from 'react'
import NavBar from './components/common/NavBar'
import axios from "axios"
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Contact from './pages/Contact'
import About from './pages/About'
import Catalog from './pages/Catalog'
import OpenRoute from "./components/core/Auth/OpenRoute"
import Dashboard from './pages/Dashboard'
import PrivateRoute from "./components/core/Auth/PrivateRoute"
import AddItems from './components/core/Dashboard/AddItems'
import ListItems from './components/core/Dashboard/ListItems'
import Orders from './components/core/Dashboard/Orders'
import Profile from './components/core/Dashboard/Profile'




const App = () => {

  
return (
    <div className="flex min-h-screen w-screen flex-col">

      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
        {/* Open Route for Non Logged In User */}
        <Route
          path='/login'
          element={
            <OpenRoute>
              <Login/>
            </OpenRoute>
          }
        />
        <Route
          path='/signup'
          element={
            <OpenRoute>
              <SignUp/>
            </OpenRoute>
          }
        />

        {/* Private Route */}
        <Route
          element={
            <PrivateRoute>
              <Dashboard/>
            </PrivateRoute>
          }
        >
          <Route path='/dashboard-profile' element={<Profile/>}/>
          <Route path='/add-items' element={<AddItems/>}/>
          <Route path='/dashboard-listed-items' element={<ListItems/>}/>
          <Route path='/dashboard-orders' element={<Orders/>}/>
        </Route>
        
      </Routes>
    </div>
  )
}

export default App