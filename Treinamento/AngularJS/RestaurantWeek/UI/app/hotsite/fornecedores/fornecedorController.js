(function (angular) {
    var app = angular.module('hotsite');
    var controller = function (fornecedorServices, $scope) {

        //LOADING CITIES AND STATES
        var loadData = function () {
            //console.log(fornecedorServices);
            fornecedorServices.estados().success(function (data) {
                $scope.estados = data.object;
            });
            fornecedorServices.estados().success(function (data) {
                $scope.enderecoCobrancaEstado = data.object;
            });
            $scope.erro = true;
            $scope.cadastrado = true;
            $scope.erroSenha = true;
        }();


        //BTN-CADASTRE
        $scope.cadastrarFornecedor = function () {
                //Validar campos
            if ($('#formCadastroFornecedor').parsley().validate()) {
                //Valida Senha
                if ($scope.login.senha.length == 6 && $scope.login.senha.length != /^\d*$/) {
                    var obj = preencherCamposFornecedor();
                    fornecedorServices.addFornecedor(obj)
                        .success(function (data) {
                            console.log(data);
                            if (data.hasError) {
                                $('body,html').animate({ scrollTop: 0 }, 600);
                                $scope.erro = false;
                                alert('Ocorreu um erro, verifique os Campos Digitados.');
                            }
                            else {
                                $scope.limparDados();
                                $('body,html').animate({ scrollTop: 0 }, 600);
                                //alert('salvo com sucesso');
                                $scope.cadastrado = false;
                            }
                        })
                        .error(function () {
                            alert("Ocorreu um erro, verifique os campos");
                            $scope.erro = false;
                            console.log('Erro ao cadastrar fornecedor')
                        });
                }else {
                    $scope.erroSenha = false;
                    $('body,html').animate({ scrollTop: 0 }, 600);
                }
            }else {
                console.log('Ocorreu um Erro na Validação')
                
            }
            
        }

        

        //OBJ DATA SUPPLIER
        var preencherCamposFornecedor = function () {
            var result =
                {
                    'restaurante': {
                        cnpj: $scope.dadosFornecedor.cnpj,
                        razaoSocial: $scope.dadosFornecedor.razaoSocial,
                        nomeFantasia: $scope.dadosFornecedor.nomeFantasia,
                        inscricaoEstadual: $scope.dadosFornecedor.inscricaoEstadual,
                        documento: $scope.dadosFornecedor.uploadDoc,
                        financeiroNome: $scope.dadosFinanceiros.nome,
                        financeiroTelefone: $scope.dadosFinanceiros.telefone,
                        financeiroEmail: $scope.dadosFinanceiros.email,
                        financeiroBanco: $scope.dadosFinanceiros.banco,
                        financeiroAgencia: $scope.dadosFinanceiros.agencia,
                        financeiroConta: $scope.dadosFinanceiros.conta,
                        comercialNome: $scope.dadosComercial.nome,
                        comercialTelefone: $scope.dadosComercial.telefone,
                        comercialEmail: $scope.dadosComercial.email,
                        serveAlmoco: $scope.tipoTroca.almoco,
                        serveJanta: $scope.tipoTroca.janta,
                        senha: $scope.login.senha
                    },
                    'enderecos': [
                         {
                             cep: $scope.dadosFornecedor.cep,
                             tipoEndereco: 'F',
                             logradouro: $scope.dadosFornecedor.endereco,
                             numero: $scope.dadosFornecedor.numeroEnd,
                             complemento: $scope.dadosFornecedor.complemento,
                             bairro: $scope.dadosFornecedor.bairro,
                             webCidadeId: $scope.dadosFornecedor.cidade,
                             webEstadoId: $scope.dadosFornecedor.estado,
                             ativo: true,
                         },
                          {
                              cep: $scope.enderecoCobranca.cep,
                              tipoEndereco: 'C',
                              logradouro: $scope.enderecoCobranca.endereco,
                              numero: $scope.enderecoCobranca.numeroEnd,
                              complemento: $scope.enderecoCobranca.bairro,
                              bairro: $scope.enderecoCobranca.complemento,
                              webCidadeId: $scope.enderecoCobranca.cidade,
                              webEstadoId: $scope.enderecoCobranca.estado,
                              ativo: true
                          }]
                };
            return result;
        };

        $scope.limparDados = function () {
            limparDados();
        }


        var limparDados = function () {
            $scope.dadosFornecedor.cnpj = "";
            $scope.dadosFornecedor.razaoSocial = "";
            $scope.dadosFornecedor.nomeFantasia = "";
            $scope.dadosFornecedor.inscricaoEstadual = "";
            $scope.dadosFornecedor.uploadDoc = "";
            $scope.dadosFornecedor.cep = "";
            $scope.dadosFornecedor.endereco = "";
            $scope.dadosFornecedor.numeroEnd = "";
            $scope.dadosFornecedor.bairro = "";
            $scope.dadosFornecedor.complemento = "";
            $scope.dadosFornecedor.cidade = "";
            $scope.dadosFornecedor.estado = "";
            $scope.enderecoCobranca.cep = "";
            $scope.enderecoCobranca.endereco = "";
            $scope.enderecoCobranca.numeroEnd = "";
            $scope.enderecoCobranca.bairro = "";
            $scope.enderecoCobranca.complemento = "";
            $scope.enderecoCobranca.cidade = "";
            $scope.enderecoCobranca.estado = "";
            $scope.dadosFinanceiros.nome = "";
            $scope.dadosFinanceiros.telefone = "";
            $scope.dadosFinanceiros.email = "";
            $scope.dadosFinanceiros.banco = "";
            $scope.dadosFinanceiros.agencia = "";
            $scope.dadosFinanceiros.conta = "";
            $scope.dadosComercial.nome = "";
            $scope.dadosComercial.telefone = "";
            $scope.dadosComercial.email = "";
            $scope.login.senha = "";
            $scope.erro = true;
            $scope.cadastrado = true;
            $scope.erroSenha = true;
            $('body,html').animate({ scrollTop: 0 }, 600);

        };

        $scope.recuperarCidades = function () {
            var estadoId = $scope.dadosFornecedor.estado;
            fornecedorServices.cidades(estadoId).success(function (data) {
                $scope.cidades = data;
            });
        };
        $scope.recuperarCidades2 = function () {
            var estadoId = $scope.enderecoCobranca.estado;
            fornecedorServices.cidades(estadoId).success(function (data) {
                $scope.enderecoCobrancaCidade = data
            });
        };
        


    }
    app.controller('fornecedorController', ['Fornecedor', '$scope', controller]);
}(angular, jQuery));