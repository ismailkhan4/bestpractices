import { NextPage } from 'next';
import Head from 'next/head';

import styles from '../styles/Home.module.scss';

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Best Practices | A Collaborative App for Developers.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default IndexPage;
