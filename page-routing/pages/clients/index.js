import Link from "next/link";
const Data = [
	{
		id: "jay",
		name: "Jayant",
	},
	{
		id: "dushyant",
		name: "Dushyant",
	},
];

function Client() {
	return (
		<div>
			<h1>List of Client</h1>
			{Data.map((m) => (
				<li key={m.id}>
					<Link href={`/clients/${m.id}`}>{m.name}</Link>
				</li>
			))}
		</div>
	);
}

export default Client;
