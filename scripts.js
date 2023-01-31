    function cantidad1(){
        let cantidad1 = parseInt(prompt("Ingresar cantidad a prestar"));
        while (isNaN(cantidad1)){
            alert("Ingresó un valor no numérico, por favor corrija")
            cantidad1 = parseInt(prompt("Ingresar cantidad a prestar"))
        }
        alert("La cantidad es = " + cantidad1)
        return cantidad1
    }

    function cuotas1(){
        let cuotas1 = parseInt(prompt("En cuantas cuotas desea abonar?"));
        while (isNaN(cuotas1)){
            alert("Ingresó un valor no numérico, por favor corrija")
            cuotas1 = parseInt(prompt("En cuantas cuotas desea abonar?"))
        }
        alert("Desea el prestamo en " + cuotas1 + " cuotas?")
        return cuotas1
    }

    let cantidad = cantidad1()
    let cuotas = cuotas1()

    console.log("La cantidad es: " + cantidad)
    console.log("Las cuotas son:" + cuotas)

    function dividir(dato1, dato2){
    let resultado = dato1 / dato2;
    return resultado
    }

    let division = dividir(cantidad, cuotas)

    console.log("Se debe abonar " + cuotas + " cuotas de " + division)

    alert("Se debe abonar " + cuotas + " cuotas de " + division)

