import styles from './styles.module.scss'

interface Props {
    children?: React.ReactNode;
  }

function ButtonSubmit(props:Props){
    return(
        <>
        
            <button className = {styles.button} type='submit'>
                {props.children ? props.children : 'Enviar'}
                </button>
    
        </>
    )
}

export default ButtonSubmit