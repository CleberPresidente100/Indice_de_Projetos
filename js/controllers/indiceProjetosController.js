

angular.module("indiceProjetos").controller("indiceProjetosController", function($scope, arvoreMenusAPI){
    
    $scope.numero = 0;
    $scope.nomeDaPagina = "Índice de Projetos"
    $scope.arvoreMenusDireita = [];
    $scope.arvoreMenusEsquerda = [];
    $scope.arvoreMenus = arvoreMenusAPI.getArvoreMenus();


    
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
    $scope.splitArvoreMenusBase = function(estrutura){
        
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
    $scope.splitArvoreMenusBase($scope.arvoreMenus);
    
});
