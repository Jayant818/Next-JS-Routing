import { useRouter } from "next/router";

function Project() {
	const router = useRouter();
	console.log(router.query);
	return <div>Particular Project given by The Clien</div>;
}

export default Project;
