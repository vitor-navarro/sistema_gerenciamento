import styles from './styles.module.scss';
import { ImageCard } from './ImageCard';

export function Services(){
    return(
        <div className={styles.servicesContainer}>
            <h1>Serviços</h1>
            <h3>Local para uma breve fala, ex: "queremos tirar do papel o projeto do seus sonho"</h3>
            <p>Local para colocar como, "Execução de obra e reformas em geral. Execução de projetos complementares: estrutural, elétrico, hidráulico e de prevenção de incêndio. Impactamos diretamente na economia dos processos e na parte de procedimentos para as obras"</p>

            <div className={styles.servicesContent}>
                <ImageCard image='/teste laudo.png' title='Soluções elétricas' description='Para sua residencial ou empresa'/>    
                <ImageCard image='/teste obra.png' title='Residencial e Predial' description='instalação e manutenção residencial e predial'/>    
                <ImageCard image='/teste projeto.png' title='Segurança eletrônica' description='Instalação e manutenção de cameras de segurança'/>    
                <ImageCard image='/teste laudo.png' title='Energia Solar' description='Instação e manutenção de energia solar'/>   
                <ImageCard image='/teste obra.png' title='Projetos Elétricos' description='Projetos elétricos'/>
            </div>
        </div>
    );

}