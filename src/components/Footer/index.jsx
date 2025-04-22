import styles from './footer.module.css';


const Footer = ({ todayHours }) => {
    return (
      <footer className={styles.footer}>
        <div>
          <p>© Saba 2025</p>
        </div>
        <div className={styles.hours}>
          <p><strong>Opening Hours Today:</strong> {todayHours}</p>
          <p><strong>Regular Opening Hours:</strong></p>
          <ul className={styles.scheduleList}>
            <li>Mon - Thu: 10.00 -18.00</li>
            <li>Fri: 11.00 - 16.00</li>
            <li>Sat: 11.00 - 17.00</li>
            <li>Sun: Closed</li>
          </ul>
        </div>
      </footer>
    );
  };
export default Footer;
