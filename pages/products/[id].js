// Dynamic Routing
// It is React Hook provided by the Next js used to get the Dynamic Path name
//* Methods
//* 1) router.query
//* 2) router.path
//*
import { useRouter } from "next/router";

function Product() {
	const router = useRouter();
	console.log(router.pathname); // Gives us the Parameterized path - /products/[id]
	console.log(router.query); // Gives us the Actual path

	//* router.query.id gives us the path and we can use this to fetch the Data from the Server & then Populate here

	return <div>Particular Product Page</div>;
}

export default Product;
