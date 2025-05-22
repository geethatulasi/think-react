import React, { useState } from "react";
import Searchbar from './Searchbar';
import Productstable from "./Productstable";
function Filterabletable(){
    const products = [
    {category: 'fruit', price: '$2', stocked: true, name: 'apple'},
    {category: 'fruit', price: '$3', stocked: true, name: 'banana'},
    {category: 'fruit', price: '$1', stocked: false, name: 'mango'},
    {category: 'vegetable', price: '$5', stocked: true, name: 'potato'},
    {category: 'vegetable', price: '$1', stocked: false, name: 'tomato'},
    {category: 'vegetable', price: '$4', stocked: true, name: 'raddish'},

]
    const [filterText, setFilterText] = useState(' ')
    const [inStockOnly, setInstockOnly] = useState(false);
    return(
        <>
             <Searchbar 
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange = {setFilterText}
                onInStockChange = {setInstockOnly}
            />
            <Productstable 
                products={products}
                filterText={filterText}
                inStockOnly={inStockOnly}
            />
        </>
    )
}


export default Filterabletable;