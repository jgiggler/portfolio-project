import React, {useState} from "react";
import {MdAddCircle, MdRemoveCircle} from "react-icons/md";

function ProductQuantity() {
    const [quantity, setQuantity] = useState(0);
    const increase = () => setQuantity(quantity === 10 ? quantity:quantity + 1)
    const decrease = () => setQuantity(quantity === 0 ? quantity:quantity - 1)
    return (
        <>
        <MdRemoveCircle onClick={decrease} className="grow" />
        <span id="bigger"> {quantity} </span> 
        <MdAddCircle onClick={increase} className="grow"/>
        </>
    );
}
    export default ProductQuantity;