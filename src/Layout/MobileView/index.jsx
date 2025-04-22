import { useState, useMemo } from 'react'
import { NavLink, Outlet } from "react-router-dom";
import styles from "./mobileView.module.css";
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaHome, FaPaw, FaFeatherAlt, FaDragon } from 'react-icons/fa';


const MobileView = ({ setShowAnimal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClick = () => {
    setShowAnimal(null);
    setIsMenuOpen(false);
  };


  //useMemo is used to memoize the links array — this prevents it from being
  //  recreated on every re-render.
  //Since the dependency array [] is empty, it only runs once when the component mounts.
  const links = useMemo(() => [
    { path: "/", name: "Home", element: <FaHome size={24} /> },
    { path: "mammals", name: "Mammals", element: <FaPaw size={24} /> },
    { path: "birds", name: "Birds", element: <FaFeatherAlt size={24} /> },
    { path: "reptiles", name: "Reptiles", element: <FaDragon size={24} /> }
  ], []);

  return (
    <>
      <section className={styles.menu}>
        <nav className={styles.navbar} role="navigation">
          <div className={styles.icon} onClick={toggleMenu}>

            //FaTimes A close (X) icon FaBars hamburger menu icon
            {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />} 
          </div>

          {isMenuOpen && (  // if isMenuOpen is true Maps over the links array and creates a NavLink for each route
            <nav className={styles.navigationContainer}> {links.map(({ path,name, element }, index) => (

              <NavLink   //NavLink handles navigation and also applies an active class when the link matches the route
                key={index} className={styles.mobileMenu} to={path} onClick={handleClick}><span className={styles.menuItem}>
                 {element} <span>{name}</span>
              </span>
              </NavLink>
                // outlet Renders any nested route content under the navbar.
            ))}
            </nav>
          )}
        </nav>
      </section>
                
      <Outlet /> 
    </>
  );
};
export default MobileView




