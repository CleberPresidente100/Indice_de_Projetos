
angular.module("indiceProjetos").factory("arvoreMenusAPI", function (){

    // Estrutura que contém as informações do Menu que serão Montadas no Controller e Exibidas na View.
    var arvoreMenus = [
        {
            id : 0,
            estado : false, // TRUE --> Árvore Aberta, FALSE --> Árvore Fechada
            titulo : "Inteligência Artificial",
            subTitulos : [
                {
                    id : 0,
                    estado : false,
                    nome : "Python Fundamentos",
                    projetos : [
                        {nome : "Vazio", endereco : "#"},
                    ],
                },
                {
                    id : 0,
                    estado : false,
                    nome : "Deep Learning Book",
                    projetos : [
                        {nome : "Vazio", endereco : "#"},
                    ],
                },
            ],
        },
        {
            id : 0,
            estado : false,
            titulo : "Anhanguera",
            subTitulos : [
                {
                    id : 0,
                    estado : false,
                    nome : "(6º Sem.) Programação Orientada a Objetos II",
                    projetos : [
                        {nome : "Aulas / Exercícios", endereco : "https://github.com/CleberPresidente100/Anhanguera_POO2_Java"},
                    ],
                },
                {
                    id : 0,
                    estado : false,
                    nome : "(6º Sem.) Programação em Banco de Dados",
                    projetos : [
                        {nome : "Aulas / Exercícios", endereco : "https://github.com/CleberPresidente100/Anhanguera_Programacao_Banco_Dados"},
                    ],
                },
                {
                    id : 0,
                    estado : false,
                    nome : "(5º Sem.) Análise de Computabilidade e Complexidade de Algoritmos",
                    projetos : [
                        {nome : "Artigo", endereco : "https://github.com/CleberPresidente100/Analise_de_Computabilidade_e_Complexidade_de_Algoritmos"},
                    ],
                },
                {
                    id : 0,
                    estado : false,
                    nome : "(4º Sem.) Compiladores",
                    projetos : [
                        {nome : "Tabela de Símbolos", endereco : "https://github.com/CleberPresidente100/TabelaDeSimbolos"},
                    ],
                },
                {
                    id : 0,
                    estado : false,
                    nome : "(3º Sem.) Linguagens Formais e Autômatos",
                    projetos : [
                        {nome : "Expressões Matemáticas", endereco : "https://github.com/CleberPresidente100/Expressoes_Matematicas"},
                    ],
                },
                {
                    id : 0,
                    estado : false,
                    nome : "(2º Sem.) Algoritmos e Estrutura de Dados",
                    projetos : [
                        {nome : "Jogo \"É Duro\"", endereco : "https://github.com/CleberPresidente100/Jogo_E_Duro"},
                        {nome : "Projeto de Final de Semestre", endereco : "https://github.com/CleberPresidente100/Projeto_Final_de_Semestre"},
                    ],
                },
            ],                        
        },
        {
            id : 0,
            estado : false,
            titulo : "Udemy",
            subTitulos : [
                {
                    id : 0,
                    estado : false,
                    nome : "Flutter",
                    projetos : [
                        {nome : "Todos os Exercícios", endereco : "https://github.com/CleberPresidente100/Udemy_Flutter"},
                    ],
                },
            ],                        
        },
        {
            id : 0,
            estado : false,
            titulo : "Cursos",
            subTitulos : [
                {
                    id : 0,
                    estado : false,
                    nome : "AngularJS",
                    projetos : [
                        {nome : "Todos os Exercícios", endereco : "https://github.com/CleberPresidente100/AngularJS"},
                    ],
                },
            ],                        
        },
        {
            id : 0,
            estado : false,
            titulo : "Projetos",
            subTitulos : [
                {
                    id : 0,
                    estado : false,
                    nome : "Python",
                    projetos : [
                        {nome : "Força Bruta p/ arquivos RAR", endereco : "https://github.com/CleberPresidente100/Python_RAR_Brute_Force"},
                    ],
                },
                {
                    id : 0,
                    estado : false,
                    nome : "PHP",
                    projetos : [
                        {nome : "Planetinha", endereco : "#"},
                    ],
                },
                {
                    id : 0,
                    estado : false,
                    nome : "Websites",
                    projetos : [
                        {nome : "Planetinha", endereco : "#"},
                        {nome : "Índice de Projetos - (Esta Página)", endereco : "https://github.com/CleberPresidente100/Indice_de_Projetos"},
                    ],
                },
            ],                        
        },
    ];



    // Em um banco os IDs seriam as chaves primárias numéricas.
    // Como esta consulta não está sendo feita em um banco, os IDs precisam ser gerados de alguma forma.
    // Esta função automatiza esta geração de IDs para que o Angular possa identificar e alterar as propriedades de cada item do menu de forma dinâmica.
    var _gerarIds = function(estrutura){
        if(estrutura){
            var contador = 1;
            estrutura.forEach(elemento => {
                elemento.id = contador++;
                elemento.subTitulos.forEach(subTitulo => {
                    subTitulo.id = contador++;
                });
            });
        }
    };

    

    var _getArvoreMenus = function () {
        _gerarIds(arvoreMenus);
        return arvoreMenus;
    };



    return {
        getArvoreMenus: _getArvoreMenus,
    };

})
