/*const idadeMenor = 18;
const idademaior = 19;

console.log(idadeMenor > idademaior ? "VC E DOIDO !!" : " ESSE É O PRIMEI");

const teste =`EU tenhho  ${idademaior} de idade`;

console.log(teste);

function imprime(texto){
    console.log(texto);
}
  
imprime("Esse é minha primeira função !!");

function soma(num1,num2){
    return num1 + num2;
}

function mult(num1,num2){
    return num1 * num2;
}

imprime(mult( soma(5,10), 2));

const arrowfunction = nome => `O meu cruso predileto é o de ${nome}`;
function nome(texto){
    return "Lógica de Programação!";
}

console.log(arrowfunction(nome()));
const nomaaula = nome => {

    return `Meu curso é de ${nome}`;
}

const listaChamanda =["Carlos", "Leia", "Naman", "Galego","Priscila", "Mél","Thor","Tsho"]

listaChamanda.splice(1,2,"Rosemary","Kauã");
console.log(listaChamanda);

listaChamanda.splice(3,0,"Naman Gomes");
console.log(listaChamanda);

const idademaior = 19;
const salaPyton = ["Carlos", "Leia", "Naman"];
const salaJavaScript = ["Galego","Priscila", "Mél"];

var juntandoLinguagem = salaJavaScript.concat(idademaior,salaPyton);
console.log(juntandoLinguagem);

var juntandoLinguagem = salaJavaScript.concat(salaPyton);
console.log(juntandoLinguagem);*/

//const alunos = ["Carlos", "Leia", "Naman", "Galego"];

//const mediaAlunos = [[10,8.5,8.9,8],["Carlos", "Leia", "Naman", "Galego"]];

//let listaDeNotasAlunos = [alunos,mediaAlunos];

//console.log(`${listaDeNotasAlunos[0][0]}, a sua média é ${listaDeNotasAlunos[1][0]}`);
//console.log(mediaAlunos[1][0],mediaAlunos[0][2]);

/*const alunos = ["Carlos", "Leia", "Naman", "Galego"];
const mediaAlunos = [10,8.5,8.9,8]

let listaDeNotasAlunos = [alunos,mediaAlunos]
 
const exibeNomeNota = (nomeDoAnulo) => {
    if(listaDeNotasAlunos[0].includes(nomeDoAnulo)){
        indice = listaDeNotasAlunos[0].indexOf(nomeDoAnulo)
        return listaDeNotasAlunos[0][indice] + ',sua media é ' + listaDeNotasAlunos[1][indice]
    }else {
        return "Aluno não esta cadastrado !"
    }
}
console.log(exibeNomeNota("Naman"));

const maisNotas = [10,5,88,9,7.5]

let somaDasNotas =0;

maisNotas.forEach(nota =>{
    somaDasNotas += nota
})
*/
const maisNotas = [10,5,88,9,7.5];
const alunos = ["Carlos", "Leia", "Naman", "Galego"];

const listaDeAlunos = [maisNotas,alunos];

const exibeNomeNota = (nomeDoAluno) => {
    if(listaDeAlunos[1].includes(nomeDoAluno)){
        indice = listaDeAlunos[1].indexOf(nomeDoAluno)
        return listaDeAlunos[1][indice] + " voce tirou " + listaDeAlunos[0][indice];
}else{
    return "Essa pessoa não existe !"
}}
console.log(exibeNomeNota("Naman"));


alunos.forEach(nome => {
    console.log(nome)
})