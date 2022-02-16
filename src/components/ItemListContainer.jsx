import React from "react";
import ItemCount from "./ItemCount";
import Item from './Item'
import data from './data'

const ItemList = () =>{
    console.warn(data.productData)
    return(
        <>
        <h1 className="text-center mt-3">Productos</h1>
        <section className="py-4 container">
            <div className="row justify-content-center">
                {data.productData.map((item,index)=>{
                    return(
                        <Item>
                            item={item}
                            key={index}
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                            price={item.price}
                        </Item>
                    )
                })}
            </div> 
        </section>
        </>
    ) 
}

export default ItemList