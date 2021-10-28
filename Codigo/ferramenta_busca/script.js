// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Koda",
            "cidade": "Belo Horizonte",
            "especie": "Cachorro",
            "porte": "Grande",
            "idade": "12 anos",
            "sexo": "Macho"
        },
        {
            "id": 2,
            "nome": "Kenai",
            "cidade": "Belo Horizonte",
            "especie": "Cachorro",
            "porte": "Grande",
            "idade": "6 anos",
            "sexo": "Macho"
        },
        {
            "id": 3,
            "nome": "Rafaela",
            "cidade": "Rio de Janeiro",
            "especie": "gato",
            "porte": "Pequeno",
            "idade": "6 anos",
            "sexo": "Fêmea"
        },
        {
            "id": 4,
            "nome": "Toby",
            "cidade": "Belo Horizonte",
            "especie": "Cachorro",
            "porte": "Médio",
            "idade": "13 anos",
            "sexo": "Macho"
        },
        {
            "id": 5,
            "nome": "Nina",
            "cidade": "Belo Horizonte",
            "especie": "Gato",
            "porte": "Pequeno",
            "idade": "10 anos",
            "sexo": "Fêmea"
        },
        {
            "id": 6,
            "nome": "Oscar",
            "cidade": "Rio de Janeiro",
            "especie": "Papagaio",
            "porte": "Pequeno",
            "idade": "2 anos",
            "sexo": "Macho"
        },
        {
            "id": 7,
            "nome": "Luna",
            "cidade": "São Paulo",
            "especie": "Gato",
            "porte": "Médio",
            "idade": "5 anos",
            "sexo": "Fêmea"
        },
        {
            "id": 8,
            "nome": "Pedro",
            "cidade": "Belo Horizonte",
            "especie": "Papagaio",
            "porte": "Pequeno",
            "idade": "8 anos",
            "sexo": "Macho"
        },
        {
            "id": 9,
            "nome": "Mel",
            "cidade": "Rio de Janeiro",
            "especie": "Gato",
            "porte": "Pequeno",
            "idade": "3 anos",
            "sexo": "Fêmea"
        },
        {
            "id": 10,
            "nome": "Choque",
            "cidade": "São Paulo",
            "especie": "Cachorro",
            "porte": "Médio",
            "idade": "7 anos",
            "sexo": "Macho"
        }
    ]
}
//Atualiza o Local Storage
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};






