import React from 'react'

import HeaderNav from '../Components/HeaderNav'
import ProfileContainer from '../Components/ProfileContainer'
import BottomNav from '../Components/BottomNav'

function Profile({ cleanUserId }) {
    return (
        <>
            <HeaderNav cleanUserId={cleanUserId} />
            <ProfileContainer />
            <BottomNav />
        </>
    )
}

export default Profile
