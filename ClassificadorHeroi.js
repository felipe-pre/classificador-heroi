/*
Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura 
de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**
*/

// Variaveis
let nomeDoHeroi = "Jhon Snow"
let experiencia = 10001

// iniciando o escopo 

if (experiencia <= 1000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nivel de Ferro")
}else if (experiencia <= 2000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nivel de Bronze")
}else if (experiencia <= 5000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nivel de Prata")
}else if (experiencia <= 7000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nivel de Ouro")
}else if (experiencia <= 8000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nivel de Platina")
}else if (experiencia <= 9000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nivel de Ascendente")
}else if (experiencia <= 10000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nivel de Imortal")
} else{
    console.log("O Herói de nome " + nomeDoHeroi + " está no nivel de Radiante")
}

