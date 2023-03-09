// let planes = "1. Planes de Entrenamiento / 2. Planes Alimenticios / 3. 2 en uno";

// let duracion = "1. Adquirir el plan por 1 mes / 2. Adquirir el plan por 3 meses /3. Adquirir el plan por 6 meses";


// let eleccion = parseInt(prompt(`Elija una de nuestras opciones: ${planes}`));

// while(eleccion != "ESC"){

//     if(eleccion === 1){
        
//         let respuesta = parseInt(prompt("Ha seleccionado la opción 'Planes de Entrenamiento'. Elija la duración:" + duracion));
    
//         switch(respuesta){
//             case 1:
//                 alert("Adquirir el plan por 1 mes");
//                 break;

//             case 1:
//                 alert("Adquirir el plan por 3 meses");
//                 break;

//             case 3:
//                 alert("Adquirir el plan por 6 meses");
//                 break

//             default:
//                 alert("Lo sentimos, la opción ingresada es incorrecta");
//                 break;

//         }

//         eleccion = parseInt(prompt(`Elija una de nuestras opciones: ${planes}`));

//     }else if(eleccion === 2){

//         let respuesta = parseInt(prompt("Ha seleccionado la opción 'Planes Alimenticios'. Elija la duración:" + duracion));

//         switch(respuesta){
//             case 1:
//                 alert("Adquirir el plan por 1 mes");
//                 break;
//             case 2:
//                 alert("Adquirir el plan pr 3 meses");
//                 break;
//             case 3:
//                 alert("Adquirir el plan por 6 meses");
//                 break;
        
//             default:
//                 alert("Lo sentimos, la opción ingresada es incorrecta");
//                 break;
//         }

//         eleccion = parseInt(prompt(`Elija una de nuestras opciones: ${planes}`));

//     }else if (eleccion === 3){
    
//         let respuesta = parseInt(prompt("Ha seleccionado la opción '2 en uno'. Elija la duración:" + duracion));

//         switch(respuesta){
//             case 1:
//                 alert("Adquirir el plan por 1 mes");
//                 break;
//             case 2:
//                 alert("Adquirir el plan por 3 meses");
//                 break;
//             case 3:
//                 alert("Adquirir el plan por 6 meses");
//                 break;
        
//             default:
//                 alert("Lo setimos, la opción ingresada es incorrecta");
//                 break;
//         }

//         eleccion = parseInt(prompt(`Elija una de nuestras opciones: ${planes}`));
// }

// }



// SEGUNDA ENTREGA
// Tienda de venta de indumentaria deportiva


const stock = [
{id: 1 , nombre: "top", precio: 1000},
{id: 2 , nombre: "remera hombre", precio: 2000},
{id: 3 , nombre: "remera mujer", precio: 2000},
];

for(const producto of stock){
    console.log(producto);
}


let nombre = prompt("Ingrese el nombre del producto");
let precio = prompt("Ingrese el precio del producto");

let producto = {
    id: producto.lenght + 1,
    nombre,
    precio
};

productos.push(producto);
console.log(stock);

stock.forEach(producto => console.log(producto));

let nombres = stock.map(item => item.nombre);
console.log(nombres);

let precios = stock.map(item => item.precio);
console.log(precios);

