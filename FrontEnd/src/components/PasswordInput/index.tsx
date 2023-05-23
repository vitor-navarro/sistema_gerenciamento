import { useState } from 'react'

import {AiFillEye} from 'react-icons/ai'
import {RxEyeClosed} from 'react-icons/rx'

import ErrorSpan from '../ErrorSpan';

import styles from './styles.module.scss'
import password_validator from '@/utils/validators/password_format_validator';

interface propsInterface {
    onChangeFunction: (password: string) => void;
    password: string;
    error?: boolean;
    errorMessage?: string;
    isConfirmInput?: boolean;
}

export default function PasswordInput(props:propsInterface){
    
    const [passwordError, setPasswordError] = useState(false);

    let error = props.error === undefined ? false : props.error
    let password = props.password
    
    const onChangeFunction = props.onChangeFunction

    const[showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = (e:any) => {
        e.preventDefault()

        setShowPassword(!showPassword)
    }
    
    const handleChange = (e:any) =>{
        const newPassword = e.target.value;
        const isValidPassword = password_validator(newPassword)

        setPasswordError(!isValidPassword)

        onChangeFunction(newPassword);
    }

    return(
        <div className={styles.div}> 
            <div>
                <label htmlFor="password">Senha*</label>
                <ErrorSpan error = { passwordError || error }>{props.errorMessage !== '' ? props.errorMessage :"Senha Inválida"}</ErrorSpan>
            </div>


            <div className={styles.passwordContainer}> 
                <input 
                required 
                type={showPassword ? 'text' :'password'}
                placeholder="Senha"
                id="password"
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