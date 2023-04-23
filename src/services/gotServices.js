export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return await res.json();
    }
    getAllCharacters() {
        return this.getResource(`/characters?page=56pageSize=10`);
    }
    getCharacter(id) {
        return this.getResource(`/characters/${id}`);
    }

    getAllHouses(){
        return this.getResource(`/houses?page=56pageSize=10`);
    }
    getHouse(id) {
        return this.getResource(`/houses/${id}`);
    }

    getAllBooks(){
        return this.getResource(`/books?page=56pageSize=10`);
    }
    getBook(id) {
        return this.getResource(`/books/${id}`);
    }

   
}

const got = new GotService();

got.getAllCharacters()
    .then(res => console.log(res));

// got.getBook(4)
//     .then(res => {
//         console.log(res);
//     });