import { useState } from "react";
import "./SearchBar.css"

const SearchBar = ({items, updateItem, changeBackground}) => {
    const [nameValue, setNameValue] = useState('');

    const handleChange = (e) => {
        const newValue = e.target.value
        setNameValue(newValue);
    }
    const handleSearch = (e) => {
        e.preventDefault();
        let foundArticles = items.filter((article) => article.title.includes(nameValue.toUpperCase()) || article.number === Number(nameValue));
        if(foundArticles.length){
            if(updateItem(foundArticles[0])){
                changeBackground();
            }
        }else{
            console.log("No encontrado")
        }
    }
    return (
        <form className="form" action="">
            <label htmlFor="articulo">Buscar Articulo</label>
            <input
                type="text"
                placeholder="Buscar por nombre o número de artículo (1-77)"
                value={nameValue}
                onChange={handleChange}
            />
            <button className="search-btn" onClick={handleSearch}>
                <i className="bx bx-search-alt"></i>
            </button>
        </form>
    )
}

export default SearchBar;