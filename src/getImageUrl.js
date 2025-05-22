import React from "react";

function getImageUrl(person, size='s'){
    return(
        `https://i.imgur.com/${person.imageId}${size}.jpg`
    )
}

export default getImageUrl;