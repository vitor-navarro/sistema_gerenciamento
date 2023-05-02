import { useState } from 'react'

import {AiFillEye} from 'react-icons/ai'
import {RxEyeClosed} from 'react-icons/rx'

import ErrorSpan from '../ErrorSpan';

import styles from './styles.module.scss'

interface propsInterface {
    onChangeFunction: (password: string) => void;
    password: string;
    error: boolean;
}

export default function PasswordInput(props:propsInterface){

    let password = props.password
    const onChangeFunction = props.onChangeFunction

    const error = props.error

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
            <div>
                <label>Senha</label>
                <ErrorSpan error = { error }>Senha Inválida</ErrorSpan>
            </div>


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