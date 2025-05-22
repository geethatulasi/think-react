// this example is for conditional rendering

import React from "react";

function Item({name,isPacked}){
    // ONE way
    // if(isPacked){
    //     return <li style={{color: 'green'}}>{name}</li>
    // }
    // return <li>{name}</li>

    // other way
    return <li>{name} {isPacked && '✅'}</li>
}
function PackingList(){
    return(
        <section>
            <ul>
                <Item name="fog" isPacked={true} />
                <Item name="Axe" isPacked={false} />
                <Item name="Spinzz" isPacked={true} />
            </ul>
        </section>
    )
}

export default PackingList;