import styles from './short-description.module.css'
import { getImageURL } from '../../../utils/functions'


const ShortDescription = ({ name, group, food, description, found, image, isLongDescriptionOpen, setLongDescriptionOpen, setCategory, setShowAnimal }) => {
    const handleClick = () => {
        setLongDescriptionOpen(isLongDescriptionOpen === true ? false : true)
    }

    const handleClickCategory = () => {
        setCategory(group)
        setShowAnimal(null)
    }

    return (
        <div className={styles.shortAnimalContainer}>
            <img className={styles.animalImg} src={getImageURL(image)} alt={name} height="auto" width="300px" />
            <h2 className={styles.animalName}>{name}</h2>
            <p className={styles.groupInfo}><strong>GROUP:</strong>{' '}
                <a className={styles.groupLink} onClick={handleClickCategory} href={group}>{group}</a>
            </p>

            <div className={styles.animalFacts}>
                <p> <strong>FOOD: </strong>  {food}</p>
                <p> <strong>HABITAT: </strong>  {found}</p>
            </div>
            <p className={styles.description}><strong> DESCRIPTION: </strong> {description.slice(0, 200)} <span>...</span></p>
            <p className={styles.readMoreBtn} onClick={handleClick}> ...Read more</p>
        </div>
    )
}

export default ShortDescription
