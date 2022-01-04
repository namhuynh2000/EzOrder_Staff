import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<div>
			<Link href="/about">
				<h1>Homepage</h1>
			</Link>
		</div>
	);
}
