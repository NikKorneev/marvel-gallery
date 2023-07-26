import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "./singleComicPage.scss";

const SingleComicPage = () => {
	const { codename } = useParams();
	const [comic, setComic] = useState(null);
	const {
		loading,
		error,
		getComic,
		clearError,
		getCharacterByName,
		process,
		setProcess,
	} = useMarvelService();

	const itsComics = codename.match(/\d+/);

	useEffect(() => {
		updateComic();
	}, [codename]);

	const updateComic = () => {
		clearError();
		if (itsComics) {
			getComic(codename)
				.then(onComicLoaded)
				.then(() => setProcess("confirmed"));
		} else {
			getCharacterByName(codename)
				.then(onComicLoaded)
				.then(() => setProcess("confirmed"));
		}
	};

	const onComicLoaded = (comic) => {
		setComic(comic);
	};

	const errorMessage = error ? <ErrorMessage /> : null;
	const spinner = loading ? <Spinner /> : null;
	let content;
	if (!(loading || error || !comic)) {
		itsComics
			? (content = <ComicView comic={comic} />)
			: (content = <CharacterView comic={comic} />);
	}

	return (
		<>
			{errorMessage}
			{spinner}
			{content}
		</>
	);
};

const ComicView = ({ comic }) => {
	const { title, description, pageCount, thumbnail, language, price } = comic;

	return (
		<div className="single-comic">
			<Helmet>
				<title>{title} comics page</title>
				<meta name="description" content={description} />
			</Helmet>
			<img src={thumbnail} alt={title} className="single-comic__img" />
			<div className="single-comic__info">
				<h2 className="single-comic__name">{title}</h2>
				<p className="single-comic__descr">{description}</p>
				<p className="single-comic__descr">{pageCount}</p>
				<p className="single-comic__descr">Language: {language}</p>
				<div className="single-comic__price">{price}</div>
			</div>
			<Link to="/comics" className="single-comic__back">
				Back to all
			</Link>
		</div>
	);
};

const CharacterView = ({ comic }) => {
	const { name, description, thumbnail } = comic;

	return (
		<div className="single-comic">
			<Helmet>
				<title>{name} character's page</title>
				<meta name="description" content={description} />
			</Helmet>
			<img src={thumbnail} alt={name} className="single-comic__img" />
			<div className="single-comic__info">
				<h2 className="single-comic__name">{name}</h2>
				<p className="single-comic__descr">{description}</p>
			</div>
			<Link to="/" className="single-comic__back">
				Back to all
			</Link>
		</div>
	);
};

export default SingleComicPage;
