import React from 'react'
import Home from './Home'
import Grills from './Grills'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../Components/Static/Navbar'
import MobileNavbar from '../Components/Static/MobileNav'
import Footer from '../Components/Static/Footer'
import "./Layout.css"
import SendForm from '../Components/Private/SendForm'
import ShowAllPost from '../Components/Private/ShowAllPost'


const Layout =()=>{
    return(
        <div>
        <div className='DesktopNav'>
        <Navbar />
        </div>
        <div className='MobileNav'>
        <MobileNavbar />
        </div>

        <Routes>
        <Route excet path='/' element={<Home />}/>
        <Route excet path="/grills" element={<Grills />} />
        <Route excet path='/add-products' element={<SendForm />}/>
        <Route excet path='/all-products' element={<ShowAllPost />}/>
        </Routes>
        <div>
        <Footer />
        </div>
        </div>
    )
}

export default Layout