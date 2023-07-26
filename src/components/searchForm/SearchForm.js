import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import useMarvelService from "../../services/MarvelService";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "./searchForm.scss";

const SearchForm = () => {
	const { getCharacterByName } = useMarvelService();
	const [content, setContent] = useState();

	return (
		<div className="search">
			<h2>Or find a character by name:</h2>

			<Formik
				initialValues={{ name: "" }}
				validationSchema={Yup.object({
					name: Yup.string().required("This field is required"),
				})}
				onSubmit={async (values, { setSubmitting }) => {
					setSubmitting(false);
					await getCharacterByName(values.name).then((res) => {
						if (res) {
							setContent(<GoToPage name={values.name} />);
						} else {
							setContent(
								<p className="search__error">
									{`${values.name} character was not found`}
								</p>
							);
						}
					});
				}}
			>
				{({ isSubmitting }) => (
					<Form className="search__form">
						<div className="search__wrapper">
							<Field
								type="name"
								name="name"
								className="search__input"
							/>
							<button
								type="submit"
								disabled={isSubmitting}
								className="button button__main button__long"
							>
								<div className="inner">FIND</div>
							</button>
						</div>

						<ErrorMessage
							name="name"
							component="div"
							className="search__error"
						/>
					</Form>
				)}
			</Formik>
			{content}
		</div>
	);
};

const GoToPage = ({ name }) => {
	const link = name.replace(/\s/, "%20");
	return (
		<div className="search__toPage">
			<p>{`There is! Visit ${name} page?`}</p>
			<Link
				to={`/comics/${link}`}
				className="search__toPageBtn button button__main button__long"
			>
				<div className="inner">TO PAGE</div>
			</Link>
		</div>
	);
};

export default SearchForm;
