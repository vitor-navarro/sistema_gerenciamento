import styles from './styles.module.scss'

export function Contact(){
    return (
        <div className={styles.contactConteiner}>
            <h1>Contato</h1>
            <div className={styles.contactContent}>
                <div><img src='teste projeto.png'></img></div>
                <div className={styles.contactFormBody}>

                    <h3>Para tirar dúvidas, solicitar orçamento ou fazer um agendamento</h3>
                    <p>Jeferson Tassi: (44) 98815-8734</p>
                    <p>Vinicius Navarro: (44) 98831-5891</p>
                    <p>ou</p>
                    <h3>Preencha o formulário</h3>
                    <form>
                        <div>
                            <label>Nome:</label>
                            <input type="text" placeholder="Nome"></input>
                        </div>

                        <div>
                            <label>Telefone:</label>
                            <input type="text" placeholder="ex: (44) 98831-5891"></input>
                        </div>

                        <div>
                            <label>Email:</label>
                            <input type="text" placeholder="ex: teste@gmail.com"></input>
                        </div>
                        
                        <div>
                            <label>Como podemos ajudar?</label>
                            <input type="text" placeholder="Mensagem"></input>
                        </div>
                        <button type='submit'>Enviar</button>
                    </form>
                </div>
            </div>
        </div>

    )
}