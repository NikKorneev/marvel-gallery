class MarvelService {
	_apiBase = "https://gateway.marvel.com:443/v1/public/";
	_apiKey = "apikey=681bf7ca5ce7abe51723e4d42426db24";
	_baseOffset = 210;

	getResource = async (url) => {
		let res = await fetch(url);

		if (!res.ok) {
			throw new Error(`Could not find ${url}, status ${res.status}`);
		}

		return await res.json();
	};

	getAllCharacters = async (offset = this._baseOffset) => {
		const res = await this.getResource(
			`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`
		);
		return res.data.results.map(this._transformCharacter);
	};

	getCharacter = async (id) => {
		const res = await this.getResource(
			`${this._apiBase}characters/${id}?${this._apiKey}`
		);
		return this._transformCharacter(res.data.results[0]);
	};

	_transformCharacter = (char) => {
		let descr = "";
		char.description === ""
			? (descr = "No description was found about this character")
			: (descr = char.description);

		// if (descr.length > 200) descr = descr.substring(0, 200).trim() + "...";

		if (char.name.length > 40)
			char.name = char.name.substring(0, 40).trim() + "...";

		return {
			name: char.name,
			description: descr,
			thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
			homepage: char.urls[0].url,
			wiki: char.urls[1].url,
			id: char.id,
			comics: char.comics.items,
		};
	};
}

export default MarvelService;
