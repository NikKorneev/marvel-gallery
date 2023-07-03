import loader from "./loader.gif";

const Spinner = () => {
	return (
		<div
			style={{
				margin: "0 auto",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: "100%",
				height: "260px",
			}}
		>
			<img src={loader}></img>
		</div>
	);
};

export default Spinner;
