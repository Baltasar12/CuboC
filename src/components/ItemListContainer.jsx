import React from "react";
import Item from './Item'
import ItemList from "./ItemList";

const ItemListContainer = () =>{
    console.warn(ItemList.productData)
    return(
        <>
        <h1 className="text-center mt-3">Productos</h1>
        <section className="py-4 container">
            <div className="row justify-content-center">
                {ItemList.productData.map((item,index)=>{
                    return(
                        <Item>
                            img={item.pictureUrl}
                            title={item.title}
                            desc={item.desc}
                            price={item.price}
                            item={item}
                            key={index}
                        </Item>
                    )
                })}
            </div> 
        </section>
        </>
    ) 
}

export default ItemListContainer