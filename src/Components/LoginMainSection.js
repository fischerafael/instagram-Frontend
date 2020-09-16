import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import login from '../Utils/login'

import InputStandard from '../Components/InputStandart'
import api from '../Services/api'

import HeroImg from '../Assets/hero-img.png'

function LoginMainSection({ updateUserId }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [loading, setLoading] = useState(false)

    const history = useHistory()   
    
    async function loginHandler(e) {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await api.post('login', {
                username,
                password
            })
            
            login(response)

            const { data } = response

            updateUserId(data.data._id)            

            history.push('/feed')              
        } catch(err) {
            alert('Erro ao fazer login, tente novamente')
            setLoading(false)
        }
    }

    return (
        <main>
            <div className='form-login-register'>
                <img src={HeroImg} alt='Logo do Instagram'/>
                <form>
                    {loading ?
                        <h1>Conectando...</h1> :
                        <>
                            <h1>Entrar</h1>
                            <fieldset>
                                <InputStandard 
                                    title='Usuário' 
                                    type='text'
                                    state={username}
                                    setState={e=>setUsername(e.target.value)}
                                />
                                <InputStandard 
                                    title='Senha' 
                                    type='password'
                                    state={password}
                                    setState={e=>setPassword(e.target.value)}
                                />
                            </fieldset>
                            <button onClick={loginHandler}>Conectar</button>
                        </>
                    }                    
                </form>                
            </div>
        </main>
    )
}

export default LoginMainSection
