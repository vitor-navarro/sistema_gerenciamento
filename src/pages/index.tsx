import { Feature } from "@/components/Feature";
import { Header } from "@/components/Header";
import { Services } from "@/components/Services";
import { CreateProduct } from "@/components/ProductForm";
import styles from './styles.module.scss';

export default function Home() {

  return (
    <>

      <Header />

      <div className={styles.bodyContent}>
        <Feature />
        <Services />
      </div>

    </>
  )
}
