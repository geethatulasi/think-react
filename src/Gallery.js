import React from "react";
import getImageUrl from "./getImageUrl";
function Gallery(){
    return(
        <>
            <h1>Just for gallery</h1>
            <strong>This text is important!</strong>

        </>
    )
}

function Avatar({person,size}){
    return(
        <>
             <h1>{person.name}</h1>
            <img
                src={getImageUrl(person)}
                alt={person.name}
                height={size}
                width={size}
            />
        </>
    )
}
export function Profile(){
    return(
        <>
            <Avatar person={{name: 'geetha', imageId:'YfeOqp2'}} size={150}/>
            <Avatar person={{name: 'anuradha', imageId:'OKS67lh'}} size={150}/>
            <Avatar person={{name: 'kranthi', imageId: '1bX5QH6'}} size={150}/>
        </> 
    )
}

export default Gallery;