import { useState } from 'react'

import {AiFillEye} from 'react-icons/ai'
import {RxEyeClosed} from 'react-icons/rx'

import styles from './styles.module.scss'

interface PasswordInputProps {
    onChangeFunction: (password: string) => void;
    password: string;
}

export default function PasswordInput({onChangeFunction, password}: PasswordInputProps){

    if(password === undefined){
        password = ''
    }

    const[showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => setShowPassword(!showPassword)
    
    const handleChange = (e:any) =>{

        if (onChangeFunction){
            onChangeFunction(e.target.value)
        }
    }

    return(
        <div className={styles.div}> 
            <label>Senha</label>

            <div className={styles.passwordContainer}> 
                <input 
                required 
                type={showPassword ? 'text' :'password'}
                placeholder="Senha"
                onChange={handleChange}
                value={password}
                />

            <button onClick={toggleShowPassword}>
                <span>
                {showPassword ? (
                    <AiFillEye/>
                ) : (
                    <RxEyeClosed/>
                )}
                </span>
            </button>
            </div>
        </div>
    )
}