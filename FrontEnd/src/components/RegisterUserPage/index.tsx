import UserInput from "../UserInput"
import EmailInput from "../EmailInput"
import PasswordInput from "../PasswordInput"
import ButtonSubmit from "../ButtonSubmit"

import user_validator from "@/utils/validators/user_validator"
import email_validator from "@/utils/validators/email_validator"

import { useState } from 'react'
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai"

import styles from "./styles.module.scss"

export function RegisterUserPage(){
    const[geralError,setGeralMessageError] = useState("")

    const[user,setUser] = useState("")
    const[userError,setUserError] = useState(false)
    const[userErrorMessage, setUserErrorMessage] = useState("")

    const[email,setEmail] = useState("")
    const[emailError,setEmailError] = useState(false)
    const[emailErrorMessage, setEmailErrorMessage] = useState("")

    const[password,setPassword] = useState("")
    const[confirmPassword, setConfirmPassword] = useState("")
    const[passwordError, setPasswordError] = useState(false)
    const[passwordErrorMessage, setPasswordErrorMessage] = useState("")
    const[isPasswordValid, setIsPasswordValid] = useState(false)

    const handleUserChange = (value:string) => {
        setUser(value);
    };

    const handleEmailChange = (value:string) => {
        setEmail(value);
    };

    const handlePasswordChange = (value:string) => {
        setPassword(value);
        setIsPasswordValid(value.length >= 7)
    };
    
    const handleConfirmPasswordChange = (value:string) => {

        setConfirmPassword(value);

        setTimeout(() => {
            if (!(password === value)) {
              setPasswordErrorMessage("As senhas não são idênticas");
              setPasswordError(true);
            } else {
              setPasswordErrorMessage("");
              setPasswordError(false);
            }
          }, 100);
    };

    async function register(e:any){
        e.preventDefault()
        
        setGeralMessageError("")
        setUserError(false)
        setEmailError(false)
        setPasswordError(false)

        if(!user || !email){
            setGeralMessageError("Preencha o Usuário e o email")
            return
        }

        const userExist = await user_validator(user)
        .then(result => {
            if(result.success){
                setUserErrorMessage("Usuário já foi cadastrado")
                setUserError(true)
                return false
            }
            return true
        })
        .catch(error => {
            setGeralMessageError("Erro ao buscar usuário")
            return false
        });

        const emailExist = await email_validator(email).then(result => {
            if(result.success){
                setEmailErrorMessage("Email já foi cadastrado")
                setEmailError(true)
                return false
            } 
            return true
        })
        .catch(error => {
            setGeralMessageError("Erro ao buscar Email")
            return false
        });

        if(userExist && emailExist && !passwordError){
            console.log("Cadastrar")
        }
    }

    return(

        <div className={styles.formLoginContainer}>
            <h1>Registro</h1>
            <div className={styles.formContent}>
                <form onSubmit={register}>

                    <UserInput onChangeFunction={ handleUserChange } user = { user } isRequired={true}  error = {userError} errorMessage={userErrorMessage}>Usuário</UserInput>
                    <EmailInput onChangeFunction={ handleEmailChange } email = { email } isRequired={true} error = {emailError} errorMessage={emailErrorMessage}>Email</EmailInput>
                    <PasswordInput onChangeFunction={ handlePasswordChange } password={ password }  error = {passwordError} errorMessage={ passwordErrorMessage }></PasswordInput>
                    <PasswordInput onChangeFunction={ handleConfirmPasswordChange } password={ confirmPassword }></PasswordInput>
                    
                    <div className={`${styles.passwordRequirements} ${isPasswordValid ? styles.valid : ''}`}>
                        <div>
                            {isPasswordValid ? <AiOutlineCheck className={styles.icon} /> : <AiOutlineClose className={styles.icon} />}
                            <span>A senha deve ter no mínimo 7 caracteres</span>
                        </div>
                    </div>

                    <div className={styles.spanDiv}>
                        <span>{geralError ? geralError : ""}</span>
                    </div>

                    <div className={styles.buttonSubmitContainer}>
                        <ButtonSubmit>Cadastrar</ButtonSubmit>
                    </div>

                </form>
            </div>
        </div>
    )
}