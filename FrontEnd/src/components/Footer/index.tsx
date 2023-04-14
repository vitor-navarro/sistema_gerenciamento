import { Card } from './Card'
import { BsInstagram } from 'react-icons/bs'

import styles from './styles.module.scss'

export function Footer(){
    return (
        <footer className={styles.footerContainer}>
            
            <div className={styles.footerContent}>
                <h2>Contato<br />tn soluções</h2>

                <div>
                    <Card title='Jeferson Tassi' description='(44) 98815-8734' link='#'></Card>
                    <Card title='Vinicius Navarro' description='(44) 98831-5891' link='#'></Card>
                    <Card title='Email' description='' link='#'></Card>
                </div>

                <div>
                    <BsInstagram className={styles.icon} />
                </div>

            </div>

        </footer>
    )


}