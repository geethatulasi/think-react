import React from "react";
import FruitData from "./FruitData";
function Fruit({name,price,imported}){
    return(
        <>
        <FruitData
            name={name}
            price={price}
            imported={imported}
        />
        </>
    )
}

export default Fruit;