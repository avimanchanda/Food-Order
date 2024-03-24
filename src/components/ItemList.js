import { useDispatch } from "react-redux";
import { CDN_URL } from "../../utils/constants";
import { addItem } from "../../utils/CartSlice";

const ItemList=(props)=>{

    const {items,dummydata}=props;
    console.log(dummydata)

    const dispatch=useDispatch();

    const handleAddItem=(item)=>{
        //Dispatch an action
        dispatch(addItem(item))
    }

    return(
        <div>
            
                {items.map((obj)=>{
                    return(
                        <div key={obj?.card?.info?.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">

                        
                        <div className="w-9/12">
                        <div className="py-2">
                        <span>{obj?.card?.info?.name}</span>  
                        <span> - ₹ {obj?.card?.info?.price ? obj?.card?.info?.price/100 : obj?.card?.info?.defaultPrice/100}</span>
                        
                        </div>
                        <p className="text-xs">{obj?.card?.info?.description}</p>
                        </div>
                        <div className="w-3/12">
                        <div className="absolute">
                        <button className="p-2 bg-black text-white shadow-lg rounded-lg mx-[97px] " onClick={()=>handleAddItem(obj)}>Add +</button>
                        </div>
                        <img  className=" object-cover" src={CDN_URL + obj?.card?.info?.imageId}></img>
                    </div>
                    </div>
                    )
                })}
            
        </div>
    )
}

export default ItemList;