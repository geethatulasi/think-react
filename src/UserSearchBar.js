import React from "react";

function UserSearchBar({userText, onlyManager, onUserTextChange, onOnlyManagerChange}){
    return(
        <>
            <input
                type="text"
                placeholder="Search..."
                value={userText}
                onChange={(e)=>onUserTextChange(e.target.value)}
            />
            <label>
                <input
                    type="checkbox"
                    checked={onlyManager}
                    onChange={(e)=>onOnlyManagerChange(e.target.checked)}
                />
                {" "}
                only include managers
            </label>
        </>
    )
}

export default UserSearchBar;