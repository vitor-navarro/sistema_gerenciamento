import { useState } from 'react'

import styles from './styles.module.scss'

interface UserInputProps {
    onChangeFunction: (user: string) => void;
    user: string;
}

export default function UserInput({onChangeFunction, user}: UserInputProps){
    
    if (user === undefined) {
        user = '';
    }

    const handleChange = (e:any) =>{
        if (onChangeFunction){
            onChangeFunction(e.target.value)
        }
    }

    return(
        <div className={styles.div}> 
            <label>Usuário</label>
            <input 
            required 
            type='text'
            placeholder="Email"
            onChange={handleChange}
            value={user}
            />
        </div>
    )
}