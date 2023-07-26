import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useMarvelService from "../../services/MarvelService";
import SearchForm from "../searchForm/SearchForm";
import setContent from "../../utils/setContent";

import PropTypes from "prop-types";

import "./charInfo.scss";

const CharInfo = (props) => {
	const [char, setChar] = useState(null);

	const { getCharacter, clearError, process, setProcess } =
		useMarvelService();

	useEffect(() => {
		updateChar();
	}, []);

	const prevProps = useRef(props);

	useEffect(() => {
		if (props.charId !== prevProps.charId) {
			updateChar();
		}
	}, [props]);

	const updateChar = () => {
		clearError();
		const { charId } = props;
		if (!charId) {
			return;
		}

		getCharacter(charId)
			.then(onCharLoaded)
			.then(() => setProcess("confirmed"));
	};

	const onCharLoaded = (char) => {
		setChar(char);
	};

	return (
		<div className="char__params">
			<div className="char__info">{setContent(process, View, char)}</div>
			<SearchForm />
		</div>
	);
};

const View = ({ data }) => {
	const { name, description, thumbnail, homepage, wiki, comics } = data;
	const arr = [];

	const checkArr = (comics) => {
		if (comics.length === 0) {
			arr.push("No comics were found about this character.");
		} else {
			for (let i = 0; i < comics.length; i++) {
				if (i > 9) {
					break;
				} else {
					arr.push(
						<li className="char__comics-item" key={i}>
							<Link
								to={`${comics[i].resourceURI.match(
									/comics\/\d+/gi
								)}`}
							>
								{comics[i].name}
							</Link>
						</li>
					);
				}
			}
		}
	};
	checkArr(comics);
	return (
		<>
			<div className="char__basics">
				<img
					src={thumbnail}
					alt={name}
					style={
						thumbnail.indexOf("image_not_available") > -1
							? { objectFit: "unset" }
							: null
					}
				/>
				<div>
					<div className="char__info-name">{name}</div>
					<div className="char__btns">
						<a href={homepage} className="button button__main">
							<div className="inner">homepage</div>
						</a>
						<a href={wiki} className="button button__secondary">
							<div className="inner">Wiki</div>
						</a>
					</div>
				</div>
			</div>
			<div className="char__descr">{description}</div>
			<div className="char__comics">Comics:</div>
			<ul className="char__comics-list">{arr}</ul>
		</>
	);
};

//проверка типов
CharInfo.propTypes = {
	charId: PropTypes.number,
};

export default CharInfo;
