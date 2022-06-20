import Footer from '../Footer';
import Navbar from '../Navbar';

import styles from './styles.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
