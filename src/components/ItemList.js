const ItemList = {
    productData:[
        {
            id: 1,
            pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_841492-MLA48961707198_012022-W.jpg',
            title: 'Placa Madre',
            desc:'',
            price: 100,
        },
        {
            id: 2,
            pictureUrl:'https://mallweb.com.ar/media/catalog/product/cache/1/image/900x/9df78eab33525d08d6e5fb8d27136e95/g/i/gimage_25746.jpg',
            title: 'Placa de Video',
            desc:'',
            price: 150,
        },
        {
            id: 3,
            pictureUrl:'https://media.kingston.com/hyperx/product/hx-product-keyboard-alloy-origins-60-no-1-zm-lg.jpg',
            title: 'Teclado',
            desc:'',
            price: 50,
        },
    ]
}

const promesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(ItemList)
    },2000)
})

promesa.then(resultado=>{
    console.log(resultado)
    return resultado
},error=>{
    console.log('Error:',error)
})

export default ItemList