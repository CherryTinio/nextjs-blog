import Link from 'next/link';
import Head from 'next/head';
require( '../components/layout');

export default function FirstPost() {
  return (
    <layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </layout>
  );
}