
// import { Outlet } from "react-router-dom";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import DesktopView from "../Layout/DesktopView";
// import MobileView from "../Layout/MobileView";

// const AppLayoutWrapper = ({ setShowAnimal, mobileMenu, setMobileMenu, darkMode }) => {
//   return (
//     <>
//       <Header pageTitle="Australian Zoo" darkMode={darkMode} />
//       <DesktopView setShowAnimal={setShowAnimal}>
//         <MobileView mobileMenu={mobileMenu} setMobileMenu={setMobileMenu}>
//           <Outlet />
//         </MobileView>
//       </DesktopView>
//       <Footer />
//     </>
//   );
// };

// export default AppLayoutWrapper;



import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DesktopView from "../Layout/DesktopView";
import MobileView from "../Layout/MobileView";

const AppLayoutWrapper = ({ setShowAnimal, darkMode }) => {
  return (
    <>
      <Header pageTitle="Australian Zoo" darkMode={darkMode} />
      
      <div className="layout-wrapper">
        <div className="mobile-view">
          <MobileView setShowAnimal={setShowAnimal} />
        </div>
        <div className="desktop-view">
          <DesktopView setShowAnimal={setShowAnimal}>
            <Outlet />
          </DesktopView>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AppLayoutWrapper;
