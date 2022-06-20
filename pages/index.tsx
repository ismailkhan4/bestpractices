import { NextPage } from 'next';
import Head from 'next/head';
import { Navbar } from '../components';

import styles from '../styles/Home.module.scss';

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Best Practices | A Collaborative App for Developers.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  );
};

export default IndexPage;
