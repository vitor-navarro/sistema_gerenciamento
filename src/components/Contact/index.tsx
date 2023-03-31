import emailSend from "../../services/api/email_api"
import { useState,useRef } from 'react'
import phone_validate from "@/utils/validators/phone";
import email_validate from "@/utils/validators/email";

import styles from './styles.module.scss'

export function Contact(){

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = async (e : any) => {
        e.preventDefault();

        let phone_val = phone_validate(phone)
        let email_val = email_validate(email)

        console.log(phone_val, email_val)

        const data ={
            name,
            phone,
            email,
            message
        };

        //emailSend(data);
      }

    return (
        <div className={styles.contactConteiner} id = "orcamento">
            <h1>Contato</h1>
            <div className={styles.contactContent}>
                <div><img src='teste projeto.png'></img></div>
                <div className={styles.contactFormBody}>

                    <h3>Para tirar dúvidas, solicitar orçamento ou fazer um agendamento</h3>
                    <p>Jeferson Tassi: (44) 98815-8734</p>
                    <p>Vinicius Navarro: (44) 98831-5891</p>
                    <p>ou</p>
                    <h3>Preencha o formulário</h3>
                    <form onSubmit={sendEmail}>
                        <div>
                            <label>Nome:</label>
                            <input 
                                required
                                type="text" 
                                placeholder="Nome" 
                                onChange={e => setName(e.target.value)}
                                value={name}
                            />
                        </div>

                        <div>
                            <label>Telefone:</label>
                            <input 
                                type="text"
                                placeholder="ex: (44) 98831-5891" 
                                onChange={e => setPhone(e.target.value)}
                                value={phone}
                            />
                        </div>

                        <div>
                            <label>Email:</label>
                            <input 
                                type="email" 
                                placeholder="ex: teste@gmail.com"
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>
                        
                        <div>
                            <label>Como podemos ajudar?</label>
                            <input 
                                required
                                type="text" 
                                placeholder="Mensagem" 
                                onChange={e => setMessage(e.target.value)}
                                value={message}
                            />
                        </div>
                        <button type='submit'>Enviar</button>
                    </form>
                </div>
            </div>
        </div>

    )
}