import styles from './long-description.module.css';
import { getImageURL } from '../../../utils/functions';
import DialogModal from '../../DialogModal';

const LongDescription = ({ name, lifespan, group, food, description, length, weight, found, image, CloseBtn, isOpen, onClose }) => {
  return (
    <DialogModal CloseBtn={CloseBtn} isOpen={isOpen} onClose={onClose}>
      <article className={styles.LongDescriptionContainer}>
        <img
          className={styles.animalImg}
          src={getImageURL(image)}
          alt={name}
          width="300" />

        <h2>{name}</h2>
        <p>This animal belongs to the <strong>{group}</strong> group and has a life expectancy of <strong>{lifespan}</strong>.</p>
        <p>The <strong>{name}</strong> lives in <strong>{found}</strong> and likes to eat <strong>{food}</strong> .</p>
        <p><strong>Length:</strong> {length}, <strong>Weight:</strong> {weight}</p>
        <p><strong>{description}</strong></p>
      </article>
    </DialogModal>
  );
};

export default LongDescription;
