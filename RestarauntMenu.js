import { useEffect, useState } from "react";
import { Params, useParams } from "react-router-dom";
const RestarauntMenu = () => {
const [resInfo, setresInfo] = useState([])
const {resId} = useParams();
useEffect (()=>{
    fetchMenu()
},[]);

const fetchMenu = async () =>{
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

    const json = await data.json()
    console.log(json)
    setresInfo(json.data)

}
const {name, cuisines , costForTwo} = resInfo?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info;

    return(
        <div className="flex">
            <h1>{name}</h1>
            <p>{cuisines}</p>
            <h3>{costForTwo}</h3>

        </div>
    )
}

export default RestarauntMenu;