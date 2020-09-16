import React from 'react'

function InputStandard({ title, type, state, setState }) {
    return (
        <div className='input-field'>
            <label htmlFor={title}>{title}</label>
            <input 
                id={title} 
                type={type} 
                placeholder={`Preencha o campo ${title.toLowerCase()}`} 
                value={state}
                onChange={setState}    
                autoComplete='no'            
            />
        </div>
    )
}

export default InputStandard
