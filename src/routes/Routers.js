import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from '../pages/Home'
import AllFoods from '../pages/AllFoods'
import FoodDetails from '../pages/FoodDetail/FoodDetail'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Profile from "../pages/Profile/Profile";
import ProfilePage from "../pages/Profile/Profile";
import ProfilePageUpdate from "../pages/Profile/ProfileUpdate";
import OrderPageUpdate from "../pages/Profile/OrderInfoUpdate";
import RecentComments from "../pages/FoodDetail/ratings-comments";
import Reviews from "../pages/FoodDetail/reviews";

const Routers = () => {
    return <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/foods/:id' element={<FoodDetails/>}>
            <Route index element={<RecentComments/>}/>
            <Route path='comments' element={<RecentComments/>}/>
            <Route path='reviews' element={<Reviews/>}/>
        </Route>
        <Route path='/foods' element={<AllFoods/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/profile' element={<ProfilePage/>}>
            <Route index element={<ProfilePageUpdate/>}/>
            <Route path='updateInfo' element={<ProfilePageUpdate/>}/>
            <Route path='updateInfoOrder' element={<OrderPageUpdate/>}/>
        </Route>

    </Routes>
}

export default Routers