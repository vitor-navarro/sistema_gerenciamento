import { AiOutlineMenu, AiOutlineMenuFold, AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BsCashCoin, BsGear } from 'react-icons/bs'
import { TbReportAnalytics } from 'react-icons/tb'

import { Theme } from '@/pages/_app';

import CustomImageComponent from '../CardPattern/CustomImageComponent';

import styles from './styles.module.scss';
import Link from 'next/link';

const tabs = [
    {
        text: "Dashboard",
        href: "/dashboard", 
        icon: AiOutlineHome,
    },
    {
        text: "Produtos",
        href: "/products",
        custonIcon: <CustomImageComponent img="/images/product.png" alt=''></CustomImageComponent>,
    },
    {
        text: "Vendas",
        href: "/sales",
        icon: BsCashCoin,
    },
    {
        text: "Relatórios",
        href: "/reports",
        icon: TbReportAnalytics,
    },
    {
        text: "Usuários",
        href: "/users",
        icon: AiOutlineUser,
    },
    {
        text: "Configurações",
        href: "/configuration",
        icon: BsGear,
    },
]

interface LateralMenuProps{
    onMouseOver: () => void;
    onMouseOut: () => void;
    currentTheme: Theme;
    onThemeChange: () => void;
}


export function LateralMenu({ onMouseOver, onMouseOut, currentTheme, onThemeChange } : LateralMenuProps){
    // colocar uma função para mudar o lado do menu na tela
    const setTheme = () => {
        onThemeChange();
    };

    return(
        <>
            <div 
                className={styles.mainDiv}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut}
            >
        
                <nav className={styles.nav}>
                    <div className={styles.actions}>
                        <div className={styles.expand}><AiOutlineMenu></AiOutlineMenu></div>

                        <div className={styles.themeSwitcher} onClick={() => setTheme()}>
                            <input type="checkbox" className={styles.switch} />
                            <label htmlFor="theme-switch" className={styles.switchLabel}></label>
                        </div>
                    </div>

                    <ul>

                        {tabs.map((tab, index)=>(
                            <Link href={tab.href} className={styles.link} key={index}>
                                <li className={styles.item}>
                                {tab.icon ? (
                                    <span className={styles.icon}>
                                        {tab.icon && <tab.icon />}
                                    </span>
                                    ) : (
                                    <span className={styles.icon}>
                                        {tab.custonIcon}
                                    </span>
                                    )}
                                    <span className={styles.text}>{tab.text}</span>
                                </li>
                            </Link>
                        ))}
                    
                    </ul>
                </nav>
            </div>


        </>
    )
}