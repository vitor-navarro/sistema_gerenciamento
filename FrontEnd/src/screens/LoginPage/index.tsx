import ButtonSubmit from '../../components/ButtonSubmit'
import PasswordInput from '../../components/PasswordInput'
import RequirementsDiv from '@/components/RequirementsDiv'

import email_format_validator from '@/utils/validators/email_format_validator'
import password_validator from '@/utils/validators/password_format_validator'

import login from "../../services/api/auth/login"

import { useState } from 'react'

import styles from './styles.module.scss'
import Link from 'next/link'

export function LoginPage() {
    const [geralError, setGeralMessageError] = useState("")

    const [loginUser, setLoginUser] = useState("")
    const [loginUserError, setLoginUserError] = useState(true)
    const [loginUserErrorMessage, setLoginUserErrorMessage] = useState("")

    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState(false)
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("")
    const [isPasswordValid, setIsPasswordValid] = useState(false)

    const [rememberMe, setRememberMe] = useState(false)

    const handleRememberMe = (e: any) => {
        setRememberMe(!rememberMe)
    }

    const handleUserChange = (e: any) => {
        setGeralMessageError("")

        const value = e.target.value;
        setLoginUser(value);

        if (value.length < 3) {
            setLoginUserError(true)
        } else if (value.includes("@") && !email_format_validator(value)) {
            setLoginUserError(true)
            setLoginUserErrorMessage("Formato do email inválido")
        }
        else {
            setLoginUserError(false)
        }

    };

    const handlePasswordChange = (value: string) => {
        setPassword(value);
        setIsPasswordValid(value.length >= 7)
    };

    async function login(e: any) {
        e.preventDefault()

        setGeralMessageError("")
        setLoginUserError(false)
        setPasswordError(false)

        if (!loginUser) {
            setGeralMessageError("Preencha o Login com usuário ou email")
            return
        }

        if (!password || !password_validator(password)) {
            return
        }

        let userIsValid = false

        if (email_format_validator(loginUser)) {
            userIsValid = true
        } else if (loginUser.length >= 3) {
            userIsValid = true
        }

        const passwordIsValid = password_validator(password)

        if (userIsValid && passwordIsValid) {

            const userObject = {
                user: loginUser,
                password: password,
                remember: rememberMe
            }

            await login(userObject) //faltou then e catch
        }
    }

    return (
        <>

            <div className={styles.formLoginContainer}>

                <h1>Bem vindo</h1>
                <div className={styles.formContent}>
                    <form>
                        <div>
                            <label htmlFor="login-input">Login*</label>
                            <span className={styles.errorSpan}>{loginUserError ? loginUserErrorMessage : ""}</span>
                            <input
                                id="login-input"
                                className={styles.loginInput}
                                onChange={handleUserChange}
                                value={loginUser}
                                placeholder='Usuário ou Email'>
                            </input>
                        </div>

                        <PasswordInput onChangeFunction={handlePasswordChange} password={password} error={passwordError} errorMessage={passwordErrorMessage}></PasswordInput>

                        <div className={styles.radioDiv}>
                            <input type="checkbox" id="remember-me" onChange={handleRememberMe} checked={rememberMe} />
                            <label htmlFor="remember-me">Lembrar-me</label>
                        </div>

                        <div>
                            <RequirementsDiv isValid={isPasswordValid}>A senha deve ter no mínimo 7 caracteres</RequirementsDiv>
                            <RequirementsDiv isValid={!loginUserError}>O Usuário deve ter no mínimo 3 caracteres</RequirementsDiv>
                        </div>

                        <div className={styles.spanDiv}>
                            <span>{geralError ? geralError : ""}</span>
                        </div>


                        <div className={styles.buttonSubmitContainer}>
                            <ButtonSubmit onClick={login}>Entrar</ButtonSubmit>
                        </div>

                        <div className={styles.pDiv}>
                            <p><Link href="/login">Não possui cadastro? Clique aqui</Link></p>
                        </div>

                    </form>
                </div>
            </div>


        </>

    )
}