import Link from 'next/link';

export const getStaticProps = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();

	const 
	return {
		props: { food: data },
	};
};

const ezorder = ({ food }) => {
	return (
		<div>
			<h1>All Order</h1>
			{food.map((monan) => (
				<Link href={'/order/' + monan.id} key={monan.id}>
					<a>
						<h3>{monan.name}</h3>
					</a>
				</Link>
			))}
		</div>
	);
};

// const ezorder = (props) => {
// 	return (
// 		<div>
// 			<h1>All Order</h1>
// 			{props.food.map((monan) => (
// 				<div key={monan.id}>
// 					<a>
// 						<h3>{monan.name}</h3>
// 					</a>
// 				</div>
// 			))}
// 		</div>
// 	);
// };

export default ezorder;
