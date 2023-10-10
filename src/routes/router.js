import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from '../components'

const router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Dashboard/>} />
            {/* <Route path='/signin' element=}/> */}
        </Routes>
    </BrowserRouter>
  )
}

export default router