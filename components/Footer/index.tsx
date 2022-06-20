import Link from 'next/link';
import React from 'react';
import { fbIcon, githubIcon, linkedinIcon, twitterIcon } from '../SvgIcons';
import styles from './styles.module.scss';

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.subContent}>
          <h3>Best Practices</h3>
          <p>
            Best Practices is the place where you can find the comfortable way
            to reach your Senior Developers, Coordinate with them, and find your
            solutions with ease.
          </p>
        </div>
        <div className={styles.subContent}>
          <h3>Useful Links</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <Link href="/find-best-practices">Find Best Practices</Link>
            </li>
            <li>
              <Link href="/how-we-work">How we work?</Link>
            </li>
            <li>
              <Link href="/">Get Started</Link>
            </li>
          </ul>
        </div>
        <div className={styles.subContent}>
          <h3>Follow Us</h3>
          <span>
            Subscribe to our Daily News letter, and get the Best practices from
            Experts Daily.
          </span>
          <div className={styles.footerButton}>
            <div className={styles.registerButton}>
              <input type="text" name="" id="" placeholder="Your Email ..." />
              <button>Register</button>
            </div>
            <div className={styles.socialIcons}>
              <img src={githubIcon} />
              <img src={fbIcon} />
              <img src={twitterIcon} />
              <img src={linkedinIcon} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        Designed with <span>❤️</span> by Muhammad ISMAIL.
      </div>
    </>
  );
};

export default Footer;
