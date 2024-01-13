//Desafio Classificador de nível de Herói
let nickHeroi = "Cubas"
let nivelXp = 10.000

  if (nivelXp <=1.000 ){
        xp = "ferro"
}else if (nivelXp >=1.001 && nivelXp <=2.000){
    xp = "Bronze"
}else if (nivelXp >=2.001 && nivelXp <=3.000){
    xp = "Prata"
}else if (nivelXp >=3.001 && nivelXp <=5.000){
    xp = "Ouro"
}else if (nivelXp >=5.001 && nivelXp <=7.000){
    xp = "Platina"
}else if (nivelXp >=7.001 && nivelXp <=8.000){
    xp = "Ascendente"
}else if (nivelXp >=8.001 && nivelXp <=9.000){
    xp = "Imortal"
}else if (nivelXp >=9.001 && nivelXp <=10.000){
    xp = "Radiante"
}
console.log("O Herói de nome", (nickHeroi), "está no nível de" ,(xp))



