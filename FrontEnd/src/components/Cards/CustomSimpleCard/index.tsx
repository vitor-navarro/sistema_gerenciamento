import styles from "./styles.module.scss"

interface prospInterface{
    children: React.ReactNode,
    data: string
}

export default function CustomSimpleCard(props : prospInterface){

    const data = props.data ? props.data : "";
    
    return(
        <>
            <div className={styles.Wrapper}>
                <div>
                    <h2>{props.children}</h2>
                    <p>{data}</p>
                </div>
            </div>
        </>
    )
}