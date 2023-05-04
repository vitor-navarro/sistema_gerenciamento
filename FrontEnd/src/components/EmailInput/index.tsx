import { useState } from 'react'

import ErrorSpan from '../ErrorSpan';

import email_validate from '@/utils/validators/email_format_validator';

import styles from './styles.module.scss'

interface propsInterface {
    children?: React.ReactNode;
    onChangeFunction: (email: string) => void;
    email: string;
    isRequired?: boolean;
  }

export default function EmailInput(props:propsInterface){

    const [emailError, setEmailError] = useState(false);
    const { email, onChangeFunction, isRequired } = props;

    const handleChange = (e: any) => {
        const newEmail = e.target.value;
        const isValidEmail = email_validate(newEmail);
        setEmailError(!isValidEmail);

        if (onChangeFunction) {
            onChangeFunction(newEmail);
        }
    }

    return(
        <div className={styles.div}> 
            <div>
                <label>{props.children ? props.children : 'Email'}</label>
                <ErrorSpan error = { emailError }>Email Inválido</ErrorSpan>
            </div>

            <input 
            {...(props.isRequired || props.isRequired === undefined ? { required: true } : {})}
            type='text'
            placeholder="Email"
            onChange={handleChange}
            value={email}
            />
        </div>
    )
}