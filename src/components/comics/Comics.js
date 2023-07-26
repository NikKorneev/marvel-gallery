import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import useMarvelService from "../../services/MarvelService";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Spinner from "../spinner/Spinner";

import "./comicsPage.scss";

const Comics = () => {
	const [newComicsLoading, setNewComicsLoading] = useState(false);
	const [comicsList, setComicsList] = useState([]);
	const [offset, setOffset] = useState(210);
	const { getAllComics, loading, error } = useMarvelService();

	useEffect(() => {
		onRequest(offset, true);
	}, []);

	const onRequest = (offset, initial) => {
		initial ? setNewComicsLoading(false) : setNewComicsLoading(true);
		getAllComics(offset).then(onComicsLoaded);
	};

	const onComicsLoaded = (comicsLoaded) => {
		setOffset((offset) => offset + 9);
		setComicsList((comicsList) => [...comicsList, ...comicsLoaded]);
		setNewComicsLoading(false);
	};

	const renderList = (comicsList) => {
		return comicsList.map((item, i) => {
			return (
				<CSSTransition classNames="comics" timeout={i * 600} key={i}>
					<li className="comics__item" tabIndex={0}>
						<Link end to={`/comics/${item.id}`}>
							<img
								src={item.thumbnail}
								alt={"Image of" + item.name}
								style={
									item.thumbnail.indexOf(
										"image_not_available"
									) > -1
										? { objectFit: "contain" }
										: null
								}
							/>
							<div className="comics__title">{item.title}</div>
							<div className="comics__price">{item.price}</div>
						</Link>
					</li>
				</CSSTransition>
			);
		});
	};

	return (
		<>
			{loading && !newComicsLoading ? <Spinner /> : null}
			<ul>
				<TransitionGroup className="comics">
					{renderList(comicsList)}
				</TransitionGroup>
			</ul>
			<button
				className="button button__main button__long"
				disabled={newComicsLoading}
				onClick={() => onRequest(offset)}
			>
				<div className="inner">load more</div>
			</button>
		</>
	);
};

export default Comics;
