import ErrorSpan from '../ErrorSpan';

import styles from './styles.module.scss'

interface propsInterface {
    children?: React.ReactNode;
    onChangeFunction: (user: string) => void;
    user: string;
    isRequired?: boolean;
    error: boolean;
  }

export default function UserInput(props:propsInterface){
    
    let user = props.user
    const onChangeFunction = props.onChangeFunction

    const error = props.error

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
                <label>{props.children ? props.children : 'Usuário'}</label>
                <ErrorSpan error = { error }>Usuário Inválido</ErrorSpan>
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