import { Feature } from "@/components/Feature";
import { Header } from "@/components/Header";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

import styles from './styles.module.scss';



export default function Home() {

  return (
    <>

      <Header />

      <div className={styles.bodyContent}>
        <Feature />
        <Services />
        <Contact />
      </div>
      
      <Footer />

    </>
  )
}
