import Head from 'next/head';
import Layout from './components/layout';
import utilStyles from './styles/utils.module.css'
import Image from 'next/image';

const YourComponent = () => (
  <Image
  src="./images/profile.jpg"
  height={144} 
    width={144} 
    alt="Your Name"
  />
);
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>My Blog</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am Cherry Love Tinio, 21 yrs of age currently taking IT course. I was born at Quezon city but is now living in San Joaquin sta ana pampanga.
        I fell in love with animation videos when I was still young that is one of the reasons why I took IT in college, although initially I was supposed to take nursing because of my passion and motivation to learn animation 
        I took IT instead. I love playing video games, drawing, singing, listening to music, and traveling. </p>       
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        
      </section>
    </Layout>
  );
}