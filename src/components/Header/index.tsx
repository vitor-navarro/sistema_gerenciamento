import styles from './styles.module.scss';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi';
import {CgNotes} from 'react-icons/cg';
import Link from 'next/link';

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div>
                <div>
                    <GiHamburgerMenu className={styles.GiHamburgerMenu}/>
                </div>
                <div>
                    <h1>TN soluções elétricas</h1>
                </div>
            </div>
            <div>
                <Link href="#orcamento" className={styles.link}>
                    <div>
                        <CgNotes className={styles.CgNotes}/>
                        <span>Solicitar Cotação</span>
                    </div>
                </Link>
            </div>
        </header>
    );
}