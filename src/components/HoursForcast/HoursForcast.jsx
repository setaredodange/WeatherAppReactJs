import React from "react";
import WeatherItem from "../WeatherItem/WeatherItem";

const HoursForcast = ({data}) => {
    return data?.list.map((item, index) => (<WeatherItem item={item}/>)
    )
}

export default HoursForcast