"use strict";
// Exercicio 1
//O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem
//do distribuidor e dos
//impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor seja
//de 28% e os impostos de
//45%, escrever um algoritmo que leia o custo de fábrica de um carro e escreva o custo ao
//consumidor.
let datos = ['Precio da Fabrica R$ 1000', 'Tasa Administrativa 28%', 'Imposto 45%'];
class Precio {
    constructor(Precioneto, TasaAd, imposto) {
        this.Precioneto = Precioneto;
        this.TasaAd = TasaAd;
        this.imposto = imposto;
    }
    getpreciofinal() {
        let preciofinal = this.Precioneto + (this.Precioneto * (this.TasaAd / 100) + (this.Precioneto * (this.imposto / 100)));
        return 'R$ ' + preciofinal + ' precio do carro';
    }
}
const precio = new Precio(1000, 28, 45);
console.log('Resultados Exercicio 1');
console.log(datos[0]);
console.log(datos[1]);
console.log(datos[2]);
console.log(precio.getpreciofinal());
const pessoa1 = {
    nome: "Eduardo",
    nota1: 2,
    nota2: 3,
    nota3: 5
};
function mediap(nota1, nota2, nota3) {
    return ((nota1 * 1) + (nota2 * 2) + (nota3 * 3)) / (1 + 2 + 3) + " media ponderada";
}
console.log("Resultado Exercicio 2");
console.log(pessoa1);
console.log(mediap(2, 3, 5));
//exercicio 3
//Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e
//mostre-a expressa apenas em dias.
function getidade() {
    let hoje = new Date('2021-08-29');
    let datanacimento = new Date('1984-04-28');
    let idade = hoje.getFullYear() - datanacimento.getFullYear();
    let meses = hoje.getMonth() - datanacimento.getMonth();
    let dias = hoje.getDay() - datanacimento.getDay();
    return 'Ao dia 29-08-2021, o usuario tem ' + dias + ' dias de idade com ' + meses + " meses" +
        ' e ' + idade + ' anos' + ', para um total de ' +
        ((idade * 365) + (meses * 30) + dias) + " dias de vida; " +
        'data de aniversario 28/04/1984';
    //return idade + ' anos' +  " com " +meses + ' meses' + 
    ' e ' + ((idade * 365) + (meses * 30)) + ' dias';
}
console.log('Resultado Exercicio 3');
console.log(getidade());
