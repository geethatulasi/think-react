import React from "react";

function FruitData({name,price,imported}){
    return(
        <ul>
            <li>{imported && name}</li>
        </ul>
    )
}

export default FruitData;