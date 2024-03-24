import { CDN_URL } from "../../utils/constants";

const ResturantCard=(props)=>{
   const {resdata}=props;
   console.log(resdata)
    return(
        <div data-testid="resCard" className="res-card m-4 p-4 w-[250px] bg-gray-50 rounded-lg h-[471px] hover:bg-gray-200">
        <img className="res-card-image rounded-lg" src=
        {CDN_URL+
        resdata.info.cloudinaryImageId}></img>
            <h3 className="font-bold py-4 text-lg">{resdata.info.name}</h3>
            <br></br>
            <h3>{resdata.info.cuisines.join(", ")}</h3>
            <br>
            </br>
            <h3>{resdata.info.locality}</h3>
            <br></br>
            <h3>{resdata.info.costForTwo}</h3>
            <br></br>
            <h3>{resdata.info.avgRating} Rating</h3>

        </div>
    )
};

//High Order component
//Takes the rest card as input and it returns the promoted resturant card

export const withPromotedLabel=(ResturantCard)=>{
    return(props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <ResturantCard {...props}></ResturantCard>
            </div>
        )
    }
}

export default ResturantCard;