import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard, Signin, Signup } from '../components'
import AuthRoute from './AuthRoute'
import ProtectedRoute from './ProtectedRoute'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<AuthRoute><Signin/></AuthRoute>}/>
            <Route path='/signup' element={<AuthRoute><Signup/></AuthRoute>}/>
            <Route path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router