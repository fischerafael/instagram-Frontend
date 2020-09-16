import React, { useEffect, useState } from 'react'

import api from '../Services/api'

import ProfileHeader from '../Components/ProfileHeader'
import ProfileFeed from '../Components/ProfileFeed'

function ProfileContainer() {
    const [userId] = useState(localStorage.getItem('InstagramUserId'))
    const [userInformations, setUserInformations] = useState({})  
    const [userPosts, setUserPosts] = useState([])  

    useEffect(() => {
        async function getProfileInfo() {            
            try {
                const profileInfo = await api.get(`users/${userId}`)
                const { data } = profileInfo
                
                const userInfo = data.userInfo
                setUserInformations(userInfo)  
                
                const userPosts = data.userPosts
                setUserPosts(userPosts)
                             
            } catch(err) {
                alert('Erro ao carregar informações do perfil')
            }
        }
        getProfileInfo()
    }, [userId])

    return (
        <main className='profile-container'>
            
            <ProfileHeader 
                username={userInformations.username}
                name={userInformations.name}
                description={userInformations.description}
                site={userInformations.site}
                avatar={userInformations.avatar}
            />
            <ProfileFeed 
                userposts={userPosts}
            />
        </main>
    )
}

export default ProfileContainer
