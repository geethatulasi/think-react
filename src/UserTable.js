import React from "react";
import UserRow from "./UserRow";
function UserTable({users, userText, onlyManager}){
    const rows = []
    users.forEach((user)=>{
        if(user.name.toLowerCase().indexOf(userText.toLowerCase()) === -1 ){
            return;
        }
        if(onlyManager && !user.manager_level){
            return;
        }
        rows.push(
            <UserRow user={user} key={user.name} />
        )
    })
    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Level</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
}

export default UserTable;