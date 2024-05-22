import React from 'react'
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoutes from './components/PrivateRoutes';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';
import Listing from './pages/Listing';


const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route   path='/' element={<Home />}/>
        <Route   path='/sign-in' element={<SignIn />}/>
        <Route   path='/sign-up' element={<SignOut />}/>
        <Route   path='/about' element={<About />}/>
        <Route   element={<PrivateRoutes />}>
        <Route   path='/profile' element={<Profile />}/>
        <Route   path='/listing/:listingId' element={<Listing/>}/>
        <Route   path='/create-listing' element={<CreateListing />}/>
        <Route   path='/update-listing/:listingId' element={<UpdateListing />}/>
        </Route>
    </Routes>

</BrowserRouter>
  )
}

export default App