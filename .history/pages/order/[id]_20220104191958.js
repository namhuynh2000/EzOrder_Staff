export const getStaticPaths = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();

	const paths = data.map((monan) => {
		return {
			params: { id: monan.id.toString() },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export async function getStaticProps(context) {
	const id = context.params.id;
	const res = 
}

const Details = () => {
	return (
		<div>
			<h1>Details Page</h1>
		</div>
	);
};

export default Details;
