
angular.module("indiceProjetos", []);
angular.module("indiceProjetos").controller("indiceProjetosController", function($scope, $location){
    
    $scope.numero = 0;
    $scope.nomeDaPagina = "Índice de Projetos"

    











    // Estrutura que contém as informações que serão montadas na view.
    $scope.estruturaBase_3 = [
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
                        {nome : "Tabela de Símbolos", endereco : "#"},
                        {nome : "Teste 02", endereco : "#"},
                        {nome : "Teste 03", endereco : "#"},
                    ],
                },
                {
                    id : 0,
                    estado : false,
                    nome : "Linguagens Formais e Autômatos",
                    projetos : [
                        {nome : "Expressões Matemáticas", endereco : "#"},
                        {nome : "Teste 02", endereco : "#"},
                        {nome : "Teste 03", endereco : "#"},
                    ],
                },
                {
                    id : 0,
                    estado : false,
                    nome : "Algoritmos e Estrutura de Dados",
                    projetos : [
                        {nome : "Teste 01", endereco : "#"},
                        {nome : "Teste 02", endereco : "#"},
                        {nome : "Teste 03", endereco : "#"},
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

    // Execução da função
    $scope.gerarIds($scope.estruturaBase_3);

    $scope.alternarVisibilidade_3 = function(tituloId, subTituloId){                    
        $scope.estruturaBase_3.forEach(elemento => {
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











    $scope.exibir = {
        inteligencia : false,
        inteligenciaPython : false,
        inteligenciaDeepLearn : false,

        anhanguera : false,
        anhangueraAlgoritmos : false,
        anhangueraAutomatos : false,
        anhangueraCompiladores : false,

        udemy : false,
        udemyFlutter : false,

        outros : false,
        outrosPython : false,
        outrosPhp : false,
        outrosAngular : false,
    };


    $scope.margemBottom = {
        inteligenciaPython : blocoFechado,
        inteligenciaDeepLearn : blocoFechado,

        anhangueraAlgoritmos : blocoFechado,
        anhangueraAutomatos : blocoFechado,
        anhangueraCompiladores : blocoFechado,

        udemyFlutter : blocoFechado,

        outrosPython : blocoFechado,
        outrosPhp : blocoFechado,
        outrosAngular : blocoFechado,                    
    }
    

    $scope.alternarVisibilidade = function(botao_acionado){

        // INTELIGÊNCIA ARTIFICIAL
        if(botao_acionado == "inteligencia"){
            if($scope.exibir.inteligencia){
                $scope.exibir.inteligencia = false;
                $scope.exibir.inteligenciaPython = false;
                $scope.exibir.inteligenciaDeepLearn = false;

                $scope.margemBottom.inteligenciaPython = blocoFechado;
                $scope.margemBottom.inteligenciaDeepLearn = blocoFechado;
                return;
            }
            else
            {
                $scope.exibir.inteligencia = true;
                $scope.exibir.inteligenciaPython = false;
                $scope.exibir.inteligenciaDeepLearn = false;

                $scope.margemBottom.inteligenciaPython = blocoFechado;
                $scope.margemBottom.inteligenciaDeepLearn = blocoFechado;
                return;
            }
        }
        else if(botao_acionado == "inteligenciaPython"){
            if($scope.exibir.inteligenciaPython){
                $scope.margemBottom.inteligenciaPython = blocoFechado;
            }
            else{
                $scope.margemBottom.inteligenciaPython = blocoAberto;
            }

            $scope.exibir.inteligenciaPython = !$scope.exibir.inteligenciaPython;
        }
        else if(botao_acionado == "inteligenciaDeepLearn"){
            if($scope.exibir.inteligenciaDeepLearn){
                $scope.margemBottom.inteligenciaDeepLearn = blocoFechado;
            }
            else{
                $scope.margemBottom.inteligenciaDeepLearn = blocoAberto;
            }

            $scope.exibir.inteligenciaDeepLearn = !$scope.exibir.inteligenciaDeepLearn;
        }


        // ANHANGUERA
        else if(botao_acionado == "anhanguera"){
            if($scope.exibir.anhanguera){
                $scope.exibir.anhanguera = false;
                $scope.exibir.anhangueraAlgoritmos = false;
                $scope.exibir.anhangueraAutomatos = false;

                $scope.margemBottom.anhangueraAlgoritmos = blocoFechado;
                $scope.margemBottom.anhangueraAutomatos = blocoFechado;
            }
            else{
                $scope.exibir.anhanguera = true;
                $scope.exibir.anhangueraAlgoritmos = false;
                $scope.exibir.anhangueraAutomatos = false;

                $scope.margemBottom.anhangueraAlgoritmos = blocoFechado;
                $scope.margemBottom.anhangueraAutomatos = blocoFechado;
            }
        }
        else if(botao_acionado == "anhangueraAlgoritmos"){
            if($scope.exibir.anhangueraAlgoritmos){
                $scope.margemBottom.anhangueraAlgoritmos = blocoFechado;
            }
            else{
                $scope.margemBottom.anhangueraAlgoritmos = blocoAberto;
            }

            $scope.exibir.anhangueraAlgoritmos = !$scope.exibir.anhangueraAlgoritmos;
        }
        else if(botao_acionado == "anhangueraAutomatos"){
            if($scope.exibir.anhangueraAutomatos){
                $scope.margemBottom.anhangueraAutomatos = blocoFechado;
            }
            else{
                $scope.margemBottom.anhangueraAutomatos = blocoAberto;
            }

            $scope.exibir.anhangueraAutomatos = !$scope.exibir.anhangueraAutomatos;
        }
        else if(botao_acionado == "anhangueraCompiladores"){
            if($scope.exibir.anhangueraCompiladores){
                $scope.margemBottom.anhangueraCompiladores = blocoFechado;
            }
            else{
                $scope.margemBottom.anhangueraCompiladores = blocoAberto;
            }

            $scope.exibir.anhangueraCompiladores = !$scope.exibir.anhangueraCompiladores;
        }


        // UDEMY
        else if(botao_acionado == "udemy"){
            if($scope.exibir.udemy){  
                $scope.exibir.udemy = false;
                $scope.exibir.udemyFlutter = false;

                $scope.margemBottom.udemyFlutter = blocoFechado;
            }
            else{
                $scope.exibir.udemy = true;
                $scope.exibir.udemyFlutter = false;

                $scope.margemBottom.udemyFlutter = blocoFechado;
            }
        }
        else if(botao_acionado == "udemyFlutter"){
            if($scope.exibir.udemyFlutter){
                $scope.margemBottom.udemyFlutter = blocoFechado;
            }
            else{
                $scope.margemBottom.udemyFlutter = blocoAberto;
            }

            $scope.exibir.udemyFlutter = !$scope.exibir.udemyFlutter;
        }


        // OUTROS
        else if(botao_acionado == "outros"){
            if($scope.exibir.outros){
                $scope.exibir.outros = false;
                $scope.exibir.outrosPhp = false;
                $scope.exibir.outrosPython = false;
                $scope.exibir.outrosAngular = false;

                $scope.margemBottom.outrosPhp = blocoFechado;
                $scope.margemBottom.outrosPython = blocoFechado;
                $scope.margemBottom.outrosAngular = blocoFechado;
            }
            else{
                $scope.exibir.outros = true;
                $scope.exibir.outrosPhp = false;
                $scope.exibir.outrosPython = false;
                $scope.exibir.outrosAngular = false;

                $scope.margemBottom.outrosPhp = blocoFechado;
                $scope.margemBottom.outrosPython = blocoFechado;
                $scope.margemBottom.outrosAngular = blocoFechado;
            }
        }
        else if(botao_acionado == "outrosPhp"){
            if($scope.exibir.outrosPhp){
                $scope.margemBottom.outrosPhp = blocoFechado;
            }
            else{
                $scope.margemBottom.outrosPhp = blocoAberto;
            }

            $scope.exibir.outrosPhp = !$scope.exibir.outrosPhp;
        }
        else if(botao_acionado == "outrosPython"){
            if($scope.exibir.outrosPython){
                $scope.margemBottom.outrosPython = blocoFechado;
            }
            else{
                $scope.margemBottom.outrosPython = blocoAberto;
            }

            $scope.exibir.outrosPython = !$scope.exibir.outrosPython;
        }
        else if(botao_acionado == "outrosAngular"){
            if($scope.exibir.outrosAngular){
                $scope.margemBottom.outrosAngular = blocoFechado;
            }
            else{
                $scope.margemBottom.outrosAngular = blocoAberto;
            }

            $scope.exibir.outrosAngular = !$scope.exibir.outrosAngular;
        }
    }
    
});
