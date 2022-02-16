import React from "react";
import './CartWidget.css'

let style = {
    marginRight:35,
    borderWith: 0
}

export function CartWidget(props){
    return(
        <button style={style}><i className={"i bi-cart2 cart"}></i></button>
    );
}