import Navbar from "./Navbar"
const Layout = ({ children }) => {
	return (
		<div className="content">
			<Navbar/>
			{children}
			<Foo
		</div>
	);
};

export default Layout;
