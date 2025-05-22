import React from "react";

function Searchbar({filterText, inStockOnly, onFilterTextChange, onInStockChange}){
    return(
        <form>
            <input type="text" placeholder="Search......"  value={filterText} onChange={(e)=>onFilterTextChange(e.target.value)}/>
            <label>
                <input type="checkbox" checked={inStockOnly} onChange={(e)=>onInStockChange(e.target.checked)}/>
                {' '}Only include stocked
            </label>
        </form>
    );
}

export default Searchbar;