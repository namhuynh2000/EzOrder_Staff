export const getStaticPaths = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();

	return {
		paths: [{},{},{param}]
	}
};

const Details = () => {
	return (
		<div>
			<h1>Details Page</h1>
		</div>
	);
};

export default Details;
