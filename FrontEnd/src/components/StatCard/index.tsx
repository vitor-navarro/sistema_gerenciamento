import CustomSimpleCard from "../Cards/CustomSimpleCard"

import styles from "./styles.module.scss"

export default function StatCard(){
    return(
            <div className={styles.CardsWrapper}>
                <CustomSimpleCard data ="data">Produtos</CustomSimpleCard>
                <CustomSimpleCard data ="data">Produtos</CustomSimpleCard>
                <CustomSimpleCard data ="data">Produtos</CustomSimpleCard>
            </div>
    )
}