import RestaruantCard,{withLabelPromoted} from "./Restaruantcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../../Utils/useOnlineStatus";
const Body = () => {
    const [listOfRestaurants, setlistOfRestaurants] = useState([]);
    const [filteredRes, setfilteredRes] = useState([]);
    const [searchText, setsearchText] = useState([]);
    const cardPromoted = withLabelPromoted(RestaruantCard); 
    
    useEffect (()=>{
        fetchData();
    },[])

  const fetchData = async () => {
      const data = await fetch(
           "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          );

        const json = await data.json()
        console.log(json);
        setlistOfRestaurants(json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants) 
        setfilteredRes(json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)   
    };

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h1>looks like youre offline</h1>
        return listOfRestaurants?.length === 0 ?(
       <Shimmer/>
        ): (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                    type="text" 
                    className ="border border-solid border-black flex justify-self-center"
                    placeholder="Ashoka" 
                    value={searchText}
                    onChange={(e)=>{
                        setsearchText(e.target.value)
                }}/>
                <button 
                className="px-4 py-2 bg-green-100 m-4 rounded-lg" 
                onClick={()=>{
                const filteredRes = listOfRestaurants.filter((res)=>
                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setlistOfRestaurants(filteredRes);
                }}>search
                </button>
                </div>
                < button 
                className="filter-btn" 
                onClick={() => {
                const filteredList= listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4
                );
                setlistOfRestaurants(filteredList);
            }}
            > 4+ Rated
            </button>
            </div>
            <div className="restruant-container">
            <div className="flex flex-wrap">
                {listOfRestaurants.map((restaurant)=>(
                restaurant?.data?.promoted ? (
                <cardPromoted resData={restaurant}/>
                ) :(
                <RestaruantCard key={restaurant?.info?.id} resData={restaurant}/>
                )
                ))}
            </div>
            </div>
        </div>
    );
};

export default Body;



  