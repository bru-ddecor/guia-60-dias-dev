setTimeout(function() {
 alert("Abra o console ( Ctrl + Shift + j ) para ver o resultado de cada exercício com os dados que você digitar a seguir.");


setTimeout(function() {
//ex01
let idade = Number(prompt("(ex01): Digite sua idade: "))
if (idade >= 18 && idade < 70) {
    console.log(`Você tem ${idade} anos, portanto, seu voto é obrigatório!`);
} else if (idade >=70) {
    console.log(`Você tem ${idade} anos, portanto, seu voto é facultativo!`)
} else if (idade < 16) {
    console.log(`Você tem ${idade} anos, portanto, você não pode votar!`);
} else {
    console.log(`Você tem ${idade} anos, portanto, seu voto é facultativo!`);
}

//ex02
let senha_correta = 45678
let senha_digitada = prompt("(ex02): Digite a senha:  (padrão: 45678) ");
if (senha_digitada == senha_correta) {
    console.log("Senha correta. Entrada liberada.");
} else {
    console.log("Senha incorreta.");
}

//ex03
let notebook = 3820.0
let salario_cliente = parseFloat(prompt("(ex03): Qual o seu salário? "))
if (salario_cliente >= notebook) {
    console.log(`O notebook custa R$${notebook} e o seu salário é de R$${salario_cliente}. Compre o Notebook agora mesmo por um preço limitado!`);
} else if (salario_cliente > 2500.0) {
    console.log(`O notebook custa R$${notebook} e o seu salário é de R$${salario_cliente}. Entre em contato com nossa equipe para verificar as formas de negociação!`)
} else {
    console.log(`O notebook custa R$${notebook} e o seu salário é de R$${salario_cliente}, portanto você não pode fazer esta compra.`)
}

//Exercício Extra: Refatorar um dos exercícios acima para usar operador lógico composto (AND / OR)
let idade1 = Number(prompt("(ex extra): Digite sua idade: "))

if (idade1 >=70 || (idade1 >= 16 && idade1 < 18)) {
    console.log(`Você tem ${idade1} anos, portanto, seu voto é facultativo!`);
} else if (idade1 >= 18 && idade < 70) {
    console.log(`Você tem ${idade1} anos, portanto, seu voto é obrigatório!`);
} else {
    console.log(`Você tem ${idade1} anos, portanto, você não pode votar!`);
}
}, 1000);

},5000);
