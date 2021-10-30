import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterTop}>Footer Top</div>
      <div className={styles.FooterBottom}>Footer Bottom</div>
    </footer>
  );
}

export default Footer;
