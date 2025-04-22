import styles from './header.module.css'
import { getImageURL } from '../../utils/functions'

         
const Header = ({ pageTitle, darkMode }) => {
  return (
    <header className={`${styles.header} ${darkMode ? styles.dark : styles.light}`}>
    <img className={styles.logo} src={getImageURL("zoo-logo4.png")} alt="Zoo Logo" />
    <h1 className={styles.pageTitle}>{pageTitle}</h1>
  </header>
  );
};
       


export default Header
