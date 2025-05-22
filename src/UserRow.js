import React from "react";

function UserRow({user}){
    const name = !user.manager_level ? user.name : 
    <span style={{color: 'red'}}>
        {user.name}
    </span>
    return(
        <tr>
            <td>{name}</td>
            <td>{user.level}</td>
        </tr>
    );
}

export default UserRow;