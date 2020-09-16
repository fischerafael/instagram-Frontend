import React from 'react'
import { Link } from 'react-router-dom'

function BottomNavLoggedOut() {
    return (
        <footer>
            <nav>
                <div>
                    <p>Não possui uma conta ainda?</p>
                    <Link to='/register'>Inscreva-se!</Link> 
                </div>                                                        
            </nav>
        </footer>
    )
}

export default BottomNavLoggedOut
