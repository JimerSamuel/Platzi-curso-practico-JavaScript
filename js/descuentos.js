// const precioOriginal = 120;
// const descuento = 18;



function calcularPreciConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
   
    return precioConDescuento;
}

function onClickButtonPriceDiscount () {
     const inputPrice = document.getElementById('InputPrice');
     const priceValue = inputPrice.value;


     const inputDiscunt = document.getElementById('InputDiscount');
     const discountValue = inputDiscunt.value;

     const precioConDescuento = calcularPreciConDescuento(priceValue, discountValue);

     const resultP = document.getElementById('ResultP');   
     resultP.innerText = 'El precio con descuento son: $' + precioConDescuento  

    }


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });