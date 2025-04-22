import { NavLink, Outlet } from "react-router-dom";
import styles from './desktopView.module.css';
import { FaHome, FaPaw, FaFeatherAlt, FaDragon } from 'react-icons/fa';



const DesktopLayout = ({ setShowAnimal }) => {
  const handleClick = () => {
    setShowAnimal(null);
  };

  const links = [
    { path: '/', element: <FaHome size={24} /> },
    { path: 'mammals', element: <FaPaw size={24} /> },
    { path: 'birds', element: <FaFeatherAlt size={24} /> },
    { path: 'reptiles', element: <FaDragon size={24} /> }
  ];

  return (
    <>
      <nav className={styles.desktopNav}>
        {links.map(({ path, element }, index) => (
          <NavLink
           
           key={index} className={({ isActive }) => `${styles.desktopMenu} ${isActive ? styles.active : ''}`} to={path} onClick={handleClick}>{element}


          </NavLink>
        ))}
      </nav>

      <Outlet />
    </>
  );
};




export default DesktopLayout;


