import Comics from "../comics/Comics";
import ComicsHeader from "../comics/ComicsHeader";
import { Helmet } from "react-helmet";

const ComicsPage = () => {
	return (
		<>
			<Helmet>
				<title>Marvel information - comics</title>
				<meta name="description" content="comics page"></meta>
			</Helmet>
			<ComicsHeader />
			<Comics />
		</>
	);
};

export default ComicsPage;
