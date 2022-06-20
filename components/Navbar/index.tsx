import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';
const Navbar = () => {
  return (
    <div className={styles.nav}>
      <Link href="/" passHref>
        <h3>Best Practices</h3>
      </Link>
      <div className={styles.navBar}>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/find-best-practices">Find Best Practices</Link>
          </li>
          <li>
            <Link href="/how-we-work">How We Work?</Link>
          </li>
        </ul>
      </div>
      <div className={styles.searchBar}>
        <input type="text" name="" id="" placeholder="Search best practices" />
        <svg
          width="23"
          height="22"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.3251 14.1196L15.6576 14.9361H16.7122H17.4444C17.6082 14.9361 17.757 14.9972 17.8626 15.0982L22.3397 19.3799C22.34 19.3802 22.3402 19.3804 22.3405 19.3807C22.5538 19.5877 22.5536 19.9128 22.3371 20.1199L21.0657 21.3357L21.0638 21.3376C20.8409 21.5531 20.464 21.5557 20.2339 21.3357L15.7549 17.0522C15.6502 16.952 15.5949 16.82 15.5949 16.6831V15.9828V14.9846L14.7954 15.5824C13.2947 16.7045 11.4048 17.3733 9.34443 17.3733C4.43741 17.3733 0.5 13.5763 0.5 8.93663C0.5 4.29693 4.43741 0.5 9.34443 0.5C14.2515 0.5 18.1889 4.29693 18.1889 8.93663C18.1889 10.8905 17.4958 12.6876 16.3251 14.1196ZM3.09401 8.93663C3.09401 12.2757 5.9136 14.9361 9.34443 14.9361C12.7803 14.9361 15.5949 12.2709 15.5949 8.93663C15.5949 5.59755 12.7753 2.93716 9.34443 2.93716C5.90859 2.93716 3.09401 5.60235 3.09401 8.93663Z"
            stroke="#2C302E"
            strokeOpacity="0.5"
          />
        </svg>
      </div>
      <button>Get Started</button>
    </div>
  );
};

export default Navbar;
