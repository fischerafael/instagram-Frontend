import React from 'react'

import HeaderNavLoggedOut from '../Components/HeaderNavLoggedOut'
import BottomNavLoggedOutLogin from '../Components/BottomNavLoggedOutLogin'
import RegisterMainSection from '../Components/RegisterMainSection'

function Register({ updateUserId }) {
    return (
        <>
            <HeaderNavLoggedOut />
            <RegisterMainSection updateUserId={ updateUserId }/>
            <BottomNavLoggedOutLogin />
        </>
    )
}

export default Register
