# Coleção Map

## Declarado da seguinte forma > const myMap = new Map()

Coleção de arrays no formato [chavel, valor].
Pode ser interado por um loop for...of


## Métodos 

- set -> define um valor para uma chave
- get -> retorna o valor de uma chave
- deleted -> deleta um objeto da coleção

## Map vs Objeto

1- Maps podem ter chaves de qualquer tipo
2-Maps possuem a propriedade length
3-Maps são mais faceis de iterar
4-Utilizado quando o valor das chaves é desconhecido
5-Os valores tem o mesmo tipo

# Set

Eles armazenam valores unicos, que não se repetem

## Estrutura
    const myArray = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 2, 1];
    const mySet = new Set(myArray)

## Metodos

- add -> Adiciona
- has -> Vizualizar se tem valor no set
- delete -> Deletar valor

## Set vs Array

1- Possui valores únicos
2- Em vez da propriedade length, consulta-se o número de registros pela propriedade size
3- Não possui os métodos map, filter, reduce etc...