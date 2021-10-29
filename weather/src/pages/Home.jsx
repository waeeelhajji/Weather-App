import React ,{useState} from 'react'
import {useLazyQuery} from "@apollo/client"
import {GETING_THEWEATHER_QUERY} from "../graphql/Queries"


function Home() {
    const [citysearched,setCitySearched]=useState("")


    const [getWether,{leoding,data,error}] = useLazyQuery(GETING_THEWEATHER_QUERY,{
        variables:{name:citysearched}
    })

    if (error) return <h1>error found</h1>
    if (data) {
        // console.log(data)
    }
    return (
        <div className="home">
            <h1>Search for the weather</h1>
            <input type="text" placeholder="the name of the city....." onChange={(event)=>{setCitySearched(event.target.value)}}/>
            <button onClick={() => getWether()}>Search</button>
            
            <div className="weather">
                <h1>{data.getCityByName.name}</h1>
                <h1>{data.getCityByName.weather.temperature.actual}</h1>
                <h1>Description :{data.getCityByName.weather.summary.description}</h1>
                <h1> speed {data.getCityByName.weather.wind.speed}</h1>
            </div>
        </div>
    )
}

export default Home
