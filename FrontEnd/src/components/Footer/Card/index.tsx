import styles from './styles.module.scss';

interface cardProps {
    title: string;
    description: string;
    link: string;
}

export function Card(props: cardProps){

    const handleCardClick = () => {
        window.location.href = props.link;
      };

    return (

        <div id={styles.cardContainerId} className={styles.cardContainer} onClick={handleCardClick}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}