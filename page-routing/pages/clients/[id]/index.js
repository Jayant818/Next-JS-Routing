import { useRouter } from "next/router";

//! This Represents the Nesting of the Dynamic Paths

function Projects() {
	const router = useRouter();
	console.log(router.query);
	const handleClick = () => {
		// load some Data /store
		router.push(`/clients/${router.query.id}/5667`);
	};

	return (
		<div>
			<h1>List of all the Projects Assigned to a Client</h1>
			<button onClick={handleClick}>Get Project</button>
		</div>
	);
}

export default Projects;
