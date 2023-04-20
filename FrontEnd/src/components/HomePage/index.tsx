import { Feature } from "@/components/HomePage/Feature";
import { Header } from "@/components/Header";
import { Services } from "@/components/HomePage/Services";
import { Contact } from "@/components/HomePage/Contact";
import { Footer } from "@/components/Footer";

import styles from './styles.module.scss';

export default function HomePage(){
    return(
        <>      
        <Header />

        <div className={styles.bodyContent}>
          <Feature />
          <Services />
          <Contact/>
        </div>
        
        <Footer />
        </>
    )
}