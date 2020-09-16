import React from 'react'

import HeaderNav from '../Components/HeaderNav'
import FeedContainer from '../Components/FeedContainer'
import BottomNav from '../Components/BottomNav'

function Feed({ cleanUserId }) {
    return (
        <>
            <HeaderNav cleanUserId={cleanUserId} />
            <FeedContainer /> 
            <BottomNav />
        </>
    )
}

export default Feed
