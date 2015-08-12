<%@ Page Title="" Language="C#" MasterPageFile="~/View/MasterPageHome.Master" AutoEventWireup="true" CodeBehind="CadHospede.aspx.cs" Inherits="Pousada_Mandala.View.CadastroHospede.CadHospede" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <style type="text/css">
        .auto-style1 {
            width: 362px;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <!--Importando o CSS-->
    <link href="../../CSS/estilizacao.css" rel="stylesheet" />


    <!--Formulário Cadastro Hóspede-->
<form id="form1" runat="server" style="align-self:center">
        
    <div class="jumbotron">
        <div class="container">
            <h1>Cadastro Hospede</h1>
        </div>
    </div>    

        <div id="cadastroHospede">

            

            <!--Erro ao consultar-->
            <div id="erroConsulta" class="alert alert-danger" hidden="hidden">
                 <strong>Erro!</strong> Dados não conferem!!!
            </div>
            
        
            <div id="ladoEsquerdo">
                <asp:Label ID="nomeCompleto" runat="server" Text="NOME (Completo)" CssClass="label label-primary" Font-Bold="true" onKeyPress="ValidaString();"></asp:Label>
                <!--Erro no campo-->
                <asp:Label ID="Label1" runat="server" Text="Campo Obrigatório (*)" CssClass="label label-danger" Font-Bold="true" Visible="false"></asp:Label>
                <asp:TextBox ID="txtNome" runat="server" CssClass="form-control" PlaceHolder="Nome do Hospede..."></asp:TextBox>
                <br />

                <asp:Label ID="dataNascimento" runat="server" Text="DATA NASCIMENTO" CssClass="label label-primary" Font-Bold="true"></asp:Label>
                <!--Erro no campo-->
                <asp:Label ID="Label2" runat="server" Text="Campo Obrigatório (*)" CssClass="label label-danger" Font-Bold="true" Visible="false"></asp:Label>
                <asp:TextBox ID="txtDataNasc" runat="server" CssClass="form-control" PlaceHolder="mm/dd/yyyy"></asp:TextBox>
                <br />


                <table>
                    <tr>
                        <td class="auto-style1"><asp:Label ID="end" runat="server" Text="ENDEREÇO" CssClass="label label-primary" Font-Bold="true"></asp:Label>
                        <!--Erro no campo-->
                            <asp:Label ID="Label3" runat="server" Text="Campo Obrigatório (*)" CssClass="label label-danger" Font-Bold="true" Visible="false"></asp:Label></td>
                        
                        
                        <td><asp:Label ID="numero" runat="server" Text="nº" CssClass="label label-primary" Font-Bold="true"></asp:Label>
                        <!--Erro no campo-->
                            <asp:Label ID="Label11" runat="server" Text="Campo Obrigatório (*)" CssClass="label label-danger" Font-Bold="true" Visible="false"></asp:Label></td>
                            
                        <tr>
                            
                            <td class="auto-style1"><asp:TextBox ID="txtEndereco" runat="server" CssClass="form-control"></asp:TextBox></td>
                    
                            <td><asp:TextBox ID="txtNumero" runat="server" CssClass="form-control"></asp:TextBox></td>
                        </tr>
                    </tr>
                </table>

                <br />
                <asp:Label ID="compl" runat="server" Text="COMPLEMENTO" CssClass="label label-primary" Font-Bold="true"></asp:Label>
                <!--Erro no campo-->
                <asp:Label ID="Label4" runat="server" Text="Campo Obrigatório (*)" CssClass="label label-danger" Font-Bold="true" Visible="false" ></asp:Label>
                <asp:TextBox ID="txtComplemento" runat="server" CssClass="form-control"></asp:TextBox>
                <br />
               
                 <asp:Label ID="tel1" runat="server" Text="TELEFONE (RESIDENCIAL)" CssClass="label label-primary" Font-Bold="true"></asp:Label>
                <!--Erro no campo-->
                <asp:Label ID="Label5" runat="server" Text="Campo Obrigatório (*)" CssClass="label label-danger" Font-Bold="true" Visible="false"></asp:Label>
                <asp:TextBox ID="txtTelResidencial" runat="server" CssClass="form-control" PlaceHolder="(XX) XXXX-XXXX"></asp:TextBox>
                <br />

                <asp:Label ID="prof" runat="server" Text="PROFISSÃO" CssClass="label label-primary" Font-Bold="true"></asp:Label>
                <!--Erro no campo-->
                <asp:Label ID="Label6" runat="server" Text="Campo Obrigatório (*)" CssClass="label label-danger" Font-Bold="true" Visible="false"></asp:Label>
                <asp:TextBox ID="txtProfissao" runat="server" CssClass="form-control"></asp:TextBox>
                <br />
        
                <asp:Label ID="estado" runat="server" Text="ESTADO" CssClass="label label-primary" Font-Bold="true"></asp:Label>
                <!--Erro no campo-->
                <asp:Label ID="Label7" runat="server" Text="Campo Obrigatório (*)" CssClass="label label-danger" Font-Bold="true" Visible="false"></asp:Label>
                <asp:TextBox ID="txtEstado" runat="server" CssClass="form-control"></asp:TextBox>
                <br />

                
            </div>
            
            
            <div id="ladoDireito">
                
                <table>
                
                    <tr><asp:Label ID="Cpf" runat="server" Text="CPF" CssClass="label label-primary" Font-Bold="true"></asp:Label>
                
                        <!--Erro no campo-->
                        <asp:Label ID="Label8" runat="server" Text="Campo Obrigatório (*)" CssClass="label label-danger" Font-Bold="true" Visible="false"></asp:Label>
                    
                        <td><asp:TextBox ID="txtCpf" runat="server" CssClass="form-control" Width="291px" PlaceHolder="000.000.000-00"></asp:TextBox></td>

                        <td><asp:Button ID="btnConsultar" runat="server" Text="Consultar" Font-Bold="true" CssClass="btn btn-success" OnClick="btnConsultar_Click"/></td>
                    </tr>
                </table>

               
                
                <br />

                <asp:Label ID="CEP" runat="server" Text="CEP (xxxxx-xxx)" CssClass="label label-primary" Font-Bold="true"></asp:Label>
                <!--Erro no campo-->
                <asp:Label ID="Label9" runat="server" Text="Campo Obrigatório (*)" CssClass="label label-danger" Font-Bold="true" Visible="false"></asp:Label>
                <asp:TextBox ID="txtCep" runat="server" CssClass="form-control" PlaceHolder="00000-000"></asp:TextBox>
                <br />

                <asp:Label ID="Bairro" runat="server" Text="BAIRRO" CssClass="label label-primary" Font-Bold="true"></asp:Label>
                <!--Erro no campo-->
                <asp:Label ID="Label10" runat="server" Text="Campo Obrigatório (*)" CssClass="label label-danger" Font-Bold="true" Visible="false"></asp:Label>
                <asp:TextBox ID="txtBairro" runat="server" CssClass="form-control"></asp:TextBox>
                <br />
               
                             

                <asp:Label ID="celular" runat="server" Text="TELEFONE (CELULAR)" CssClass="label label-primary" Font-Bold="true"></asp:Label>
                <!--Erro no campo-->
                <asp:Label ID="Label12" runat="server" Text="Campo Obrigatório (*)" CssClass="label label-danger" Font-Bold="true" Visible="false"></asp:Label>
                <asp:TextBox ID="txtTelCelular" runat="server" CssClass="form-control" PlaceHolder="(XX) 9XXXX-XXXX"></asp:TextBox>
                <br />

                <asp:Label ID="cidade" runat="server" Text="CIDADE" CssClass="label label-primary" Font-Bold="true"></asp:Label>
                <!--Erro no campo-->
                <asp:Label ID="Label13" runat="server" Text="Campo Obrigatório (*)" CssClass="label label-danger" Font-Bold="true" Visible="false"></asp:Label>
                <asp:TextBox ID="txtCidade" runat="server" CssClass="form-control"></asp:TextBox>
                <br />

                <asp:Label ID="pais" runat="server" Text="PAÍS" CssClass="label label-primary" Font-Bold="true"></asp:Label>
                <!--Erro no campo-->
                <asp:Label ID="Label14" runat="server" Text="Campo Obrigatório (*)" CssClass="label label-danger" Font-Bold="true" Visible="false"></asp:Label>
                <asp:TextBox ID="txtPais" runat="server" CssClass="form-control"></asp:TextBox>
                <br />
            
            </div>

            

            <asp:Button ID="btnCadastrar" runat="server" Text="Cadastrar" Font-Bold="true" CssClass="btn btn-block btn-success" OnClick="btnCadastrar_Click"/>
            <asp:Button ID="btnLimparDados" runat="server" Text="Limpar Dados" Font-Bold="true" CssClass="btn btn-block btn-warning" OnClick="btnLimparDados_Click"/>
            <br />

            <div class="alert alert-success" hidden="hidden">
              <strong>Sucesso!</strong> Dados Cadastrados!!!
            </div>
                 
        </div>

   
        
</form>
</asp:Content>
