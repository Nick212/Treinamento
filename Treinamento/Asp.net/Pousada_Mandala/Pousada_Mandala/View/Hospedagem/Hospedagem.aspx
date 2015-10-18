<%@ Page Title="" Language="C#" MasterPageFile="~/View/MasterPageHome.Master" AutoEventWireup="true" CodeBehind="Hospedagem.aspx.cs" Inherits="Pousada_Mandala.View.Hospedagem.Hospedagem" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <style type="text/css">
        .auto-style1 {
            width: 37px;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <!--Importando o CSS-->
    <link href="../../CSS/estilizacao.css" rel="stylesheet" />


    <!--Formulário Cadastro Hóspede-->
    <form id="form1" runat="server" style="align-self: center">

        <div class="jumbotron">
            <div class="container">
                <h1>Hospedagem</h1>
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
            </div>


            <div id="ladoDireito">
                <table>
                    <tr>
                        <asp:Label ID="Cpf" runat="server" Text="CPF" CssClass="label label-primary" Font-Bold="true"></asp:Label>

                        <!--Erro no campo-->
                        <asp:Label ID="Label8" runat="server" Text="Campo Obrigatório (*)" CssClass="label label-danger" Font-Bold="true" Visible="false"></asp:Label>
                        <td>
                            <asp:TextBox ID="txtCpf" runat="server" CssClass="form-control" Width="291px" PlaceHolder="000.000.000-00"></asp:TextBox></td>
                        <td>
                            <asp:Button ID="btnConsultar" runat="server" Text="Consultar" Font-Bold="true" CssClass="btn btn-success" OnClick="btnConsultar_Click" /></td>
                    </tr>
                </table>
                <br />
            </div>

            <!--AP 01-->
            <div id="ctlApto" class="row" style="visibility: visible">
                <div class="col-sm-6 col-md-4">
                    <div class="thumbnail">
                        <img src="../../IMG/fundo.jpg" />
                        <div class="caption">
                            <center>
                        <h3>AP - 01</h3>
                    </center>
                            <!--<p><a href='<%=ResolveUrl("~/View/Hospedagem/Calendario.aspx")%>' class="btn btn-primary" role="button">Button</a>-->
                            <p>
                                <asp:Button ID="btnHospedar" runat="server" Text="Hospedar" Font-Bold="true" CssClass="btn btn-block btn-default" OnClick="btnHospedar_Click" />
                            </p>
                        </div>
                    </div>
                </div>
                <!--AP 02-->
                <div class="col-sm-6 col-md-4">
                    <div class="thumbnail">
                        <img src="../../IMG/fundo.jpg" />
                        <div class="caption">
                            <center>
                        <h3>AP - 02</h3>
                    </center>
                            <p>
                                <asp:Button ID="Button1" runat="server" Text="Hospedar" Font-Bold="true" CssClass="btn btn-block btn-default" OnClick="btnHospedar_Click" />
                            </p>
                        </div>
                    </div>
                </div>
                <!--AP 03-->
                <div class="col-sm-6 col-md-4">
                    <div class="thumbnail">
                        <img src="../../IMG/fundo.jpg" />
                        <div class="caption">
                            <center>
                        <h3>AP - 03</h3>
                    </center>
                            <!--<p><a href='<%=ResolveUrl("~/View/Hospedagem/Calendario.aspx")%>' class="btn btn-primary" role="button">Button</a>-->
                            <p>
                                <asp:Button ID="Button2" runat="server" Text="Hospedar" Font-Bold="true" CssClass="btn btn-block btn-default" OnClick="btnHospedar_Click" />
                            </p>
                        </div>
                    </div>
                </div>

                <!--AP 04-->
                <div class="col-sm-6 col-md-4">
                    <div class="thumbnail">
                        <img src="../../IMG/fundo.jpg" />
                        <div class="caption">
                            <center>
                        <h3>AP - 04</h3>
                    </center>
                            <!--<p><a href='<%=ResolveUrl("~/View/Hospedagem/Calendario.aspx")%>' class="btn btn-primary" role="button">Button</a>-->
                            <p>
                                <asp:Button ID="Button3" runat="server" Text="Hospedar" Font-Bold="true" CssClass="btn btn-block btn-default" OnClick="btnHospedar_Click" />
                            </p>
                        </div>
                    </div>
                </div>

                <!--AP 05-->
                <div class="col-sm-6 col-md-4">
                    <div class="thumbnail">
                        <img src="../../IMG/fundo.jpg" />
                        <div class="caption">
                            <center>
                        <h3>AP - 05</h3>
                    </center>
                            <!--<p><a href='<%=ResolveUrl("~/View/Hospedagem/Calendario.aspx")%>' class="btn btn-primary" role="button">Button</a>-->
                            <p>
                                <asp:Button ID="Button4" runat="server" Text="Hospedar" Font-Bold="true" CssClass="btn btn-block btn-default" OnClick="btnHospedar_Click" />
                            </p>
                        </div>
                    </div>
                </div>

                <!--AP 06-->
                <div class="col-sm-6 col-md-4">
                    <div class="thumbnail">
                        <img src="../../IMG/fundo.jpg" />
                        <div class="caption">
                            <center>
                        <h3>AP - 06</h3>
                    </center>
                            <!--<p><a href='<%=ResolveUrl("~/View/Hospedagem/Calendario.aspx")%>' class="btn btn-primary" role="button">Button</a>-->
                            <p>
                                <asp:Button ID="Button5" runat="server" Text="Hospedar" Font-Bold="true" CssClass="btn btn-block btn-default" OnClick="btnHospedar_Click" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="alert alert-success" hidden="hidden">
                <strong>Sucesso!</strong> Dados Cadastrados!!!
            </div>

        </div>

        <!-- Inicio Modal Alerta -->
        <asp:Panel ID="ModalAlerta" runat="server" Style="width: 100%; height: 100%; position: fixed; background-color: rgba(0,0,0,0.5); left: 0; top: 0;" Visible="false">
            <asp:Panel ID="ModalBoxAlerta" runat="server" Style="width: 31%; height: 48%; position: absolute; background-color: #FFF; left: 50%; top: 50%; margin-left: -15%; margin-top: -15%; border-radius: 5px;">
                <asp:Panel ID="ModalFecharAlerta" runat="server" Style="position: absolute; right: 3px; cursor: pointer; top: 3px;">
                </asp:Panel>
                <div class="modal-body">
                    <center><h1>Dados da Hospedagem</h1></center>
                    <hr />
                    <asp:Label ID="lblDataDe" runat="server" CssClass="label label-primary" Font-Size="Medium" Font-Bold="false">Selecione a Data de Hospedagem</asp:Label>
                    <table>
                        <tr>
                            <td>
                                <div class="input-group input-group-lg">
                                    <span class="input-group-addon" id="sizing-addon0">De:</span>
                                    <asp:TextBox ID="txtDataDe" runat="server" CssClass="form-control" type="date"></asp:TextBox>
                                </div>
                            </td>
                            <td>
                                <div class="input-group input-group-lg">
                                    <span class="input-group-addon" id="sizing-addon1">Até:</span>
                                    <asp:TextBox ID="txtDataAte" runat="server" CssClass="form-control" type="date"></asp:TextBox>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <br />
                    <asp:Label ID="lblValorPagar" runat="server" CssClass="label label-danger">Valor a Pagar</asp:Label>
                    <div class="input-group input-group-lg">
                        <span class="input-group-addon" id="sizing-addon2">R$</span>
                        <asp:TextBox ID="txtValorPagar" runat="server" CssClass="form-control" type="text"></asp:TextBox>
                    </div>
                    <asp:Button CssClass="btn btn-block btn-default" ID="btnHospeda" Text="Hospedar" runat="server" OnClick="btnHopeda_Click" />
                </div>

                <asp:Panel ID="Panel1" runat="server" Style="position: absolute; right: 3px; cursor: pointer; top: 3px;">
                    <asp:Button CssClass="btn btn-danger" ID="btnFecharModalAlerta" Text="X" runat="server" OnClick="btnFecharModalAlerta_Click" />
                </asp:Panel>
            </asp:Panel>
        </asp:Panel>
        <!-- Final Modal Alerta -->
    </form>
</asp:Content>
