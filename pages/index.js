//! Next Js Supports PageBased Routing
//! Path name will be depend upon the name of the file
//! It Supports - Static & Dynamic Routing
//^ It also Supports Nested Dynamic Routing & allows to enter number of different sengment under same ID

import Link from "next/link"; // IT is a Default Export & has properties like href , push.

function HomePage() {
	return (
		<div>
			<h1>This is MY HomePage</h1>
			<ul>
				<li>
					{/* <a href="/clients">Clients</a> //! This will be problematic cuz it send the HTTp request & reloads the page again,So all the State has been reset but we don't want that so we use [LINK TAG]  */}
					<Link href="/clients">Clients</Link>
				</li>
				<li>
					{/* <Link href="/products">Products</Link> */}
					{/* Other Way - using an Object */}
					<Link
						href={{
							pathname: "/products",
							// query: "/products",
						}}
					>
						Products
					</Link>
				</li>
				<li>
					<h3> Using Replace </h3>
				</li>
				<li>
					<Link href="/products" replace>
						Products
					</Link>
					{/* //! The Replace Attribute is same as href but it replaces the same page so we can't navigate back  */}
				</li>
			</ul>
		</div>
	);
}

export default HomePage;
