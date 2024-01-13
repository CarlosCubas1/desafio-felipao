//Desafio Classificador de nível de Herói
let nickHeroi = "Cubas"
let nivelXp = 1.000

  if (nivelXp <=1.000 ){
        xp = "ferro"
}  if (nivelXp >=1.001 && nivelXp <=11.000){
    xp = "Bronze"
}if (nivelXp >=1.001 && nivelXp <=2.000){
    xp = "Prata"
}if (nivelXp >=2.001 && nivelXp <=5.000){
    xp = "Ouro"
}if (nivelXp >=5.001 && nivelXp <=7.000){
    xp = "Platina"
}if (nivelXp >=7.001 && nivelXp <=8.000){
    xp = "Ascendente"
}if (nivelXp >=8.001 && nivelXp <=9.000){
    xp = "Imortal"
}if (nivelXp >=9.001 && nivelXp <=10.000){
    xp = "Radiante"
}
console.log("O Herói de nome", (nickHeroi), "está no nível de" ,(xp))



