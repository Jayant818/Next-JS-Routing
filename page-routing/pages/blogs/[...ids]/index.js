import { useRouter } from "next/router";

function Blog() {
	const router = useRouter();
	console.log(router.query); //* This return a Array.
	return (
		<div>
			<h1>Particular Blog</h1>
		</div>
	);
}

export default Blog;
