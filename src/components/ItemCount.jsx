import React, { useState } from 'react';

let style1 = {
    marginLeft:130,
}

let style2 = {
    marginLeft:25,
}

function ItemCount() {
    // Declaración de una variable de estado que llamaremos "count"
    const [count, setCount] = useState(1);
  
    return (
      <div>
        <p>Has agregado {count} productos</p>
        <button onClick={() => setCount(count + 1)} style={style2}>
          +
        </button>
        <button onClick={() => setCount(count - 1)} style={style1}>
            -
        </button>
      </div>
    );
  }

export default ItemCount