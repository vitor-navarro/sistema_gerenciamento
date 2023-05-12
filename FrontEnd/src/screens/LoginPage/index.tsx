import { useState } from 'react'

import ButtonSubmit from '../../components/ButtonSubmit'
import PasswordInput from '../../components/PasswordInput'
import EmailInput from '../../components/EmailInput'
import userLogin from '@/services/api/users/user_login'

import styles from './styles.module.scss'

export function LoginPage(){
    const[geralError,setGeralMessageError] = useState("")

    const[loginUser,setLoginUser] = useState("")
    const[loginUserError, setLoginUserError] = useState(true)
    const[loginUserErrorMessage, setLoginUserErrorMessage] = useState("")

    const[password,setPassword] = useState("")
    const[passwordError, setPasswordError] = useState(false)
    const[passwordErrorMessage, setPasswordErrorMessage] = useState("")
    const[isPasswordValid, setIsPasswordValid] = useState(false)

    const handleUserChange = (e:any) => {

        setLoginUser(e.target.value);

        if(e.target.value.length < 3){
            setLoginUserError(true)
        } else{
            setLoginUserError(false)
        }

    };

    const handlePasswordChange = (e:any) => {
        setPassword(e.target.value);
        setIsPasswordValid(e.length >= 7)
    };

    function login(e:any){
        e.preventDefault()

        const data = {
            loginUser,
            password
        }

        //userLogin(data)

        setLoginUser("");
        setPassword("");
    }
    
    return(
        <>
        
        <div className={styles.formLoginContainer}>

        <h1>Bem vindo</h1>
            <div className={styles.formContent}>
                <form onSubmit={login}>
                    <div>
                        <label>Login*</label>
                        <span>{loginUserError ? loginUserErrorMessage : ""}</span>
                        <input
                        className={styles.loginInput} 
                        onChange={ handleUserChange }
                        value={loginUser} 
                        placeholder='Usuário ou Email'>
                        </input>
                    </div>

                    <PasswordInput onChangeFunction={ handlePasswordChange } password = { password } error = {passwordError} errorMessage={ passwordErrorMessage }></PasswordInput>
                    
                    <div className={styles.radioDiv}>
                        <input type="checkbox" name="data-politic"  />
                        <label htmlFor="data-politic">Lembrar-me</label>
                    </div>

                    <div className={styles.spanDiv}>
                        <span>{geralError ? geralError : ""}</span>
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