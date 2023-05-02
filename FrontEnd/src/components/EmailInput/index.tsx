import { useState } from 'react'

import ErrorSpan from '../ErrorSpan';

import email_validate from '@/utils/validators/email';

import styles from './styles.module.scss'

interface propsInterface {
    children?: React.ReactNode;
    onChangeFunction: (email: string) => void;
    email: string;
    isRequired?: boolean;
    error: boolean;
  }

export default function EmailInput(props:propsInterface){
    
    let email = props.email
    const onChangeFunction = props.onChangeFunction

    const error = props.error

    if (email === undefined) {
        email = '';
    }

    const handleChange = (e:any) =>{
        if (onChangeFunction){
            onChangeFunction(e.target.value)
        }
    }

    return(
        <div className={styles.div}> 
            <div>
                <label>{props.children ? props.children : 'Email'}</label>
                <ErrorSpan error = { error }>Email Inválido</ErrorSpan>
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