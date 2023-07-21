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

    const handleChange = (e:any) =>{
       
        onChangeFunction(e.target.value)
        
    }

    return(
        <div className={styles.div}> 

            <span>
                <label htmlFor="user-input">{props.children ? props.children : 'Usuário'}{props.isRequired ? '*' : ''}</label>
                <ErrorSpan error = { error }>{props.errorMessage !== '' ? props.errorMessage : "Usuário inválido"}</ErrorSpan>
            </span>
            

            <input 
            {...(props.isRequired || props.isRequired === undefined ? { required: true } : {})}
            id="user-input"
            type='text'
            placeholder="Nome"
            onChange={handleChange}
            value={user}
            />
        </div>
    )
}