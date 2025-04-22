import { useState } from 'react';
import Sidebar from '../Sidebar';
import WelcomeMsg from '../WelcomeMsg';
import LongDescription from '../Description/LongDescription';
import ShortDescription from '../Description/ShortDescription';
import styles from './main-content.module.css';
import { allAnimalArray } from '../../data/data';

const MainContent = ({ showAnimal, setShowAnimal, category, setCategory, alreadyClicked, setAlreadyClicked }) => {
  const [isLongDescriptionOpen, setLongDescriptionOpen] = useState(false);

  const handleClickCloseBtn = () => {
    setLongDescriptionOpen(false);
  };


  //This line searches through the array allAnimalArray and returns the first animal object
  //  where the name matches the value of showAnimal. 
  const selectedAnimal = allAnimalArray.find((animal) => animal.name === showAnimal);

  return (

    <section className={styles.mainContent}>
      <div className={styles.sidebar}>
        <Sidebar
          setShowAnimal={setShowAnimal}
          category={category}
          setCategory={setCategory}
          alreadyClicked={alreadyClicked}
          setAlreadyClicked={setAlreadyClicked}
        />
      </div>

      {!showAnimal && (
        <div className={styles.animalDisplay}>
          <WelcomeMsg category={category} setCategory={setCategory} />
        </div>
      )}

      {showAnimal && selectedAnimal && !isLongDescriptionOpen && (
        <div className={styles.animalDisplay}>
          <ShortDescription
            {...selectedAnimal}
            isLongDescriptionOpen={isLongDescriptionOpen}
            setLongDescriptionOpen={setLongDescriptionOpen}
            setCategory={setCategory}
            setShowAnimal={setShowAnimal}
          />
        </div>
      )}

      {isLongDescriptionOpen && selectedAnimal && (
        <div className={styles.animalDisplay}>
          <LongDescription
            {...selectedAnimal}
            isOpen={isLongDescriptionOpen}
            onClose={handleClickCloseBtn}
          />
        </div>
      )}
    </section>
  );
};
export default MainContent;