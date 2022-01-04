import Navbar from './Navbar';
import 

const Layout = ({ children }) => {
	return (
		<div className="content">
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
