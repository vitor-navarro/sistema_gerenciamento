import { useState } from 'react'

import ButtonSubmit from '../ButtonSubmit'
import PasswordInput from '../PasswordInput'

import styles from './styles.module.scss'
import UserInput from '../UserInput'
import userLogin from '@/services/api/user_login'


export function LoginPage(){

    const[user,setUser] = useState("")
    const[password,setPassword] = useState("")

    const handleUserChange = (value:string) => {
        setUser(value);
    };

    const handlePasswordChange = (value:string) => {
        setPassword(value);
      };

    function login(e:any){
        e.preventDefault()


        const data = {
            user,
            password
        }

        userLogin(data)

        setUser("");
        setPassword("");
    }
    
    return(
        <>
        
        <div className={styles.formLoginContainer}>

        <h1>Bem vindo</h1>
            <div className={styles.formContent}>
                <form onSubmit={login}>
                    <UserInput onChangeFunction={ handleUserChange} user = { user }></UserInput>

                    <PasswordInput onChangeFunction={ handlePasswordChange } password = { password }></PasswordInput>

                    <div className={styles.buttonSubmitContainer}>
                        <ButtonSubmit>Entrar</ButtonSubmit>
                    </div>

                </form>
            </div>
        </div>
        
        
        </>

    )
}