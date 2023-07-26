import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./charList.scss";
import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

const CharList = (props) => {
	const [charList, setCharList] = useState([]);
	const [newItemLoading, setNewItemLoading] = useState(false);
	const [offset, setOffset] = useState(210);
	const [charEnded, setCharEnded] = useState(false);

	const { loading, error, getAllCharacters, process, setProcess } =
		useMarvelService();

	useEffect(() => {
		onRequest(offset, true);
	}, []);

	const itemRefs = useRef([]);

	const onRequest = (offset, initial) => {
		initial ? setNewItemLoading(false) : setNewItemLoading(true);
		getAllCharacters(offset)
			.then(onCharListLoaded)
			.then(() => setProcess("confirmed"));
	};

	const onCharListLoaded = (newCharList) => {
		let ended = false;
		if (newCharList.length < 9) {
			ended = true;
		}

		setCharList((charList) => [...charList, ...newCharList]);
		setNewItemLoading(false);
		setOffset((offset) => offset + 9);
		setCharEnded(ended);
	};

	const focusOnItem = (id) => {
		itemRefs.current.forEach((item) => {
			item.classList.remove("char__item_selected");
		});
		itemRefs.current[id].classList.add("char__item_selected");
		itemRefs.current[id].focus();
	};

	const renderList = (charList) => {
		const rendered = charList.map((char, i) => {
			return (
				<CSSTransition classNames="character" timeout={i * 600} key={i}>
					<li
						className="char__item"
						tabIndex={0}
						onClick={() => {
							props.onCharSelected(char.id);
							focusOnItem(i);
						}}
						ref={(el) => (itemRefs.current[i] = el)}
					>
						<img
							src={char.thumbnail}
							alt={"Image of" + char.name}
							style={
								char.thumbnail.indexOf("image_not_available") >
								-1
									? { objectFit: "unset" }
									: null
							}
						/>
						<div className="char__name">{char.name}</div>
					</li>
				</CSSTransition>
			);
		});

		return rendered;
	};

	const errorMessage = error ? <ErrorMessage /> : null;
	const spinner = loading && !newItemLoading ? <Spinner /> : null;

	return (
		<div className="char__list">
			{spinner}
			{errorMessage}
			<ul>
				<TransitionGroup className="char__grid">
					{renderList(charList)}
				</TransitionGroup>
			</ul>
			<button
				className="button button__main button__long"
				disabled={newItemLoading}
				onClick={() => onRequest(offset)}
				style={{ display: charEnded ? "none" : "block" }}
			>
				<div className="inner">load more</div>
			</button>
		</div>
	);
};

CharList.propTypes = {
	onCharSelected: PropTypes.func.isRequired,
};

export default CharList;
