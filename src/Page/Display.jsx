import data from "../data/index"

export default function Display() {
    return(
        <div className="display-container">
            <p className="display-title">In {data.city}, it's {data.condition}.</p>
            <div className="display-conditions-container">
                <h1 className="display-temp">{data.temp}</h1>
                <div className="display-conditions-container2">
                    <p>{data.windSpeed}</p>
                    <p>{data.rainChance}</p>
                    <p>{data.humidity}</p>
                </div>
            </div>
        </div>
    )
}
//add classnames