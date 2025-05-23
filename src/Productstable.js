import React from "react";
import ProductRow from "./ProductRow";
import ProductCategory from "./ProductCategory";
function Productstable({products, filterText, inStockOnly}){
    const rows = []
    let lastCategory = null;
    products.forEach((product)=>{
       if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
            return;
        }
        if(inStockOnly && !product.stocked){
            return;
        }
        if(product.category !== lastCategory){
            rows.push(
                <ProductCategory category={product.category} key={product.category} />
            )
        }
        rows.push(
            <ProductRow product={product} key={product.name} />
        )
        lastCategory = product.category
    });
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </>
    )
}

export default Productstable;