import React from 'react'
import { Link } from 'react-router-dom'

function BottomNavLoggedOutLogin() {
    return (
        <footer>
            <nav>
                <div>
                    <p>Já possuo uma conta</p>
                    <Link to='/'>Entrar</Link> 
                </div>                                                        
            </nav>
        </footer>
    )
}

export default BottomNavLoggedOutLogin