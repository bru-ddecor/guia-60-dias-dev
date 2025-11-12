//ex1
console.log("Escrevendo um loop que mostra apenas os números pares de 1 a 20:")

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

setTimeout(function() {
//ex2
console.log("Pedindo um número ao usuário e mostrando a tabuada dele de 1 a 10:")

let num = prompt("Digite um número para ver a tabuada: ")

for(let i = 1; i <= 10; i++) {
    let resultado = num * i;
    console.log(`${num} x ${i} = ${resultado}`);
}
}, 4000);




//ex3
console.log("Loop que toca apenas notas musicais em posições pares:")

let notas = ["Dó","Ré","Mi","Fá","Sol","Lá","Si"]

for(let note = 0; note < notas.length; note++) {
    if(note % 2 === 0) {
        console.log(notas[note]);
    }
}