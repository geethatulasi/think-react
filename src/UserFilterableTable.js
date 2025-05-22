import React, { useState } from "react";
import UserSearchBar from "./UserSearchBar";
import UserTable from "./UserTable";
function UserFilterableTable(){
    const Users = [
        {category: "manager", level: "1", manager_level: true, name: 'Akash'},
        {category: "employee", level: "2", manager_level: false, name: 'rajesh'},
        {category: "manager", level: "1", manager_level: true, name: 'Madhu'},
        {category: "employee", level: "2", manager_level: false, name: 'Jan'},
        {category: "manager", level: "1", manager_level: true, name: 'Vardhan'}
    ]
    const [userText, setUserText] = useState(" ");
    const [onlyManager, setOnlyManager] = useState(false);
    return(<>
        <UserSearchBar
            userText={userText}
            onlyManager={onlyManager}
            onUserTextChange={setUserText}
            onOnlyManagerChange={setOnlyManager}
        />
        <UserTable
            users={Users}
            userText={userText}
            onlyManager={onlyManager}
        />
    </>)
}

export default UserFilterableTable;