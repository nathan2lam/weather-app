import React, { useState } from "react"

const Searchbar = ({ onSearch }) => {
    const [city, setCity] = useState("");

    const handleChange = (e) => {
        setCity(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        onSearch(city)
    }

    return (
        <div className="searchbar-container">
            <span className="searchbar-label">Enter a city:</ span>
            <form 
            className="searchbar-input-container"
            onSubmit={handleSubmit}
            >
                <input type="text"
                className="searchbar-input"
                value={city}
                onChange={handleChange}
                />
                <button
                type="submit"
                className="searchbar-btn"
                >
                    <img src="./img/magnifying-glass.png" 
                    className="searchbar-btn-img" />
                </button>
            </form>
        </div>
    )
};

export default Searchbar;