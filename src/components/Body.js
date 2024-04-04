import RestaurantCard from "./Restaurantcard";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    // it will also a render the default data
  const [listOfRestaurants,setListOfRestaurants] = useState([]);
  const[filteredRestaurant,setFilteredRestaurant] = useState([]);
  const [searchText,setSearchText] = useState("");

  console.log(listOfRestaurants);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async()=>{
    const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    // This setListOfRestaurants can re-render the BODY component with new data ( restaurant cards )
    // OPTIONAL CHAINING
    setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) return <h1>Looks like you are offline Check your Internet connection</h1>;

  // CONDITIONAL RENDERING
    return listOfRestaurants.length === 0 ? <ShimmerUI /> : (
        <div className="body">
            <div className="flex">
                <div className="m-4 p-4">
                  <input type="text" className=" border border-solid border-black rounded-sm" value = {searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                  <button className=" px-4 bg-green-200 m-3 rounded-md" onClick={()=>{
                  console.log(searchText);
                  const filteredList = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                  setFilteredRestaurant(filteredList);
                  }}>Search</button>
                </div>
                  <div className=" flex m-4 p-4 items-center">
              {/* Filter Button Logic ( TOP RATED RESTAURANTS) */}
                <button className=" px-4 bg-gray-200 rounded-md" onClick={()=>{
                  const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating > 4.3)
                  setListOfRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
                </div>
            </div>

            <div className="flex flex-wrap">
              {/* LOGIC TO DISPLAY CARDS IN BODY  */}
               {filteredRestaurant.map((resPointer)=> (<Link key={resPointer.info.id} to={"/restaurants/" + resPointer.info.id}><RestaurantCard resData={resPointer}/></Link>))};
            </div>
        </div>
    );
}

export default Body;