function CalcularEnvio(){
    let envio = 0
    if (carrito >= 700) {
        envio = carrito * 0.05
    } else {
        envio = carrito * 0.1
    }

    return envio
}

alert("bienvenido a la tienda");
let choose_per = prompt("¿que es lo que buscas?\n1-teclados\n2-ratones\n3-auriculares\n4-calcular envio\n0-salir");
let carrito = 0
while(choose_per != 0){
    switch(choose_per){
        case "1":
            let keyboards = prompt("elige un teclado\n1-corsairK60pro -150$\n2-ApexPro-TKL -220$\n3-Razer BlackWidow v4Pro -190$\n0-atras");
                while(keyboards != 0){
                    switch(keyboards){
                        case "1":
                            carrito = carrito + 150
                            alert("has agregado un teclado corsairK60Pro")
                            alert("total en el carrito: " + carrito + " $")
                            break;
                        case "2":
                            carrito = carrito + 220
                            alert("has agregado un teclado ApexPro-TKL")
                            alert("total en el carrito: " + carrito + " $")
                            break;
                        case "3":
                            carrito = carrito + 190
                            alert("has agregado un teclado Razer BlackWidow v4Pro")
                            alert("total en el carrito: " + carrito + " $")
                            break;
                        default:
                            alert("accion invalida")
                            break;
                    }

                    keyboards = prompt("elige un teclado\n1-corsairK60pro -150$\n2-ApexPro-TKL -220$\n3-Razer BlackWidow v4Pro -190$\n0-atras");
                
                }
            break;
        case "2":
            let mice = prompt("elige un raton\n1-Razer Viper V2pro -180$\n2-logitech-g502 Hero -150$\n3-Steelseries rival 650 -80$\n0-atras")
                while(mice != 0){
                    switch(mice){
                        case "1":
                            carrito = carrito + 180
                            alert("has agregado un raton Razer Viper V2pro")
                            alert("total en el carrito: " + carrito + " $")
                            break;
                        case "2":
                            carrito = carrito + 150
                            alert("has agregado un raton logitech-g502 Hero")
                            alert("total en el carrito: " + carrito + " $")
                            break;
                        case "3":
                            carrito = carrito + 80
                            alert("has agregado un raton Steelseries rival 650")
                            alert("total en el carrito: " + carrito + " $")
                            break;
                        default:
                            alert("accion invalida")
                            break;
                        
                    }
                    mice = prompt("elige un raton\n1-Razer Viper V2pro -180$\n2-logitech-g502 Hero -150$\n3-Steelseries rival 650 -80$\n0-atras")
                }
            break;
        case "3":
            let headsets = prompt("elige un auricular\n1-corsair-HS80 -120$\n2-Astro-A50 -150$\n3-Razer BlackShark V2 -90$\n0-atras")
                while(headsets != 0){
                    switch(headsets){
                        case "1":
                            carrito = carrito + 120
                            alert ("has agregado un auricular corsair-HS80")
                            alert("total en el carrito: " + carrito + " $")
                            break;

                        case "2":
                            carrito = carrito + 150
                            alert("has agregado un auricular Astro-A50")
                            alert("total en el carrito: " + carrito + " $")
                            break;
                        case "3":
                            carrito = carrito + 90
                            alert("has agregado un auricular Razer BlackShark V2")
                            alert("total en el carrito: " + carrito + " $")
                            break;
                        default:
                            alert("accion invalida")
                            break;
                    }
                    headsets = prompt("elige un auricular\n1-corsair-HS80 -120$\n2-Astro-A50 -150$\n3-Razer BlackShark V2 -90$\n0-atras")
                }
            break;
        case "4":
            let CostoEnvio = prompt("\n1-calcular envio\n0-atras")
                while(CostoEnvio != 0){
                    switch(CostoEnvio){
                        case "1":
                            alert("el costo del envio es " + CalcularEnvio() + " $")
                            break;
                        default:
                            alert("accion invalida")
                            break;
                    }
                    CostoEnvio = prompt("\n1-calcular envio\n0-atras")
                }    
            break;

        default:
            alert("accion invalida");
            break;
        }
        choose_per = prompt("¿que es lo que buscas?\n1-teclados\n2-ratones\n3-auriculares\n4-calcular envio\n0-salir"); 
    };