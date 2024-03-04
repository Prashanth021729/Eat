import { useContext } from "react";
import { CDN_URL } from "../../Utils/constants";
const RestaruantCard = (props) => {
    const {resData} = props;

    const {
        name,
        avgRating,
        cloudinaryImageId,
        cuisines,
        deliveryTime,
    } = resData?.info;


    return(
        <div className="">
            <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
                <img 
                className="rounded-lg"
                src={CDN_URL + cloudinaryImageId}
                />
            <h1>{name}</h1>
            <p>{cuisines.join(" , ")}</p>
            <h3>{avgRating}</h3>
            <h4>{deliveryTime}</h4>   
            </div>  
        </div>
    );
};

export const withLabelPromoted = (RestaruantCard)=>{
    return(props)=>
    {
        <div>
            <label>Promoted</label>
            <RestaruantCard {...props}/>
        </div>

    }
}

export default RestaruantCard;