import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout/layout';
import utilsStyles from '../styles/utils.module.css';
import TAlert from './test-alert/test-alert';

export default function Home() {
  return (
    // <Layout home>
    //   <Head>
    //     <title>{siteTitle}</title>
    //   </Head>

    //   <section className={utilsStyles.headingMd}>
    //     <p>[Your Self Introduction]</p>
    //     <p>
    //       (This is a sample website - you'll be building a site like this on {' '}
    //       <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
    //     </p>
    //   </section>
    // </Layout>
    <>
    <TAlert></TAlert>
    </>
  );
}