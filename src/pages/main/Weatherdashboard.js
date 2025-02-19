import React, { useEffect, useState } from "react";
import '../../css/Weatherdashboard.css'

const WeatherCard = ({ day, icon, minTemp, maxTemp, bgColor }) => (
    <div className={`weather-card ${bgColor}`}>
        <h3 className="day">{day}</h3>
        <div className="icon-container">
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon" />
        </div>
        <p className="temperature">{minTemp}° | <span className="max-temp">{maxTemp}°</span></p>
    </div>
);

    const WeatherDashboard = () => {
    const [weatherData, setWeatherData] = useState([]);
    const days = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"];
    const apiKey = "1f16277f462f748ef883690cc4e1dbc8";
    // const apiKey = "7f038933348f4a73628af7f83df40e98";
    const city = "Seoul";
    // const lat = 37.715133; // 서울 위도
    // const lon = 127.0016985; // 서울 경도

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                const dailyData = data.list.filter((reading, index) => index % 8 === 0);
                setWeatherData(dailyData);
            });
    }, []);

    // useEffect(() => {
    //     fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${apiKey}`)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             if (data && data.daily) {
    //                 setWeatherData(data.daily.slice(0, 7)); // 7일치 데이터 가져오기
    //             } else {
    //                 console.error("API 응답에서 daily 데이터 없음:", data);
    //             }
    //         })
    //         .catch((error) => console.error("API 실패:", error))
    // }, []);

    return (
        <div className="weather-dashboard">
            {weatherData.map((dayData, index) => (
                <WeatherCard
                    key={index}
                    day={days[index]}
                    icon={dayData.weather[0].icon}
                    minTemp={Math.round(dayData.main.temp_min)}
                    maxTemp={Math.round(dayData.main.temp_max)}
                    bgColor={index === 5 ? "gray" : index === 6 ? "red" : "blue"}
                />
            ))}
        </div>
    );
};

export default WeatherDashboard;