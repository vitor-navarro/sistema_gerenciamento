import styles from './styles.module.scss';


interface ImageCardProps{
    image: string;
    title: string;
    description: string;
}

export function ImageCard(props: ImageCardProps) {
  const { image, title, description } = props;

  return (
    <div className={styles.imageCardContainer}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}