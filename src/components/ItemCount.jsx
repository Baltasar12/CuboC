import React from 'react';
import {useCart} from "react-use-cart";

function ItemCount() {
  
  const{
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();

  if (isEmpty) return <h1 className='text-center'>Tu carro está vacio</h1>
  return (
    <section className='py-4 container'>
    <div className='row justify-content-center'>
      <div className='col-12'><h5>Carro({totalUniqueItems}). Productos totales ({totalItems})</h5></div>
      <table className='table table-light table-hover m-0'>
        <tbody>
        {items.map((item,index)=>{
          return(
          <tr key={index}>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>Cantidad:({item.quantity})</td>
            <td>
              <button className='btn btn-info ms-2' onClick={()=>updateItemQuantity(item.id, item.quantity-1)}>-</button>
              <button className='btn btn-info ms-2' onClick={()=>updateItemQuantity(item.id, item.quantity+1)}>+</button>
              <button className='btn btn-danger ms-2' onClick={()=> removeItem(item.id)}>Borrar Producto</button>
            </td>
          </tr>
          )
        })}
        </tbody>
      </table>
    </div>
    </section>
  );
}

export default ItemCount


/*     
     <p>Has agregado {count} productos</p>
      <button onClick={() => setCount(count - 1)}>
        -
      </button>
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
*/ 