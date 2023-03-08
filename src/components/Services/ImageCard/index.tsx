import styles from './styles.module.scss';


interface ImageCardProps{
    image: string;
    title: string;
    description: string;
}

export function ImageCard(props: ImageCardProps) {
  const { image, title, description } = props;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
      </div>

      <div className={styles.cardContent}>
        <div className={styles.cardDescriptionContent}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>

    </div>
  );
}