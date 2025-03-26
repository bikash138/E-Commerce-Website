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
import Admin from './pages/admin/Admin'
import { sellerSidebarLinks } from './data/sidebarLinks'
import AdminDashboard from './components/admin/Dashboard/AdminDashboard'
import Sellers from './components/admin/Dashboard/Sellers'
import Customers from './components/admin/Dashboard/Customers'
import Categories from './components/admin/Dashboard/Categories'
import Analytics from './components/admin/Dashboard/Analytics'
import { useSelector } from 'react-redux'
import CustomerDashboard from './pages/customer/CustomerDashboard'
import Settings from './pages/customer/DashboardPages/Settings'
import Help from './pages/customer/DashboardPages/Help'
import Orders1 from './pages/customer/DashboardPages/Orders1'
import Profile1 from './pages/customer/DashboardPages/Profile1'




const App = () => {
  const {user} = useSelector((state)=>state.profile)
  
return (
    <div className="flex min-h-screen w-screen flex-col">

      <NavBar role={user ? user.role : null}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
        {/* Login and SignUp Route For User */}
        
          <Route
            path='/seller/login'
            element={
              <OpenRoute role={"Seller"}>
                <Login role={"Seller"}/>
              </OpenRoute>
            }
          />
          <Route
            path='/seller/signup'
            element={
              <OpenRoute >
                <SignUp role={"Seller"}/>
              </OpenRoute>
            }
          />
          <Route
            path='/customer/login'
            element={
              <OpenRoute role={"Customer"}>
                <Login role={"Customer"}/>
              </OpenRoute>
            }
          />
          <Route
            path='/customer/signup'
            element={
              <OpenRoute>
                <SignUp role={"Customer"}/>
              </OpenRoute>
            }
          />
          <Route
            path='/admin/login'
            element={
              <OpenRoute role={"Admin"}>
                <Login role={"Admin"}/>
              </OpenRoute>
            }
          />
          <Route
            path='/admin/signup'
            element={
              <OpenRoute>
                <SignUp role={"Admin"}/>
              </OpenRoute>
            }
          />
        

        {/* Private Route for Admin */}
        {user?.role === 'Admin' && (
          <Route
            element={
              <PrivateRoute>
                <Admin/>
              </PrivateRoute>
            }
          >
            <Route path='/dashboard/analytics' element={<Analytics/>}/>
            <Route path='/dashboard/sellers' element={<Sellers/>}/>
            <Route path='/dashboard/customers' element={<Customers/>}/>
            <Route path='/dashboard/categories' element={<Categories/>}/>
          </Route>
        )}
        

        {/* Private Route for Seller */}
        {user?.role === 'Seller' && (
          <Route
            element={
              <PrivateRoute>
                <Dashboard/>
              </PrivateRoute>
            }
          >
            <Route path='/dashboard/profile' element={<Profile/>}/>
            <Route path='/dashboard/add-items' element={<AddItems/>}/>
            <Route path='/dashboard/listed-items' element={<ListItems/>}/>
            <Route path='/dashboard/orders' element={<Orders/>}/>
            
          </Route>
        )}

        {/* Private Route for Customer */}
        {user?.role === 'Customer' && (
          <Route
            element={
              <PrivateRoute>
                <CustomerDashboard/>
              </PrivateRoute>
            }
          >
            <Route path='customer/profile' element={<Profile1/>}/>
            <Route path='customer/orders' element={<Orders1/>}/>
            <Route path='customer/settings' element={<Settings/>}/>
            <Route path='customer/help' element={<Help/>}/>
            
          </Route>
        )}
        
        
      </Routes>
    </div>
  )
}

export default App