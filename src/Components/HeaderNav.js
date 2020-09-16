import React from 'react'
import { MdExitToApp } from 'react-icons/md'

import LogoInstagram from '../Assets/instagram-logo.png'

function HeaderNav({ cleanUserId }) {   

    function logoutHandler() {
        cleanUserId()
        localStorage.clear()       
    }

    return (
        <header>
            <nav>
                <img src={LogoInstagram} alt='Logo do Instagram'/>                
                <MdExitToApp size={20} onClick={logoutHandler}/>                
            </nav>
        </header>
    )
}

export default HeaderNav
