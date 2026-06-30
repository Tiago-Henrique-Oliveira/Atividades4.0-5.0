function saibaMais() {

alert("Obrigado pelo interesse! Em breve entraremos em contato.");

}

async function buscarCEP() {

let cep = document.getElementById("cep").value;

let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

let dados = await resposta.json();

document.getElementById("endereco").innerHTML =
`
${dados.logradouro},
${dados.bairro},
${dados.localidade} - ${dados.uf}
`;
    
}