import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/home/Home'
import Hotel from '../pages/hotel/Hotel'
import List from '../pages/list/List'
import Login from '../pages/login/Login'

const Router = () => {
  return (
    <div>
            <Routes >
                <Route path="/" exact element={<Home />}/>;
                <Route path="/list" exact element={<List />}/>;
                <Route path="/hotels" exact element={<Hotel />}/>;
                <Route path="/hotels/:id" element={<Hotel/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes >
    </div>
  )
}

export default Router