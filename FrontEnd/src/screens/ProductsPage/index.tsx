import ProductsList from "@/components/ProductsList";
import StatCard from "@/components/StatCard";
import Link from "next/link";

import styles from "./styles.module.scss"

export function ProductsPage(){
    return(
        <>  
            <div>
                <StatCard></StatCard>

                <div>
                    <button className={styles.newProductButton}>
                        <Link href="" className={styles.newProductLink}>Novo Produto</Link>
                    </button>

                </div>

                <ProductsList></ProductsList>
            </div>
        </>
    )
}