import React, { useState } from "react"

export default function Searchbar() {
    const [city, setCity] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCity(e.target.elements.city.value)
    }

    return (
        <div className="searchbar-container">
            <span className="searchbar-label">Enter a city</ span>
            <form 
            className="searchbar-input-container"
            onSubmit={handleSubmit}>
                <input type="text"
                className="searchbar-input"
                name="city"
                id="city"
                />
                <button
                type="submit"
                className="searchbar-btn">
                    Submit
                </button>
            </form>
        </div>
    )
}