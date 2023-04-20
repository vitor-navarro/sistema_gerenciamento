import { useState } from 'react'

import ButtonSubmit from '../ButtonSubmit'
import {AiFillEye} from 'react-icons/ai'
import {RxEyeClosed} from 'react-icons/rx'

import styles from './styles.module.scss'


export function Login(){

    const[user,setUser] = useState("")
    const[password,setPassword] = useState("")
    const[showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => setShowPassword(!showPassword)

    function login(e:any){
        e.preventDefault()
    }
    
    return(
        <>
        
        <div className={styles.formLoginContainer}>

        <h1>Bem vindo</h1>
            <div className={styles.formContent}>
                <form onSubmit={login}>
                    <div> 
                        <label>Usuário</label>
                        <input 
                        required 
                        type='text'
                        placeholder="Email"
                        onChange={e => setUser(e.target.value)}
                        />
                    </div>

                    <div > 
                        <label>Senha</label>

                        <div className={styles.passwordContainer}> 
                            <input 
                            required 
                            type={showPassword ? 'text' :'password'}
                            placeholder="Senha"
                            onChange={e => setPassword(e.target.value)}
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


                    <div className={styles.buttonSubmitContainer}>
                        <ButtonSubmit>Entrar</ButtonSubmit>
                    </div>

                </form>
            </div>
        </div>
        
        
        </>

    )
}