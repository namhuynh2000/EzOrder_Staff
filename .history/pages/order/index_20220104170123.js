export const getStaticProps = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();

	return {
		props: { food: data },
	};
};

const ezorder = ({ food }) => {
	return (
		<div>
			<h1>All Order</h1>
            {food.map(monan=>(
                <div key={monan.id}>
                    a.
                </div>
            ))}
		</div>
	);
};

export default ezorder;
