import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import api from '../Services/api'
import DefaultImage from '../Assets/default-image.png'

import InputStandart from '../Components/InputStandart'

function PostContainer() {
    const [user] = useState(localStorage.getItem('InstagramUserId'))

    const [picture, setPicture] = useState('')
    const [description, setDescription] = useState('')

    const history = useHistory()

    async function postImage(e) {
        e.preventDefault()   
        const data = {
            picture,
            description
        }     
        try {            
            await api.post('posts', data, {
                headers: {
                    user
                }
            })
            history.push('/feed')
        } catch(err) {
            alert('Erro ao postar foto')
        }
    }

    return (
        <main className='post-container'>
            {picture ? 
                <img src={picture} alt={description} /> :
                <img src={DefaultImage} alt='Insira uma nova imagem' /> 
            }            
            <form>
                <h1>Postar nova foto</h1>
                <fieldset>
                    <InputStandart 
                        title='Insira o link da foto' 
                        type='text'
                        state={picture}
                        setState={e=>setPicture(e.target.value)}
                    />
                    <InputStandart 
                        title='Descrição da foto' 
                        type='text'
                        state={description}
                        setState={e=>setDescription(e.target.value)}
                    />
                </fieldset>                
                <button onClick={postImage}>Postar Imagem</button>
            </form>
        </main>
    )
}

export default PostContainer
