import React from 'react'
import HeaderNav from '../Components/HeaderNav'
import BottomNav from '../Components/BottomNav'
import PostContainer from '../Components/PostContainer'

function Post({ cleanUserId }) {
    return (
        <>
            <HeaderNav cleanUserId={cleanUserId} />
            <PostContainer />
            <BottomNav />
        </>
    )
}

export default Post
