import { Link } from 'react-router-dom';
import styles from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={styles.MainNavigation}>
      <div className={styles.MainNavigationTop}>
        <h1>CS Pioneer</h1>
      </div>
      <div className={styles.MainNavigationBottom}>
        <ul className={styles.MainNavigationBottomPages}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/revise'>Revise</Link>
          </li>
          <li>
            <Link to='/test'>Test</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default MainNavigation;
