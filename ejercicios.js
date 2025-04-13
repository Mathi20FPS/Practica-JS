//Ejercicio 1
/*let num1 = 2
let num2 = 5

let suma = num1 + num2;

console.log("La suma de ambos es: " + suma);*/

//Ejercicio 2
/*let num1 = 12
let num2 = 3
let num3 = 5
let mayor
let menor

mayor = Math.max(num1, num2, num3) //podes sacar el maximo con Math.max
menor = Math.min(num1, num2, num3)

console.log("el mayor es: " + mayor);
console.log("el menor es: " + menor);*/

//Ejercicio 3 
/*let palabra = "Hola mundo como estan"; // acá podés cambiar la palabra que quieras
let cantidad = palabra.length; //.length te permite contal las letras

console.log("La palabra " + palabra, "/ tiene: " + cantidad + " " + "letas");*/

//Ejercicio 4
/*let numero = 12;

if (numero % 2 === 0) { // % sirve para obtener el resto de una división.
    console.log(`${numero} es un número par`); // al dividir por 2 es 0, el número es par.
} else {
    console.log(`${numero} no es un número par`);
}*/

//Ejercicio 5

/*let palabra = "Tio Lucho"; // Cambiá esto por la palabra que quieras
let n = 14;            // Cambiá esto por cuántas veces querés repetirla

// Repetimos la palabra n veces
let resultado = palabra.repeat(n);

console.log(resultado);*/

//Ejercicio 6

/*let num1 = 2;  
let num2 = 6;  

console.log("Los numeros entre num1 y num2");

if (num1 < num2) {
    // Bucle ascendente
    for (let i = num1 + 1; i < num2; i++) {
        console.log(i);
    }
} else if (num1 > num2) {
    // Bucle descendente
    for (let i = num1 - 1; i > num2; i--) {
        console.log(i);
    }
} else {
    console.log("Ambos números son iguales, no hay números entre ellos.");
}*/

//Ejercicio 7

/*let num1 = 4;   
let num2 = 17;  

let multiplosDe3 = []; // Guardamos los múltiplos en un array

if (num1 < num2) {
    for (let i = num1 + 1; i < num2; i++) {
        if (i % 3 === 0) {
            multiplosDe3.push(i);
        }
    }
} else if (num1 > num2) {
    for (let i = num1 - 1; i > num2; i--) {
        if (i % 3 === 0) {
            multiplosDe3.push(i);
        }
    }
} else {
    console.log("Los números son iguales, no hay valores entre ellos.");
}

if (multiplosDe3.length > 0) {
    let lista = multiplosDe3.join(", ");
    console.log("Múltiplos de 3 entre " + num1 + " y " + num2 + ': "' + lista + '"');
} else {
    console.log("No hay múltiplos de 3 entre " + num1 + " y " + num2);
}*/

//Ejercicio 8

/*for (let i = 1; i < 100; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
        console.log(i);
    }
}*/

//Ejercicio 9

/*let numeros = [3, 7, 2, 1, 8];
let suma = 0; // Empezamos con la suma en 0

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i]; // Sumamos el valor de cada elemento
}

console.log("La suma de los elementos del array es:", suma);*/

//Ejercicio 10

/*let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
let sumaPares = 0; // Empezamos con la suma en 0

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) { // Si el número es par
        sumaPares += numeros[i]; // Sumamos el número par a sumaPares
    }
}

console.log("La suma de los elementos pares del array es:", sumaPares);*/

//Ejercicio 11

/*let palabra = "MatiasPerez"; 
let conteo = {}; //guarda cada letra y su cantidad

for (let letra of palabra) {
    // Si la letra ya existe en el objeto, sumamos 1
    if (conteo[letra]) {
        conteo[letra]++;
    } else {
        // Si no existe, la inicializamos con 1
        conteo[letra] = 1;
    }
}

for (let letra in conteo) {
    console.log("- Letra: " + letra + " | Cantidad: " + conteo[letra]);
}*/

//Ejercicio 12

// Creamos una lista de personas, cada una como un objeto
/*let personas = [
    { nombre: "Ana", sexoBiologico: "F", edad: 25 },
    { nombre: "Carlos", sexoBiologico: "M", edad: 30 },
    { nombre: "Caterin", sexoBiologico: "F", edad: 42 },
    { nombre: "Ricardo", sexoBiologico: "M", edad: 12 },
    { nombre: "María", sexoBiologico: "F", edad: 19 },
    { nombre: "Pedro", sexoBiologico: "M", edad: 68 }
];

// Variables para los cálculos
let sumaEdad = 0;
let mujerMayor = null;
let hombreMenor = null;

let sumaEdadMujeres = 0;
let contadorMujeres = 0;

// Recorremos la lista de personas
for (let persona of personas) {
    // Sumamos la edad total
    sumaEdad += persona.edad;

    // Buscar la mujer con mayor edad
    if (persona.sexoBiologico === "F") {
        if (!mujerMayor || persona.edad > mujerMayor.edad) {
            mujerMayor = persona;
        }

        // Sumar edad y contar mujeres para promedio
        sumaEdadMujeres += persona.edad;
        contadorMujeres++;
    }

    // Buscar el hombre con menor edad
    if (persona.sexoBiologico === "M") {
        if (!hombreMenor || persona.edad < hombreMenor.edad) {
            hombreMenor = persona;
        }
    }
}

// Calcular promedios
let promedioEdadTotal = sumaEdad / personas.length;
let promedioEdadMujeres = contadorMujeres > 0 ? sumaEdadMujeres / contadorMujeres : 0;

console.log("Promedio de edad total:", promedioEdadTotal.toFixed(2));
console.log("Mujer con mayor edad:", mujerMayor.nombre, "-", mujerMayor.edad, "años");
console.log("Hombre con menor edad:", hombreMenor.nombre, "-", hombreMenor.edad, "años");
console.log("Promedio de edad de mujeres:", promedioEdadMujeres.toFixed(2));*/

//Ejercicio 13

/*let personas = [
    { nombre: "Ana", sexoBiologico: "F", edad: 25 },
    { nombre: "Carlos", sexoBiologico: "M", edad: 30 },
    { nombre: "Caterin", sexoBiologico: "F", edad: 42 },
    { nombre: "Ricardo", sexoBiologico: "M", edad: 12 },
    { nombre: "María", sexoBiologico: "F", edad: 19 },
    { nombre: "Pedro", sexoBiologico: "M", edad: 68 }
];

// Función: Promedio de edad total
function calcularPromedioTotal(personas) {
    let suma = 0;
    for (let persona of personas) {
        suma += persona.edad;
    }
    return (suma / personas.length).toFixed(2);
}

// Función: Mujer con mayor edad
function obtenerMujerMayor(personas) {
    let mujerMayor = null;
    for (let persona of personas) {
        if (persona.sexoBiologico === "F") {
            if (!mujerMayor || persona.edad > mujerMayor.edad) {
                mujerMayor = persona;
            }
        }
    }
    return mujerMayor;
}

// Función: Hombre con menor edad
function obtenerHombreMenor(personas) {
    let hombreMenor = null;
    for (let persona of personas) {
        if (persona.sexoBiologico === "M") {
            if (!hombreMenor || persona.edad < hombreMenor.edad) {
                hombreMenor = persona;
            }
        }
    }
    return hombreMenor;
}

// Función: Promedio edad de mujeres
function promedioEdadMujeres(personas) {
    let suma = 0;
    let contador = 0;
    for (let persona of personas) {
        if (persona.sexoBiologico === "F") {
            suma += persona.edad;
            contador++;
        }
    }
    return contador > 0 ? (suma / contador).toFixed(2) : "Sin mujeres";
}

// Llamamos a las funciones y mostramos resultados
console.log("Promedio total:", calcularPromedioTotal(personas));

let mujerMayor = obtenerMujerMayor(personas);
console.log("Mujer con mayor edad:", mujerMayor ? `${mujerMayor.nombre} (${mujerMayor.edad})` : "No hay mujeres");

let hombreMenor = obtenerHombreMenor(personas);
console.log("Hombre con menor edad:", hombreMenor ? `${hombreMenor.nombre} (${hombreMenor.edad})` : "No hay hombres");

console.log("Promedio edad mujeres:", promedioEdadMujeres(personas));*/

//Ejercicio 14

/*let numeros = [5, 8, 13, 2, 75, 14, 45, 30];

// Filtramos los pares usando .filter() y una función flecha
let pares = numeros.filter(numero => numero % 2 === 0);


console.log("Números originales:", numeros);
console.log("Números pares:", pares);*/

//Ejercicio 15

/*function obtenerDivisibles(minimo, maximo, divisor) {
    let resultado = [];

    // Validamos que minimo sea menor que maximo
    if (minimo >= maximo) {
        console.log("El valor mínimo debe ser menor al máximo.");
        return resultado;
    }

    // Validamos que el divisor no sea 0
    if (divisor === 0) {
        console.log("El divisor no puede ser 0.");
        return resultado;
    }

    // Recorremos el rango y guardamos los divisibles
    for (let i = minimo; i <= maximo; i++) {
        if (i % divisor === 0) {
            resultado.push(i);
        }
    }

    return resultado;
}

let divisibles = obtenerDivisibles(10, 50, 5);
console.log("Números divisibles:", divisibles);*/

