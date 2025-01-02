import Background from "../components/backgroundimg";
import backgroundImage from "../img/123.jpg";
import "./home.css";
// import search_icon from "../Weather-icons/search.png";
// import clear from "../Weather-icons/clear.png";
import Humidity from "../Weather-icons/humidity.png";
import wind from "../Weather-icons/wind.png";
import { base, key } from "../components/apikeys";
import { useEffect, useState } from "react";

function Home() {
    const backimg = backgroundImage;
    const [searchCity, setSearchCity] = useState("indore");
    const [WeatherData, SetWeatherData] = useState("false");
    const handleSearchChange = (event) => {
        setSearchCity(event.target.value);
    };
    const search = async (city) => {
        try {
            const url = `${base}weather?q=${city}&appid=${key}&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            SetWeatherData({
                humidity: data.main.humidity,
                temprature: Math.floor(data.main.temp),
                location: data.name,
                wind: data.wind.speed,
                icon1: data.weather[0].icon,
            });
        } catch (error) {}
    };

    useEffect(() => {
        if (searchCity) {
            search(searchCity);
        }
    }, [searchCity]);

    return (
        <>
            <Background imageUrl={backimg}>
                <div className="weather">
                    <div className="search-bar">
                        <input type="text" placeholder="Search" value={searchCity} onChange={handleSearchChange} />
                        {/* <img src={search_icon} alt="" /> */}
                    </div>
                    <img src={`https://openweathermap.org/img/wn/${WeatherData.icon1}@2x.png`} alt="img" className="weather-icon" />
                    <p className="temperature">{WeatherData.temprature}°C</p>
                    <p className="location">{WeatherData.location}</p>
                    <div className="weather-data">
                        <div className="col">
                            <img src={Humidity} alt="img" />
                            <div>
                                <p>{WeatherData.humidity}%</p>
                                <span>Humidity</span>
                            </div>
                        </div>
                        <div className="col">
                            <img src={wind} alt="img" />
                            <div>
                                <p>{WeatherData.wind} km/h</p>
                                <span>Wind Speed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Background>
        </>
    );
}

export default Home;
