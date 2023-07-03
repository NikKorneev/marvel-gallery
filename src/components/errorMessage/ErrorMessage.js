import error from "./error.gif";

const ErrorMessage = () => {
	return (
		<img
			style={{
				width: "100%",
				height: "260px",
				display: "block",
				objectFit: "contain",
				margin: "0 auto",
			}}
			src={error}
			alt="Error message"
		/>
	);
};

export default ErrorMessage;
