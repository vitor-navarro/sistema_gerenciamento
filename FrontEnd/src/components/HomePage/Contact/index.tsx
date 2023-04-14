import emailSend from "../../../services/api/email_api"
import { useState,useRef } from 'react'
import phone_validate from "@/utils/validators/phone";
import email_validate from "@/utils/validators/email";

import ButtonSubmit from "../../ButtonSubmit"
import styles from './styles.module.scss'

export function Contact(){

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [error, setError] = useState('');

    const sendEmail = async (e : any) => {
        e.preventDefault();
        setError('');

        if (!phone && !email) {
            setError("Por favor, preencha pelo menos o Telefone ou Email");
            return;
          }

        let phone_val = phone_validate(phone)
        let email_val = email_validate(email)

        if (!phone_val){
            setError("Telefone inválido");
            return;
        }

        if (!email_val){
            setError("Email inválido");
            return;
        }

        const data ={
            name,
            phone,
            email,
            message
        };
        
        emailSend(data);
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
                        <span> {error} </span>
                        <ButtonSubmit></ButtonSubmit>
                    </form>
                </div>
            </div>
        </div>

    )
}