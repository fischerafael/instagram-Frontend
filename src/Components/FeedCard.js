import React, { useState } from 'react'

import api from '../Services/api'

import OutHeart from '../Assets/outline-heart.svg'
import FillHeart from '../Assets/filled-heart.svg'

function FeedCard({ picture, description, likes, user, id, interaction }) {
    const [userId] = useState(localStorage.getItem('InstagramUserId'))
    
    async function likeAPost() {        
        try {
            await api.post(`posts/${id}/like`, null, {
                headers: {
                    user_id: userId
                }
            })
            interaction()
            //alert('Foto curtida com sucesso!')
        } catch(err) {
            alert('Impossível curtir postagem')
        }
    }

    async function unlikeAPost() {
        try {
            await api.post(`posts/${id}/dislike`, null, {
                headers: {
                    user_id: userId
                }
            })
            interaction()
            //alert('Foto descurtida com sucesso!')
        } catch(err) {
            alert('Impossível descurtir postagem')
        }
    }

    return (
        <div className='card-container'>
            <div className='card-header'>
                <img src={user.avatar} alt='profile'/>
                <h2>{user.username}</h2>
            </div>
            <div className='card-photo'>
                <img 
                    src={picture} 
                    alt={description} 
                />
            </div>
            <div className='card-footer'>
                <div className='card-metadata'>                    
                    { likes.includes(userId) ? 
                        <img 
                            src={FillHeart} 
                            alt='Likes'
                            onClick={()=>{unlikeAPost()}} 
                        /> : 
                        <img 
                            src={OutHeart} 
                            alt='Likes' 
                            onClick={()=>{likeAPost()}}
                        /> 
                    }                    
                    {likes.length > 1 ? 
                        <h3>{likes.length} pessoas gostaram</h3> : likes.length === 1 ?
                        <h3>1 pessoa gostou</h3> :
                        null
                    }                    
                </div>
                <div className='card-info'>
                    <p><a href='/feed'>{user.username}</a> {description}</p>
                </div>
            </div>                
        </div>
    )
}

export default FeedCard
