
export default function Display({ weatherData }) {
    if(!weatherData) {
        return null;
    }

    let src = ""
    let condition = ""

    switch (weatherData.weather[0].main) {
        case "Clouds":
            condition = "cloudy";
            src = "cloudy";
            break;
        case "Mist":
            condition = "misty";
            src = "misty";
            break;
        case "Rain":
            condition = "rainy";
            src = "rainy";
            break;
        case "Clear":
            condition = "sunny";
            src = "sunny";
            break;
        case "Haze":
            condition = "hazy";
            src = "hazy";
            break;
        case "Smoke":
            condition = "smoky";
            src = "smoky";
            break;
        default:
            break;
    }

    
    return (
        <div className="display-container">
            <p className="display-title">In {weatherData.name}, it's {condition}</p>
            <div className="display-conditions-container">
                <div className="display-temp">
                    <img src={`./img/${src}.png`} className="display-temp-img" alt="condition" />
                    <p className="display-temp-text">{`${weatherData.main.temp}°`}</p>
                </div>
                <div className="display-conditions-container2">
                    <div className="display-data-container">
                        <img src="./img/wind.png" className="display-conditions-img" alt="wind" />
                        <p className="display-wind">{`${weatherData.wind.speed} mph`}</p>
                    </div>
                    <div className="display-data-container">
                        <img src="./img/drop.png" className="display-conditions-img" alt="humidity" />
                        <p className="display-humidity">{`${weatherData.main.humidity}%`}</p>
                        </div>
                    <div className="display-data-container">
                        <img src="./img/high.png" className="display-conditions-img" alt="high" />
                        <p className="display-max">{`${weatherData.main.temp_max}°`}</p>
                    </div>
                    <div className="display-data-container">
                        <img src="./img/low.png" className="display-conditions-img" alt="low" />
                        <p className="display-min">{`${weatherData.main.temp_min}°`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
