import React from 'react'

import LogoInstagram from '../Assets/instagram-logo.png'

function HeaderNavLoggedOut() {
    return (
        <header>
            <nav className='nav-loggedout'>
                <img src={LogoInstagram} alt='Logo do Instagram'/>                
            </nav>
        </header>
    )
}

export default HeaderNavLoggedOut
