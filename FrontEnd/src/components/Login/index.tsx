import ButtonSubmit from '../ButtonSubmit'
import styles from './styles.module.scss'

export function Login(){
    return(
        <>
        
        <div className={styles.formLoginContainer}>

        <h1>Bem vindo</h1>
            <div className={styles.formContent}>
                <form>
                    <div> 
                        <label>Usuário</label>
                        <input placeholder="Email"/>
                    </div>

                    <div> 
                        <label>Senha</label>
                        <input placeholder="senha"/>
                    </div>
                    
                    <div className={styles.buttonSubmitContainer}>
                        <ButtonSubmit />
                    </div>

                </form>
            </div>
        </div>
        
        
        </>

    )
}