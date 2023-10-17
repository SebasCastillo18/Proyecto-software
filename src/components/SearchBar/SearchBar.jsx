import { useState } from "react";
import "./SearchBar.css"

const SearchBar = ({items, updateItem, changeBackground, isReglamento}) => {
    const [nameValue, setNameValue] = useState('');
    let place = ""

    if(isReglamento){
        place = "Buscar por nombre o número de articulo (1-77)";
    }else{
        place = "Buscar por nombre";
    }

    const handleChange = (e) => {
        const newValue = e.target.value
        setNameValue(newValue);
    }
    const handleSearch = (e) => {
        e.preventDefault();
        let foundItems = items.filter((item) => item.title.includes(nameValue.toUpperCase()) || item.number === Number(nameValue));
        if(foundItems.length){
            if(updateItem(foundItems[0])){
                changeBackground();
            }
        }else{
            console.log("No encontrado")
        }
    }
    return (
        <form className="form" action="">
            <label htmlFor="articulo">Buscar {isReglamento ? ("Articulo") : ("Pregunta")}</label>
            <div className="input-and-search-btn">
                <input
                    className="input"
                    type="text"
                    placeholder={place}
                    value={nameValue}
                    onChange={handleChange}
                />
                <button className="search-btn" onClick={handleSearch}>
                    <i className="bx bx-search-alt"></i>
                </button>
            </div>
        </form>
    )
}

export default SearchBar;