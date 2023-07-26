import "./comicsPage.scss";
import avengersLogo from "../../resources/img/Avengers_logo.png";
import avengers from "../../resources/img/Avengers.png";

const ComicsHeader = () => {
	return (
		<div className="comics__header">
			<img src={avengersLogo} alt="marvel" />
			<p>
				New comics every week! <br /> Stay tuned!
			</p>
			<img src={avengers} alt="avengers" />
		</div>
	);
};

export default ComicsHeader;
