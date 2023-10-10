import React from 'react'
import { Navigate } from 'react-router-dom'

const AuthRoute = ({children}) => {
    if(!localStorage.getItem('token')) {
        return children
    }
    return <Navigate to={'/dashboard'} />
}

export default AuthRoute