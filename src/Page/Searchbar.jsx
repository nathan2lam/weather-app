import React, { useState } from "react"

export default function Searchbar() {
    const [city, setCity] = useState("");

    return (
        <div className="searchbar-container">
            <span className="searchbar-label">Enter a city
            </ span>
            <div className="searchbar-input-container">
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
            </div>
        </div>
    )
}