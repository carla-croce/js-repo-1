let planes = "1. Planes de Entrenamiento / 2. Planes Alimenticios / 3. 2 en uno";

let duracion = "1. Adquirir el plan por 1 mes / 2. Adquirir el plan por 3 meses /3. Adquirir el plan por 6 meses";


let eleccion = parseInt(prompt(`Elija una de nuestras opciones: ${planes}`));

while(eleccion != "ESC"){

    if(eleccion === 1){
        
        let respuesta = parseInt(prompt("Ha seleccionado la opción 'Planes de Entrenamiento'. Elija la duración:" + duracion));
    
        switch(respuesta){
            case 1:
                alert("Adquirir el plan por 1 mes");
                break;

            case 1:
                alert("Adquirir el plan por 3 meses");
                break;

            case 3:
                alert("Adquirir el plan por 6 meses");
                break

            default:
                alert("Lo sentimos, la opción ingresada es incorrecta");
                break;

        }

        eleccion = parseInt(prompt(`Elija una de nuestras opciones: ${planes}`));

    }else if(eleccion === 2){

        let respuesta = parseInt(prompt("Ha seleccionado la opción 'Planes Alimenticios'. Elija la duración:" + duracion));

        switch(respuesta){
            case 1:
                alert("Adquirir el plan por 1 mes");
                break;
            case 2:
                alert("Adquirir el plan pr 3 meses");
                break;
            case 3:
                alert("Adquirir el plan por 6 meses");
                break;
        
            default:
                alert("Lo sentimos, la opción ingresada es incorrecta");
                break;
        }

        eleccion = parseInt(prompt(`Elija una de nuestras opciones: ${planes}`));

    }else if (eleccion === 3){
    
        let respuesta = parseInt(prompt("Ha seleccionado la opción '2 en uno'. Elija la duración:" + duracion));

        switch(respuesta){
            case 1:
                alert("Adquirir el plan por 1 mes");
                break;
            case 2:
                alert("Adquirir el plan por 3 meses");
                break;
            case 3:
                alert("Adquirir el plan por 6 meses");
                break;
        
            default:
                alert("Lo setimos, la opción ingresada es incorrecta");
                break;
        }

        eleccion = parseInt(prompt(`Elija una de nuestras opciones: ${planes}`));
}

}