import styles from './styles.module.scss';
import { ImageCard } from './ImageCard';

export function Services(){
    return(
        <div className={styles.servicesContainer}>
            <h1>Services</h1>

            <div className={styles.servicesContent}>
                <ImageCard image='' title='Titulo' description='descricao'/>    
                <ImageCard image='' title='Titulo' description='descricao'/>    
                <ImageCard image='' title='Titulo' description='descricao'/>    
            </div>
        </div>
    );

}