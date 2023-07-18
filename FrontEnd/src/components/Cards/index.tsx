import Link from 'next/link'
import styles from './styles.module.scss'
import Image from 'next/image'

interface props{
    children?: React.ReactNode,
    img: string,
    url: string,
}

function CardPattern(props:props){

    return (
        <>
            <Link className={styles.link} href={props.url}>
                <div className={styles.card}>
                    <Image src={props.img} alt="Produtos" width={100} height={100}/>
                    <h2>{props.children}</h2>
                </div>
            </Link>
        
        </>
    )

}

export default CardPattern