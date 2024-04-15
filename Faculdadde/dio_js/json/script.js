// JSON = Java Script Object Notation
//Composto por chave e valor, com o objetivo de transferir dados
//numero com aspas mostra o zero no final, numero sem aspas não mostra



//Criou sem usar JSON
// let nome = "Guilherme";
// let age = 18;
// let products = ["Mouse 2xwm", "Teclado mecânico", "Monitor"];
// let productsValue = [29.90, 129.53, 983.73];

// generationInvoice(nome, products, productsValue, age);

// function generationInvoice(nome, products, productsValue, age){
//     console.log("O comprador é " + nome);
//     console.log("A idade é " + age);
//     console.log("-----------------------");
//     console.log("O produto é " + products[1]);
//     console.log("O valor é " + productsValue[1]);
// }


//Criando com JSON
let invoice = {
    name:"Guilherme",
    age: 18,
    products: {
        0: ["Mouse 2xwm", "29.90"],
        1: ["Teclado mecânico", "129.28"],
        2: ["Monitor", "928.29"],
        3: ["TV 100 polegadas", "10000.90"]
    },
    taxes: "98.90"
}

generationInvoice(invoice);

function generationInvoice(invoice){
console.log(`O comprador é ${invoice.name}`);
console.log(`A idade é ${invoice.age}` );
console.log("-----------------------");

//utilizar o for in para percorrer objetos de uma lista
for(let index in invoice.products){
    let [productName, productPrice] = invoice.products[index]
    console.log(`- ${productName}: R$ ${productPrice}`);
}

console.log("-----------------------");
console.log(`A taxa é de R$ ${invoice.taxes}` );

}

console.log(invoice);