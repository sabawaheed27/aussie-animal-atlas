import styles from './sidebar-button.module.css';
import { getImageURL } from '../../utils/functions';

const SidebarButton = ({ showAnimal, icon, setShowAnimal, setAlreadyClicked }) => {
  const handleClick = () => {
    setShowAnimal(showAnimal);
    setAlreadyClicked(true);
  };

  return (
    <div className={styles.button} onClick={handleClick}>
      <img src={getImageURL(icon)} alt={showAnimal} className={styles.image} />
      <p className={styles.name}>{showAnimal}</p>
    </div>
  );
};

export default SidebarButton;
