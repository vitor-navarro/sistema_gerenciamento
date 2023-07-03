import { AiOutlineMenu, AiOutlineMenuFold } from 'react-icons/ai';

import styles from './styles.module.scss';

export function LateralMenu(){
    return(
        <>
            <nav className={styles.nav}>
                <div className={styles.expand}><AiOutlineMenu></AiOutlineMenu></div>
                <ul>

                <li className={styles.item}>
                    <a href="#" className={styles.link}>
                        <span className={styles.icon}></span>
                        <span className={styles.text}></span>
                    </a>
                </li>

                <li className={styles.item}>
                    <a href="#" className={styles.link}>
                        <span className={styles.icon}></span>
                        <span className={styles.text}></span>
                    </a>
                </li>

                <li className={styles.item}>
                    <a href="#" className={styles.link}>
                        <span className={styles.icon}></span>
                        <span className={styles.text}></span>
                    </a>
                </li>
                
                </ul>
            </nav>
        </>
    )
}