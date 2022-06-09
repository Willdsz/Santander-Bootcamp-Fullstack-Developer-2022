var numIguais = Boolean(false)
var x = Boolean(false) // A soma dos dois números é mais que 10
var y = Boolean(false) // A soma dos dois números é menor que 20


function comparaNumeros(num1, num2) {
    NumerosIguais(num1, num2)
    relacionaNumeros(num1, num2)
    outputConsole(num1, num2)
}

function NumerosIguais(num1, num2) {
    if (num1 == num2) {
        numIguais = true
    } else {
        numIguais = false
    }
}

function relacionaNumeros(num1, num2) {
    //  A soma dos dois números é maior que 10 ou menor que 20
    if (num1 + num2 > 10) {
        x = true
    } else{
        x = false
    }

    if (num1 + num2 < 20) {
        y = true
    } else {
        y = false
    }
}

function outputConsole(num1, num2) {

    soma = num1 + num2

    if (numIguais === true) {
        console.log(num1, 'e', num2, 'são iguais.')
    } else {
        console.log(num1, 'e', num2, 'são diferentes.')
    }

    console.log('A soma entre', num1,'e',num2,'é: ',soma,)

    if (x === true && y === true) {
        console.log(soma, 'é maior que 10 e menor que 20.')
    } else if (x === true && y === false){
        console.log(soma, 'é maior que 10 e maior que 20.')
    } else if (x === false && y === true){
        console.log(soma, 'é menor que 10 e menor que 20.')
    }
}

comparaNumeros(-20, 25)
