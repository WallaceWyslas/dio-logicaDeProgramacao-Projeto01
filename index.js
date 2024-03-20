// Defina abaixo o nome do herói
let heroi = "James"

// Defina abaixo quanto de XP o herói possuí
let xp = 5000

// Qual a dificuldade do jogo?
    // 1: fácil - 1*XP
    // 2: médio - 2*XP
    // 3: difícil - 3*XP
let dificuldade = 2

let nivel

xp = xp * dificuldade

if(xp >= 10001){
    nivel = "Radiante"
}else if(xp >= 9001){
    nivel = "Imortal"
}else if(xp >= 8001){
    nivel = "Ascedente"
}else if(xp >= 7001){
    nivel = "Platina"
}else if(xp >= 5001){
    nivel = "Ouro"
}else if(xp >= 2001){
    nivel = "Prata"
}else if(xp >= 1001){
    nivel = "Bronze"
}else{
    nivel = "Ferro"
}

console.log("O Heroí de nome " + heroi + " está no nível de " + nivel + "!")

//console.log("XP total: " + xp + "!")