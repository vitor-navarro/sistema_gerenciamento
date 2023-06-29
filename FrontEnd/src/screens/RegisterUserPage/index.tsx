import UserInput from "../../components/UserInput"
import EmailInput from "../../components/EmailInput"
import PasswordInput from "../../components/PasswordInput"
import RequirementsDiv from "@/components/RequirementsDiv"
import ButtonSubmit from "../../components/ButtonSubmit"

import user_validator from "@/utils/validators/user_validator"
import email_validator from "@/utils/validators/email_validator"

import { useState } from 'react'

import styles from "./styles.module.scss"
import addUser from "@/services/users/add_user"
import Link from "next/link"

export function RegisterUserPage(){
    const[geralError,setGeralMessageError] = useState("")

    const[user,setUser] = useState("")
    const[userError,setUserError] = useState(false)
    const[userErrorMessage, setUserErrorMessage] = useState("")
    const[isUserValid, setIsUserValid] = useState(false)

    const[email,setEmail] = useState("")
    const[emailError,setEmailError] = useState(false)
    const[emailErrorMessage, setEmailErrorMessage] = useState("")

    const[password,setPassword] = useState("")
    const[confirmPassword, setConfirmPassword] = useState("")
    const[passwordError, setPasswordError] = useState(false)
    const[passwordErrorMessage, setPasswordErrorMessage] = useState("")
    const[isPasswordValid, setIsPasswordValid] = useState(false)

    const[dataPolicy, setdataPolicy] = useState(false)

    const handledataPolicy = ()=>{
        setdataPolicy(!dataPolicy)
    }

    const handleUserChange = (value:string) => {
        setUser(value);
        setIsUserValid(value.length >= 3)
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

        if(user.length < 3){
            setGeralMessageError("Usuário deve ter no minimo 3 caracteres")
            return
        }

        const userExist = await user_validator(user)
        .then(result => {
            if(result.success){
                setUserErrorMessage("Usuário já foi cadastrado")
                setUserError(true)
                return true
            }
            return false
        })
        .catch(error => {
            setGeralMessageError("Erro ao buscar usuário")
            return true
        });

        const emailExist = await email_validator(email).then(result => {
            if(result.success){
                setEmailErrorMessage("Email já foi cadastrado")
                setEmailError(true)
                return true
            } 
            return false
        })
        .catch(error => {
            setGeralMessageError("Erro ao buscar Email")
            return true
        });

        if(password != confirmPassword){
            setPasswordErrorMessage("As senhas não são idênticas")
            setPasswordError(true);
            return
        }

        if(!dataPolicy){
            setGeralMessageError("Por favor marque a opção 'Li e concordo com a politica de tratamento de dados'")
            return
        }

        if(isUserValid && !userExist && !emailExist && isPasswordValid && dataPolicy && (password === confirmPassword)){
            const data ={
                user,
                email,
                password,
                dataPolicyCheck: dataPolicy,
            }

            addUser(data)
        }
    }

    return(

        <div className={styles.formLoginContainer}>
            <h1>Registro</h1>
            <div className={styles.formContent}>
                <form>

                    <UserInput onChangeFunction={ handleUserChange } user = { user } isRequired={true}  error = {userError} errorMessage={userErrorMessage}>Usuário</UserInput>
                    <EmailInput onChangeFunction={ handleEmailChange } email = { email } isRequired={true} error = {emailError} errorMessage={emailErrorMessage}>Email</EmailInput>
                    <PasswordInput id = {"password"} onChangeFunction={ handlePasswordChange } password={ password }  error = {passwordError} errorMessage={ passwordErrorMessage }></PasswordInput>
                    <PasswordInput id = {"confirm-password"} onChangeFunction={ handleConfirmPasswordChange } password={ confirmPassword }>Confirmar Senha</PasswordInput>

                    <div className={styles.radioDiv}>
                        <input type="checkbox" id="data-politic"  onChange={handledataPolicy} checked={dataPolicy}/>
                        <label htmlFor="data-politic">Li e concordo com a politica de tratamento de dados <Link href="">Saiba Mais</Link></label>
                    </div>

                    <div>
                        <RequirementsDiv data-testid="requirements-div" isValid={ isPasswordValid }>A senha deve ter no mínimo 7 caracteres</RequirementsDiv>
                        <RequirementsDiv isValid={ isUserValid }>O Usuário deve ter no mínimo 3 caracteres</RequirementsDiv>
                    </div>

                    <div className={styles.spanDiv}>
                        <span>{geralError ? geralError : ""}</span>
                    </div>

                    <div className={styles.buttonSubmitContainer}>
                        <ButtonSubmit onClick={register}>Cadastrar</ButtonSubmit>
                    </div>

                    <div className={styles.pDiv}>
                        <p><Link href="/login">Já possui cadastro? Clique aqui</Link></p>
                    </div>

                </form>
            </div>
        </div>
    )
}