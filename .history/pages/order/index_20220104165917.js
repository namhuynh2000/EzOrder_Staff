export const getStaticProps = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();

    
};

const ezorder = () => {
	return (
		<div>
			<h1>All Order</h1>
		</div>
	);
};

export default ezorder;
