import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { UseDispatch } from "react-redux";
import { clearCart } from "../../utils/CartSlice";

const Cart=()=>{

    const cartitems=useSelector((obj)=>obj.cart.items)
    const dispatch=useDispatch();
    function Clearcart()
    {   
        dispatch(clearCart())
    }

    return(
        <div className="text-center m-4 p-4 ">
            <h1 className="font-bold text-2xl">Cart</h1>
            <div className="w-6/12 m-auto">
            <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={Clearcart}>Clear Cart</button>
            {cartitems.length==0 ? <h1 className="font-bold">Your Cart is Empty ! Add Items to Cart</h1>:<h1 className="font-bold">Below Are the List Of your Items</h1>}
                <ItemList items={cartitems}></ItemList>
            </div>
        </div>
    )
}

export default Cart;