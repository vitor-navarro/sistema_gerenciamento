import styles from './styles.module.scss';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi';
import {CgNotes} from 'react-icons/cg';

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div>
                <div>
                    <GiHamburgerMenu/>
                </div>
                <div>
                    <span>TN soluções elétricas</span>
                </div>
            </div>
            <div>
                <div>
                    <CgNotes/>
                    <span>Solicitar Cotação</span>
                </div>
                <div>
                    <BsFillTelephoneFill />
                    <span>Ligar Agora</span>
                </div>
            </div>
        </header>
    );
}