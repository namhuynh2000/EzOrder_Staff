import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<Head>
				<title>EzOrder | Home</title>
				<meta></meta>
			</Head>
			<div>
				<Link href="/about">HOMEPAGE</Link>
			</div>
		</>
	);
}
