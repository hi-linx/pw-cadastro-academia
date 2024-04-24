let btn = document.getElementById("btn");

let div = document.getElementById("resultado");

let cards = document.getElementById("cards");

let arrInfo = [];

function cadastrar() {
  let info = {
    nome: document.getElementById("nome").value,
    sobrenome: document.getElementById("sobrenome").value,
    cpf: document.getElementById("cpf").value,
    telefone: document.getElementById("telefone").value,
    data: document.getElementById("data").value,
    rua: document.getElementById("rua").value,
    bairro: document.getElementById("bairro").value,
    cidade: document.getElementById("cidade").value,
    modalidade: document.getElementById("modalidade").value,
    saude: document.getElementById("saude").value,
    problema: document.getElementById("problema").value
  };

  arrInfo.push(info);
  console.log(arrInfo);

  imprimirDados();

  console.log(
    info.nome,
    info.sobrenome,
    info.cpf,
    info.telefone,
    info.data,
    info.rua,
    info.bairro,
    info.cidade,
    info.modalidade,
    info.saude,
    info.problema
  );
}

function imprimirDados() {
  div.innerHTML = "";
  cards.innerHTML = "";

  for (let i = 0; i < arrInfo.length; i++) {
    div.innerHTML = `
                <p><b> Cadastro: </b></p>
                <p><b>Nome: </b> ${arrInfo[i].nome}</p>
                <p><b> Sobrenome:</b>  ${arrInfo[i].sobrenome}</p>
                <p><b> Cpf:</b>  ${arrInfo[i].cpf}</p>
                <p><b> Telefone:</b>  ${arrInfo[i].telefone}</p>
                <p><b> Data de Nascimento:</b> ${arrInfo[i].data}</p>
                <p><b> Rua e N°:</b> ${arrInfo[i].rua} </p>
                <p><b> Bairro:</b> ${arrInfo[i].bairro} </p>
                <p><b> Cidade: </b>${arrInfo[i].cidade} </p>
                <p><b> Modalidade:</b> ${arrInfo[i].modalidade}</p>
                <p><b> Problema de Saúde:</b> ${arrInfo[i].saude}</p>
                <p><b> Problema Específico:</b> ${arrInfo[i].problema}</p>
         `;

    cards.innerHTML += `
    <div class="col py-2">
        <div class="card">
            <div class="card-body">
                <p class="card-text">${div.innerHTML}</p>
            </div>
        </div>
    </div>`
  }
}

btn.addEventListener("click", cadastrar);