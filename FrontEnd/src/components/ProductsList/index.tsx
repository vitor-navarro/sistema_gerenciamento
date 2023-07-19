import styles from './styles.module.scss';


export default function ProductsList(){
    return(
        <>
            <table className={styles.Table}>
                <thead className={styles.TableHead}>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Nome</th>
                        <th scope='col'>Descrição</th>
                        <th scope='col'>Estoque</th>
                        <th scope='col'>Preço</th>
                        <th scope='col'></th>
                    </tr>
                </thead>
                <tbody className={styles.TableBody}>                
                    <tr>
                        <td scope='row' className={styles.idCol}>1</td>
                        <td scope='row' className={styles.nameCol}>Produto 1</td>
                        <td scope='row' className={styles.descriptonCol}>Produto de teste</td>
                        <td scope='row' className={styles.stockCol}>31 unidades</td>
                        <td scope='row' className={styles.priceCol}>R$ 20,00</td>
                        <td scope='row' className={styles.actionsCol}>menu</td>
                    </tr>
                    <tr>
                    <td scope='row' className={styles.idCol}>1</td>
                        <td scope='row' className={styles.nameCol}>Produto 1</td>
                        <td scope='row' className={styles.descriptonCol}>Produto de teste</td>
                        <td scope='row' className={styles.stockCol}>31 unidades</td>
                        <td scope='row' className={styles.priceCol}>R$ 20,00</td>
                        <td scope='row' className={styles.actionsCol}>menu</td>
                    </tr>
                    <tr>
                    <td scope='row' className={styles.idCol}>1</td>
                        <td scope='row' className={styles.nameCol}>Produto 1</td>
                        <td scope='row' className={styles.descriptonCol}>Produto de teste</td>
                        <td scope='row' className={styles.stockCol}>31 unidades</td>
                        <td scope='row' className={styles.priceCol}>R$ 20,00</td>
                        <td scope='row' className={styles.actionsCol}>menu</td>
                    </tr>
                    <tr>
                    <td scope='row' className={styles.idCol}>1</td>
                        <td scope='row' className={styles.nameCol}>Produto 1</td>
                        <td scope='row' className={styles.descriptonCol}>Produto de teste</td>
                        <td scope='row' className={styles.stockCol}>31 unidades</td>
                        <td scope='row' className={styles.priceCol}>R$ 20,00</td>
                        <td scope='row' className={styles.actionsCol}>menu</td>
                    </tr>
                </tbody>

            </table>
        </>
    )
}