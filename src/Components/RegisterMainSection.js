import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../Services/api'

import login from '../Utils/login'

import InputStandard from '../Components/InputStandart'

import HeroImg from '../Assets/hero-img.png'

function RegisterMainSection({ updateUserId }) {
    const [show, setShow] = useState(1)
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [site, setSite] = useState('')
    const [avatar, setAvatar] = useState('')

    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function loadFirstPage(e) {
        e.preventDefault()
        setShow(1)        
    }

    function loadSecondPage(e) {
        e.preventDefault()
        setShow(2)        
    }

    async function registrationHandler(e) {
        e.preventDefault()
        setLoading(true)
        try {            
            const response = await api.post('users', {
                username,
                password,
                name,
                description,
                site,
                avatar
            })            
            alert('Usuário cadastro com sucesso!')
            
            login(response) 
            
            const { data } = response

            updateUserId(data.data._id)

            history.push('/feed')
        } catch(err) {
            alert('Erro ao cadastrar usuário, tente novamente')
            setLoading(false)
        }
    }

    return (
        <main>
            <div className='form-login-register'>                
                <img src={HeroImg} alt='Logo do Instagram'/>
                <form>                     
                    {loading ?
                        <h1>Criando usuário...</h1>
                    :
                    <>
                        <h1>Cadastrar-se</h1>
                        {show === 1? 
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
                            <InputStandard 
                                title='Nome' 
                                type='text'
                                state={name}
                                setState={e=>setName(e.target.value)}
                            />                                                                               
                        </fieldset> :
                        <fieldset>
                            <InputStandard 
                                title='Descrição' 
                                type='text'
                                state={description}
                                setState={e=>setDescription(e.target.value)}
                            />
                            <InputStandard 
                                title='Site' 
                                type='text'
                                state={site}
                                setState={e=>setSite(e.target.value)}
                            />
                            <InputStandard 
                                title='Perfil' 
                                type='text'
                                state={avatar}
                                setState={e=>setAvatar(e.target.value)}
                            />                                                       
                        </fieldset>
                        }                   
                        <div className='form-navigation'>
                            {show === 1 ? 
                                <>
                                    <button 
                                        style={{ background: '#0095f6' }} 
                                        onClick={loadFirstPage}
                                    >1</button>
                                    <button                                      
                                        onClick={loadSecondPage}
                                    >2</button>
                                </> :
                                <>
                                <button                                 
                                    onClick={loadFirstPage}
                                >1</button>
                                <button 
                                    style={{ background: '#0095f6' }}                                     
                                    onClick={loadSecondPage}
                                >2</button>
                            </>
                            }
                            {avatar && site && description && name && password && username && <button 
                                className='submit'
                                onClick={registrationHandler}
                            >Finalizar</button>}                                                  
                        </div>
                    </>
                    }                                                           
                </form>                
            </div>
        </main>
    )
}

export default RegisterMainSection
