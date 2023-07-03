import { Component } from "react";
import PropTypes from "prop-types";

import "./charList.scss";
import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

class CharList extends Component {
	state = {
		loading: true,
		charList: [],
		error: false,
		newItemLoading: false,
		offset: 210,
		charEnded: false,
	};
	marvelService = new MarvelService();
	ref = [];

	onRequest = (offset) => {
		this.onCharListLoading();
		this.marvelService
			.getAllCharacters(offset)
			.then(this.onCharListLoaded)
			.catch(this.onError);
	};

	componentDidMount() {
		this.onRequest();
		this.focusElement();
	}

	onCharListLoading = () => {
		this.setState({
			newItemLoading: true,
		});
	};

	onCharListLoaded = (newCharList) => {
		let ended = false;
		if (newCharList.length < 9) {
			ended = true;
		}

		this.setState(({ offset, charList }) => ({
			loading: false,
			charList: [...charList, ...newCharList],
			error: false,
			newItemLoading: false,
			offset: offset + 9,
			charEnded: ended,
		}));
	};

	onError = () => {
		this.setState({
			loading: false,
			error: true,
		});
	};

	focusElement = (elem) => {
		if (elem) {
			this.ref.push(elem);
		}

		this.ref.forEach((ref) => {
			ref.tabIndex = 0;
			ref.classList.remove("char__item_selected");

			ref.onfocus = () => {
				this.ref.forEach((ref) => {
					ref.className = "char__item";
				});
				ref.className += " char__item_selected";
			};
		});
	};

	renderList = (charList) => {
		const rendered = charList.map((char) => {
			return (
				<li
					className="char__item"
					key={char.id}
					onClick={() => this.props.onCharSelected(char.id)}
					ref={this.focusElement}
				>
					<img
						src={char.thumbnail}
						alt={"Image of" + char.name}
						style={
							char.thumbnail.indexOf("image_not_available") > -1
								? { objectFit: "unset" }
								: null
						}
					/>
					<div className="char__name">{char.name}</div>
				</li>
			);
		});

		return rendered;
	};

	render() {
		const { charList, loading, error, offset, newItemLoading, charEnded } =
			this.state;

		const errorMessage = error ? <ErrorMessage /> : null;
		const spinner = loading ? <Spinner /> : null;
		const content = !(loading || error) ? this.renderList(charList) : null;

		return (
			<div className="char__list">
				{spinner}
				{errorMessage}
				<ul className="char__grid">{content}</ul>
				<button
					className="button button__main button__long"
					disabled={newItemLoading}
					onClick={() => this.onRequest(offset)}
					style={{ display: charEnded ? "none" : "block" }}
				>
					<div className="inner">load more</div>
				</button>
			</div>
		);
	}
}

CharList.propTypes = {
	onCharSelected: PropTypes.func.isRequired,
};

export default CharList;
