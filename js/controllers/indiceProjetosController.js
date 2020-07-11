
angular.module("indiceProjetos", []);
angular.module("indiceProjetos").controller("indiceProjetosController", function($scope, $location){
    
    $scope.numero = 0;
    $scope.nomeDaPagina = "Índice de Projetos"
    $scope.arvoreMenusDireita = [];
    $scope.arvoreMenusEsquerda = [];

    // Estrutura que contém as informações que serão montadas na view.
    $scope.estruturaBase = [
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
                        {nome : "Teste 01", endereco : "#"},
                        {nome : "Teste 02", endereco : "#"},
                        {nome : "Teste 03", endereco : "#"},
                    ],
                },
                {
                    id : 0,
                    estado : false,
                    nome : "Deep Learning Book",
                    projetos : [
                        {nome : "Teste 01", endereco : "#"},
                        {nome : "Teste 02", endereco : "#"},
                        {nome : "Teste 03", endereco : "#"},
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
                    nome : "Compiladores",
                    projetos : [
                        {nome : "Tabela de Símbolos", endereco : "https://github.com/CleberPresidente100/TabelaDeSimbolos"},
                    ],
                },
                {
                    id : 0,
                    estado : false,
                    nome : "Linguagens Formais e Autômatos",
                    projetos : [
                        {nome : "Expressões Matemáticas", endereco : "https://github.com/CleberPresidente100/Expressoes_Matematicas"},
                    ],
                },
                {
                    id : 0,
                    estado : false,
                    nome : "Algoritmos e Estrutura de Dados",
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
                {
                    id : 0,
                    estado : false,
                    nome : "Teste X",
                    projetos : [
                        {nome : "Teste 01", endereco : "#"},
                        {nome : "Teste 02", endereco : "#"},
                        {nome : "Teste 03", endereco : "#"},
                    ],
                },
                {
                    id : 0,
                    estado : false,
                    nome : "Teste Y",
                    projetos : [
                        {nome : "Teste 01", endereco : "#"},
                        {nome : "Teste 02", endereco : "#"},
                        {nome : "Teste 03", endereco : "#"},
                    ],
                },
            ],                        
        },
        {
            id : 0,
            estado : false,
            titulo : "Outros",
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
                    nome : "AngularJS",
                    projetos : [
                        {nome : "Todos os Exercícios", endereco : "https://github.com/CleberPresidente100/AngularJS"},
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
    // Esta função automatiza esta geração de IDs
    $scope.gerarIds = function(estrutura){
        var contador = 1;
        estrutura.forEach(elemento => {
            elemento.id = contador++;
            elemento.subTitulos.forEach(subTitulo => {
                subTitulo.id = contador++;
            });
        });
    };

    
    $scope.alternarVisibilidade = function(estrutura, tituloId, subTituloId){                    
        estrutura.forEach(elemento => {
            if(elemento.id == tituloId){
                if(subTituloId > 0){
                    elemento.subTitulos.forEach(item => {
                        if(item.id == subTituloId){
                            item.estado = !item.estado;
                        }
                    });
                    return;
                }
                elemento.estado = !elemento.estado;
            }
        });
    };

    

    var blocoAberto = 'bloco_nivel_2_aberto';
    var blocoFechado = 'bloco_nivel_2_fechado';

    $scope.gerenciarEspacamento = function(estado){                    
        if(estado){
            return blocoAberto;
        }
        return blocoFechado;
    }


    // Divide a Lista de Menus em duas colunas
    $scope.splitEstruturaBase = function(estrutura){
        
        var tamanho = estrutura.length;
        var metade = tamanho / 2;
        
        for(var indice = 0; indice < tamanho; indice++){

            if(indice < metade){
                $scope.arvoreMenusEsquerda = $scope.arvoreMenusEsquerda.concat(estrutura[indice]);
                continue;
            }

            $scope.arvoreMenusDireita = $scope.arvoreMenusDireita.concat(estrutura[indice]);
        }

    }


    // Execução das funções
    $scope.gerarIds($scope.estruturaBase);
    $scope.splitEstruturaBase($scope.estruturaBase);
    
});
