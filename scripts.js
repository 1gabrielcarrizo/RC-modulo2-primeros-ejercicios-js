/*
1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.

2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).

3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»

5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt

6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

8.- Escribe un programa que pida un número y diga si es divisible por 2

9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
*/

let opcion = parseInt(prompt('Ingrese un numero entre 1-11 para elegir un ejercicio a desarrollar (mirar tambien la consola para ver los resultados)'))

switch(opcion){
    case 1:
        alert('1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.')

        alert('Un mensaje')
    break;
    case 2:
        alert('2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).')

        console.log('Hola mundo')
        document.write('Hola mundo')
    break;
    case 3:
        alert('3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.')

        console.log(`3 + 5 es igual a ${3+5}`)
    break;
    case 4:
        alert('4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»')

        const usuario = prompt('Ingrese un nombre').toLowerCase()
        console.log(`Hola ${usuario}`)
    break;
    case 5:
        alert('5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números. Nota: Tener en cuenta la siguiente función: parseInt. https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt')

        let num1 = parseInt(prompt('Ingrese el primer numero a sumar'))
        let num2 = parseInt(prompt('Ingrese el segundo numero a sumar'))
        console.log(`${num1} + ${num2} es igual a ${num1+num2}`)
    break;
    case 6:
        alert('6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.')

        let numero1 = parseInt(prompt('Ingrese el primer numero a comparar'));
        let numero2 = parseInt(prompt('Ingrese el segundo numero a comparar'));

        (numero1 > numero2) ? console.log(`El primer numero ingresado (${numero1}) es mayor que el segundo numero ingresado (${numero2})`) : console.log(`El segundo numero ingresado (${numero2}) es mayor que el primer numero ingresado (${numero1})`);
    break;
    case 7:
        alert('7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.')

        let number1 = parseInt(prompt('Ingrese el primer numero a comparar'))
        let number2 = parseInt(prompt('Ingrese el segundo numero a comparar'))
        let number3 = parseInt(prompt('Ingrese el tercer numero a comparar'))

        if(number1>number2 && number1>number3){
            console.log(`${number1} es mayor que ${number2} y ${number3}`)
        }else if (number2>number3){
            console.log(`${number2} es mayor que ${number1} y ${number3}`)
        }else{
            console.log(`${number3} es mayor que ${number1} y ${number2}`)
        }
    break;
    case 8:
        alert('8.- Escribe un programa que pida un número y diga si es divisible por 2')

        let num = parseInt(prompt('Ingrese un numero para saber si es divisible por 2'));
        (num % 2 === 0) ? console.log(`${num} es divisible por 2`) : console.log(`${num} no es divisible por 2`)
    break;
    case 9:
        alert('9.- Escribe un programa que pida una frase y escriba las vocales que aparecen. Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)')

        let frase = prompt('Escriba una frase cualquiera').toLowerCase()

        for(let i=0; i<frase.length; i++){
            if(frase.charAt(i) === 'a' || frase.charAt(i) === 'e' || frase.charAt(i) === 'i' || frase.charAt(i) === 'o' || frase.charAt(i) === 'u'){
                console.log(`"${frase}" tiene la vocal "${frase.charAt(i)}"`)
            }
        }
    break;
    case 10:
        alert('10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)')

        let numero = parseInt(prompt('Escriba un numero cualquiera para ver si es divisible por 2, 3, 5 o 7'));

        (numero % 2 === 0 || numero % 3 === 0 || numero % 5 === 0 || numero % 7 === 0) ? console.log(`${numero} es divisible por 2, 3, 5 o 7`) : console.log(`${numero} no es divisible por ninguno de ellos`)
    break;
    case 11:
        alert('11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)')

        let numerito = parseInt(prompt('Escriba un numero cualquiera para ver si es divisible por 2, 3, 5 o 7'))

        if(numerito % 2 === 0) console.log(`${numerito} es divisible por 2`)
        if(numerito % 3 === 0) console.log(`${numerito} es divisible por 3`)
        if(numerito % 5 === 0) console.log(`${numerito} es divisible por 5`)
        if(numerito % 7 === 0) console.log(`${numerito} es divisible por 7`)
        else console.log(`${numerito} no es divisible por ninguno de ellos`)
    break;
    default: console.log(`Ingresaste un numero y/o caracter diferente`)
}