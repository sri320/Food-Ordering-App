import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props)=>{
    const {resData} = props;
    /* If objects are in different hierchey we will declare like this*/
    const {
        info: {
            cloudinaryImageId,
            name,
            cuisines,
            avgRating,
            sla: { deliveryTime },
            costForTwo
        }
    } = resData;
    return (
        <div className=" m-4 p-4 w-60 bg-gray-100 rounded-lg hover:bg-gray-400">
            <img className=" rounded-lg" alt = "restaurant logo" src={CDN_URL + cloudinaryImageId}/>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{deliveryTime} minutes</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;