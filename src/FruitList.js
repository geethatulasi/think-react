import React from "react";
import Fruit from "./Fruit";
function FruitList(){
    return(
        <Fruit
            name="banana"
            price="60"
            imported={true}
        />
    )
}

export default FruitList;