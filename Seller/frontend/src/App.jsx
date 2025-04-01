import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

//Auth Route
import OpenRoute from "./components/core/Auth/OpenRoute.jsx"
import PrivateRoute from "./components/core/Auth/PrivateRoute.jsx"

//NavBar
import NavBar from './components/common/NavBar.jsx'

//Common Routes
import Home from './pages/common/Home.jsx'
import Login from './pages/common/Login.jsx'
import SignUp from './pages/common/SignUp.jsx'
import Contact from './pages/common/Contact.jsx'
import About from './pages/common/About.jsx'
import Catalog from './pages/common/Catalog.jsx'

//Admin Routes
import AdminDashboard from './pages/admin/AdminDashboard.jsx'
import Sellers from './components/admin/DashboardPages/Sellers.jsx'
import Customers from './components/admin/DashboardPages/Customers.jsx'
import Categories from './components/admin/DashboardPages/Categories.jsx'
import Analytics from './components/admin/DashboardPages/Analytics.jsx'

// Seller Routes
import SellerDashboard from './pages/seller/SellerDashboard.jsx'
import AddItems from './components/seller/DashboardPages/AddItems.jsx'
import ListItems from './components/seller/DashboardPages/ListItems.jsx'
import Orders from './components/seller/DashboardPages/Orders.jsx'
import Profile from './components/seller/DashboardPages/Profile.jsx'

//Customer Routes
import CustomerDashboard from './pages/customer/CustomerDashboard.jsx'
import Settings from './components/customer/DashboardPages/Settings.jsx'
import Help from './components/customer/DashboardPages/Help.jsx'
import Orders1 from './components/customer/DashboardPages/Orders1.jsx'
import Profile1 from './components/customer/DashboardPages/Profile1.jsx'
import ProductDetails from './components/common/ProductDetails.jsx'
import Cart from './components/customer/Cart/Cart.jsx'

const App = () => {
  const {user} = useSelector((state)=>state.profile)
  
return (
    <div className="flex min-h-screen w-screen flex-col">
    <NavBar role={user ? user.role : null}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        {/* <Route path='/about' element={<About/>}/> */}
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
        <Route path='/product/:id' element={<ProductDetails/>}/>
        
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
                <AdminDashboard/>
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
                <SellerDashboard/>
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