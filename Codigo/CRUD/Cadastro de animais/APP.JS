


function leDados() {
    let strDados = localStorage.getItem('db');
    let objDados = {};
    if (strDados) {
        objDados = JSON.parse(strDados);
    }
    else {
        objDados = {
            animais: [
                { id: "1", nome: "Luna", Idade: "4 anos", Sexo: "Femea", Especie: "Cachorro", Cidade: "BH", Raca: "Collie", Porte: "Grande", Desc: "cachorro"}
            ]
        }
    }
    return objDados;
}
function salvaDados(dados) {
    localStorage.setItem('db', JSON.stringify(dados))
}
function incluirAnimal() {
    alert('Animal Cadastrado com sucesso!');
    //ler dados ls
    let objDados = leDados();


    //incluir 
    let strNome = document.getElementById('inputNome').value;
    let strIdade = document.getElementById('inputIdade').value;
    let strSexo = document.getElementById('inputSexo').value;
    let strEspecie = document.getElementById('inputEsp').value;
    let strCidade = document.getElementById('inputCidade').value;
    let strRaca = document.getElementById('inputRaca').value;
    let strPorte = document.getElementById('inputPorte').value;
    let strDesc = document.getElementById('inputDesc').value;
    let novoAnimal = {
        nome: strNome,
        Idade: strIdade,
        Sexo: strSexo,
        Especie: strEspecie,
        Cidade: strCidade,
        Raca: strRaca,
        Porte: strPorte,
        Desc: strDesc

    };
    objDados.animais.push(novoAnimal);

    //salvar no ls
    salvaDados(objDados);

}



function imprimeDados() {

    var ani = '';
    let objDados = leDados();
    for (i = 0; i < objDados.animais.length; i++) {
        ani+=`<tr><td>${objDados.animais[i].nome}</td>
            <td>${objDados.animais[i].Idade} </td>
            <td>${objDados.animais[i].Sexo}</td>
            <td>${objDados.animais[i].Especie} </td>
            <td>${objDados.animais[i].Cidade}</td>
            <td>${objDados.animais[i].Raca} </td>
            <td>${objDados.animais[i].Porte} </td>
            <td>${objDados.animais[i].Desc} </td>
            <td><button class="btn btn-secondary" onclick="OpenInput(this)">Alterar</button></td>

            <td><button id="btnDelete"   onclick="deleteAnimal(this)" class="btn  btn-danger">Excluir</button></td> 
            </tr>`
            ;
    }
    document.getElementById('table-contatos').innerHTML = ani;

}

//botoes

document.getElementById('btnFin').addEventListener('click', incluirAnimal);









