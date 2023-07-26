import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

const Page404 = () => {
	return (
		<div>
			<ErrorMessage />
			<p
				style={{
					textAlign: "center",
					fontWeight: "bold",
					fontSize: "24px",
				}}
			>
				This page doesn't exist
			</p>
			<Link
				style={{
					display: "block",
					textAlign: "center",
					fontWeight: "bold",
					fontSize: "24px",
					color: "#c60a0a",
					textDecoration: "underline",
				}}
				to="/"
			>
				Back to home page
			</Link>
		</div>
	);
};

export default Page404;
