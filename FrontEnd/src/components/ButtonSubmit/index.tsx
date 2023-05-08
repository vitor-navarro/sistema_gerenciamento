import styles from './styles.module.scss'

interface Props {
    children?: React.ReactNode,
    onClick?:React.MouseEventHandler<HTMLButtonElement>,
  }

function ButtonSubmit(props:Props){

    function buttonClicked(e:any){
        e.preventDefault()
        
        if(props.onClick != undefined){
            props.onClick(e)
        }
    }

    return(
        <>
        
            <button className = {styles.button} type='submit' onClick={buttonClicked}>
                {props.children ? props.children : 'Enviar'}
            </button>
        </>
    )
}

export default ButtonSubmit