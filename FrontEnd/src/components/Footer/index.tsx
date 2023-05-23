import { Card } from './Card'
import { BsInstagram } from 'react-icons/bs'

import styles from './styles.module.scss'

export function Footer(){
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <h2>Contato<br />Nome empresa</h2>
                <div>
                    <Card title='Nome' description='telefone/descrição' link='#'></Card>
                </div>

                <div>
                    <BsInstagram className={styles.icon} />
                </div>
            </div>
        </footer>
    )
}