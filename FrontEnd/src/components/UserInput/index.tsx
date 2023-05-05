import ErrorSpan from '../ErrorSpan';

import styles from './styles.module.scss'

interface propsInterface {
    children?: React.ReactNode;
    onChangeFunction: (user: string) => void;
    user: string;
    isRequired?: boolean;
    error: boolean;
    errorMessage?: string;
  }

export default function UserInput(props:propsInterface){
    
    let user = props.user
    const error = props.error
    const onChangeFunction = props.onChangeFunction

    if (user === undefined) {
        user = '';
    }

    const handleChange = (e:any) =>{
        if (onChangeFunction){
            onChangeFunction(e.target.value)
        }
    }

    return(
        <div className={styles.div}> 
            <div>
                <label>{props.children ? props.children : 'Usuário'}{props.isRequired ? '*' : ''}</label>
                <ErrorSpan error = { error }>{props.errorMessage !== '' ? props.errorMessage : "Usuário inválido"}</ErrorSpan>
            </div>
            

            <input 
            {...(props.isRequired || props.isRequired === undefined ? { required: true } : {})}
            type='text'
            placeholder="Nome"
            onChange={handleChange}
            value={user}
            />
        </div>
    )
}