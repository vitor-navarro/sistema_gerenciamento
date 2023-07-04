import { AiOutlineMenu, AiOutlineMenuFold, AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BsCashCoin, BsGear } from 'react-icons/bs'
import { TbReportAnalytics } from 'react-icons/tb'

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

export function LateralMenu(){
    // colocar uma função para mudar o lado do menu na tela
    
    return(
        <>
            <div className={styles.mainDiv}>
                <nav className={styles.nav}>
                    <div className={styles.expand}><AiOutlineMenu></AiOutlineMenu></div>
                    <ul>

                        {tabs.map((tab, index)=>(
                            <Link href={tab.href} className={styles.link}>
                                <li className={styles.item} key={index}>
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