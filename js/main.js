function saludo() {
    alert("BIENVENIDO USUARIO");
}

function suma() {
    // DECLARAMOS LAS VARIABLES NECESARIAS

    let A = 0;
    let B = 0;
    let SUMA = 0;
    // SOLICITAR VALORES
    alert("Este algoritmo realiza la suma de dos valores ingresados por usted ")
    A = parseInt(prompt("por favor ingrese el primer valor a sumar "))
    B = parseInt(prompt("por favor ingrese el segundo valor a sumar"))

    //REALIZAMOS LAS OPEACIONES


    SUMA = A + B;

    //MOSTRAMOS RESULTADO

    alert("El resultado es" + SUMA + ",las mejores");

}

function resta(){

    let A = 0;
    let B = 0;
    let RESTA = 0;
    
    alert("Este algoritmo realiza la resta de dos valores ingresados por usted ")
    A = parseInt(prompt("por favor ingrese el primer valor a restar "))
    B = parseInt(prompt("por favor ingrese el segundo valor a restar"))

   


    RESTA = A - B;


    alert("El resultado es " + RESTA + ",las mejores parcero");

}



function multiplicacion(){

    let A = 0;
    let B = 0;
    let MULTIPLICACION = 0;
    
    alert("Este algoritmo realiza la multiplicacio de dos valores ingresados por usted ")
    A = parseInt(prompt("por favor ingrese el primer valor a multiplicar "))
    B = parseInt(prompt("por favor ingrese el segundo valor a multiplicar"))

   


    MULTIPLICACION = A * B;


    alert("El resultado es " + MULTIPLICACION + ",las mejores parcero");
}

function division(){
    let A = 0;
    let B = 0;
    let DIVISION = 0;
    
    alert("Este algoritmo realiza la division de dos valores ingresados por usted ")
    A = parseInt(prompt("por favor ingrese el primer valor a division "))
    B = parseInt(prompt("por favor ingrese el segundo valor a division"))

   


    DIVISION = A / B;


    alert("El resultado es " + DIVISION + ",las mejores parcero");
}

function cuadradoNumero(){
    let A = 0;
    let CUADRADO = 0;
    
    alert("Este algoritmo realiza el cuadrado de un numero del valor ingresado por usted ")
    A = parseInt(prompt("por favor ingrese el valor "))

    CUADRADO = A * A;


    alert("El resultado es " + CUADRADO + ",las mejores parcero");
}

function areatriangulo(){
    let BASE = 0;
    let ALTURA = 0;

    alert("Se solicita la base y la altura para iniciar");

    BASE=parseInt(prompt("INGRESE LA ULTURA DEL TRIANGULO"))
    ALTURA=parseInt(prompt("INGRESE LA ALTURA DEL TRIANGULO"))

    AREA = (BASE * ALTURA) / 2
    
    alert("El area del triangulo es de: " + AREA)
}


function numeroMayor(){
    let A,B= 0;

     alert("Se solicitan dos valores para iniciar");

    A= parseInt(prompt("INGRESE EL PRIMER VALOR"));
    B= parseInt(prompt("INGRESE EL SEGUNDO VALOR"));

    if (A == B) {
        alert("LOS VALORES INGRESADOS SON IGUALES");
    }
    else if(A > B){
        alert(A + "ES MAYOR QUE " + B);

    }
    else{
        alert(B + " ES MAYOR QUE " + A);
    }
}

function unidadesMedida(){

    let metros = 0;
    let pulgadas = 0;
    let pies = 0;
    let kilometros = 0;

    alert("Este evento te ayudara a convertir una medida en metros a pulgadas, pies y kilometros");
    metros = parseInt(prompt("Ingrese la medida en metros que le gustaria convertir"));
    
    pulgadas = metros * 39.37;
    pulgadas = pulgadas.toFixed(2);
    pies = metros * 3.28084;
    pies = pies.toFixed(2);
    kilometros = metros / 1000;

    alert("Sus " + metros + " metros son: " + pulgadas + " pulgadas" + "\nSus " + metros + " metros son: " + pies + " pies" + "\nSus " + metros + " metros son: " + kilometros + " kilometros");
}

function unidadesTemperatura(){
   
    let celcios = 0;
    let fahrenheit = 0;
    let kelvin = 0;

    
    alert("Este evento te ayudara a convertir una temperatura de celcios a Fahrenheit y a Kelvin");
    celcios = parseInt(prompt("Ingrese la temperatura que desea convertir en celcios"));

    fahrenheit = ((celcios * 9) / 5) + 32;

    kelvin = celcios + 273.15;
    alert(celcios + " Celcios son: " + fahrenheit + " Fahrenheit" + "\n" + celcios + " Celcios son: " + kelvin + " Kelvin");
}

function promedioEstudiantes(){
   
    let nombre = "";
    let materia = "";
    let nota = 0;
    let sumaNotas = 0;
    let promedio = 0;

    alert("Este evente le ayudara a calcular el promedio de sus notas")
    
    nombre = prompt("Ingrese su nombre por favor");
    materia = prompt("Que materia desea calcular?");

    
    for(i = 1; i < 10; i++){
        nota = parseInt(prompt("Ingrese la nota numero " + i));
        sumaNotas = sumaNotas + nota;
    }
    promedio = sumaNotas * 0.10;
    promedio = promedio.toFixed(2);

   
    if(promedio >= 6){
        alert("Hola " + nombre + " Su promedio de la materia " + materia + " es: " + promedio + "\nPor lo tanto usted  APROBO " + materia)
    }else{
        alert("Hola " + nombre + " Su promedio de la materia " + materia + " es: " + promedio + "\nPor lo tanto usted REPROBO " + materia)
    }

    
}

function descuentoCompra(){
    
    let kilos = 0;
    let descuento = 0;
    let total =0;

   
    alert("Este evento le ayudara a calcular el descuento que le corresponde en su compra");
    kilos = parseInt(prompt("Ingrese la cuantos kilos que usted desea comprar"));

    
    if(kilos <0){
        alert("Por favor ingrese una cantidad adecuada");
    }else if((kilos >= 0) && (kilos <= 2)){
        total = kilos * 4500;
        alert("Su total a pagar es de " + total + ", No aplica descuento");
    }else if ((kilos >= 3) && (kilos <= 5)){
        total = kilos * 4500;
        descuento = total * 0.10;
        alert("Su total a pagar es de " + descuento + ", Cuenta con un descuento del 10%");
    }else if((kilos >= 6) && (kilos <= 9)){
        total = kilos * 4500;
        descuento = total * 0.15;
        alert("Su total a pagar es de " + descuento + ", Cuenta con un descuento del 15%");
    }else{
        total = kilos * 4500;
        descuento = total * 0.20;
        alert("Su total a pagar es de " + descuento + ", Cuenta con un descuento del 20%");
    }

}


function ParImpar(){
    let A= 0;

     alert("Ingrese un valor para iniciar");

    A= parseInt(prompt("INGRESE UN NUMERO"));

    if (A % 2 == 0 ) {
        alert("EL VALOR INGRESADO ES PAR");
    }
    else{
        alert("EL VALOR INGRESADO ES IMPAR" );
    }
}

function calcularSalario(){

    let horasTrabajadas = 0;
    let horasExtras = 0;
    let sueldoExtras = 0;
    let sueldo = 0;

    
    alert("Este evento le ayudara a calcular el salario semanal");
    horasTrabajadas = parseInt(prompt("Ingrese la cantidad de horas que trabajo en la semana"));

    
    if(horasTrabajadas <= 40){
        sueldo = horasTrabajadas * 10000;
        alert("Usted trabajó " + horasTrabajadas + " horas por lo tanto su salario semanal es: " + sueldo); 
    }else{
        horasExtras = horasTrabajadas - 40;
        horasTrabajadas = horasTrabajadas - horasExtras;
        sueldoExtras = horasExtras * 20000;
        sueldo = ((horasTrabajadas * 10000) + sueldoExtras);
        alert("Usted trabajo " + horasExtras + " horas extras" +"\nUsted recibe " + sueldoExtras + " Por sus horas extras " + "\nPor lo tanto su salario total es: " + sueldo);
    }
}


function numeroMenor(){
    let a = 0;
    let b = 0;
    let c = 0;

    alert("Este evento le mostra cual es el menor de tres numeros");

    a = parseInt(prompt("Ingrese el primer numero"));
    b = parseInt(prompt("Ingrese el segundo numero"));
    c = parseInt(prompt("Ingrese el tercer numero"));

    if((a == b) && (b == c)){
        alert("Los numero son iguales");
    }else if((a < b) && (a < c)){
        alert("El numero " + a + " Es el menor de los 3");
    }else if((b < a) && (b < c)){
        alert("El numero " + b + " Es el menor de los 3");
    }else{
        alert("El numero " + c + " Es el menor de los 3");
    }

}


