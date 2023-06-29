import ButtonSubmit from '../../components/ButtonSubmit'
import PasswordInput from '../../components/PasswordInput'
import RequirementsDiv from '@/components/RequirementsDiv'

import email_format_validator from '@/utils/validators/email_format_validator'
import password_validator from '@/utils/validators/password_format_validator'

import { useContext, useState } from 'react'
import Link from 'next/link'

import styles from './styles.module.scss'
import user_validator from '@/utils/validators/user_validator'
import email_validator from '@/utils/validators/email_validator'
import { AuthContext } from '../../../contexts/AuthContext'

export function LoginPage() {

    const { signIn } = useContext(AuthContext)

    const [geralError, setGeralMessageError] = useState("")

    const [loginUser, setLoginUser] = useState("")
    const [loginUserError, setLoginUserError] = useState(true)
    const [loginUserInputError, setLoginUserInputError] = useState(false)
    const [loginUserInputErrorMessage, setLoginUserInputErrorMessage] = useState("")

    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState(false)
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("")
    const [isPasswordValid, setIsPasswordValid] = useState(false)

    const [keepConnected, setkeepConnected] = useState(false)

    const handlekeepConnected = (e: any) => {
        setkeepConnected(!keepConnected)
    }

    const handleUserChange = (e: any) => {
        setGeralMessageError("")

        const value = e.target.value;
        setLoginUser(value);

        if (value.length < 3) {
            setLoginUserError(true)
            setLoginUserInputError(true)
        } else if (value.includes("@") && !email_format_validator(value)) {
            setLoginUserInputError(true)
            setLoginUserInputErrorMessage("Formato do email inválido")
        }
        else {
            setLoginUserError(false)
            setLoginUserInputError(false)

        }

    };

    const handlePasswordChange = (value: string) => {
        setPassword(value);
        setIsPasswordValid(value.length >= 7)
    };

    async function handleLogin(e: any) {
        e.preventDefault()

        setGeralMessageError("")
        setLoginUserError(false)
        setLoginUserInputError(false)
        setPasswordError(false)

        if (!loginUser) {
            setLoginUserError(true)
            setGeralMessageError("Preencha o Login com usuário ou email")
            return
        }

        if (!password || !password_validator(password)) {
            setLoginUserError(loginUserError)
            return
        }

        let userIsValid = false
        let userExist = false

        if (email_format_validator(loginUser)) {
            userIsValid = true
            userExist = await email_validator(loginUser).then(result => {
                if (!result.success) {
                    setLoginUserInputErrorMessage("Email não cadastrado")
                    setLoginUserInputError(true)
                    return false
                }
                return true
            })
                .catch(error => {
                    setGeralMessageError("Erro ao buscar Email")
                    return false
                });
        } else if (loginUser.length >= 3) {
            userIsValid = true
            userExist = await user_validator(loginUser).then(result => {
                if (!result.success) {
                    setLoginUserInputErrorMessage("Usuário não possui cadastro")
                    setLoginUserInputError(true)
                    return false
                }
                return true
            })
                .catch(error => {
                    setGeralMessageError("Erro ao buscar usuário")
                    return false
                });

        } else {
            setLoginUserError(true)
            return
        }

        const passwordIsValid = password_validator(password)

        if (userIsValid && passwordIsValid && userExist) {

            const userObject = {
                user: loginUser,
                password: password,
                keepConnected: keepConnected
            }

            await signIn(userObject).then(result => {
                setGeralMessageError(result)
            }).catch(error => {
                setGeralMessageError("Erro interno do servidor")
            })
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
                            <span className={styles.errorSpan}>{loginUserInputError ? loginUserInputErrorMessage : ""}</span>
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
                            <input type="checkbox" id="remember-me" onChange={handlekeepConnected} checked={keepConnected} />
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
                            <ButtonSubmit onClick={handleLogin}>Entrar</ButtonSubmit>
                        </div>

                        <div className={styles.pDiv}>
                            <p><Link href="/registerUser">Não possui cadastro? Clique aqui</Link></p>
                        </div>

                    </form>
                </div>
            </div>
        </>

    )
}