import React from 'react'

import HeaderNavLoggedOut from '../Components/HeaderNavLoggedOut'
import LoginMainSection from '../Components/LoginMainSection'
import BottomNavLoggedOut from '../Components/BottomNavLoggedOut'

function Login({ updateUserId }) {   
    return (
        <>
            <HeaderNavLoggedOut />            
            <LoginMainSection updateUserId={ updateUserId }/>
            <BottomNavLoggedOut />
        </>
    )
}

export default Login
