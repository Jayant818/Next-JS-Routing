import React from "react";

// Implementing the Catch All Route
//! Suppose we want to render the same Components on these different Routes
//? /blogs/[id]
//? /blogs/[year]/[month]/[id]
//? /blogs/[year]
//? /blogs/[BloggerName] - List all the blogs that were written by a particular person
//* For this we use the Spread Operator

function Blogs() {
	return (
		<div>
			<h1>All Blogs</h1>
		</div>
	);
}

export default Blogs;
