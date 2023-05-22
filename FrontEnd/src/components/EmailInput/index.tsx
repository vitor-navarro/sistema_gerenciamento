import { useState } from 'react'

import ErrorSpan from '../ErrorSpan';

import email_validate from '@/utils/validators/email_format_validator';

import styles from './styles.module.scss'

interface propsInterface {
    children?: React.ReactNode;
    onChangeFunction: (email: string) => void;
    email: string;
    isRequired?: boolean;
    error?: boolean;
    errorMessage?: string;
  }

export default function EmailInput(props:propsInterface){

    const [emailError, setEmailError] = useState(false);
    const { email, onChangeFunction, isRequired } = props;
    
    let error = props.error === undefined ? false : props.error
    let errorMessage = props.errorMessage === undefined ? '' : props.errorMessage

    const handleChange = (e: any) => {
        const newEmail = e.target.value;
        const isValidEmail = email_validate(newEmail);
        setEmailError(!isValidEmail);

        onChangeFunction(newEmail);
        
    }

    return(
        <div className={styles.div}> 
            <div>
                <label htmlFor="emailInput">{props.children ? props.children : 'Email'}{props.isRequired ? '*' : ''}</label>
                <ErrorSpan error = { emailError || error }>{errorMessage !== '' ? errorMessage : "Email Inválido"}</ErrorSpan>
            </div>

            <input 
            {...(props.isRequired || props.isRequired === undefined ? { required: true } : {})}
            id="emailInput"
            type='text'
            placeholder="Email"
            onChange={handleChange}
            value={email}
            />
        </div>
    )
}