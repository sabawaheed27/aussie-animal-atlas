import SidebarButton from '../SidebarButton';
import styles from './sidebar.module.css';
import { allAnimalArray, mammalsArray, reptileArray, birdsArray } from '../../data/data';

const Sidebar = ({ setShowAnimal, category, alreadyClicked, setAlreadyClicked }) => {
  
  const getAnimalsByCategory = () => {
    switch (category) {
      case 'mammals':
        return mammalsArray;
      case 'reptiles':
        return reptileArray;
      case 'birds':
        return birdsArray;
      case 'home':
      default:
        return allAnimalArray;
    }
  };

  const animalList = getAnimalsByCategory();

  return (
    <div className={styles.sidebar}>
      <p className={styles.animals}>Animals:</p>
      {animalList.map((animal, index) => (
        <SidebarButton
          key={index}
          showAnimal={animal.name}
          icon={animal.icon}
          setShowAnimal={setShowAnimal}
          alreadyClicked={alreadyClicked}
          setAlreadyClicked={setAlreadyClicked}
        />
      ))}
    </div>
  );
};

export default Sidebar;
