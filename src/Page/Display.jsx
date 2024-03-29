
export default function Display({ weatherData }) {
    if(!weatherData) {
        return null;
    }

    return (
        <div className="display-container">
            <p className="display-title">In {weatherData.name}, it's {weatherData.weather[0].main}.</p>
            <div className="display-conditions-container">
                <h1 className="display-temp">{`${weatherData.main.temp} F`}</h1>
                <div className="display-conditions-container2">
                    <p className="display-wind">{`Wind: ${weatherData.wind.speed} mph`}</p>
                    <p className="display-humidity">{`Humidity: ${weatherData.main.humidity}%`}</p>
                    <p className="display-max">{`Max: ${weatherData.main.temp_max} F`}</p>
                    <p className="display-min">{`Min: ${weatherData.main.temp_min} F`}</p>
                </div>
            </div>
        </div>
    )
}
