import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<Image src="/favicon.ico" width={128} height={77} />
			</div>
			<h1>This is Navbar</h1>
		</nav>
	);
};

export default Navbar;
