<%@ Page Title="" Language="C#" MasterPageFile="~/View/MasterPageHome.Master" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="Pousada_Mandala.View.Login.Log" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <div style="left:50%;top:50%; position:fixed; margin-left:-17%;margin-top:-5%; width:33%;">
        <form id="form1" runat="server" style="align-self:center">
    
            <div>
                <div id="login" class="" >
                    
                    <br /><br />
                    <asp:Label ID="lblNome"  runat="server" Text="NOME" Font-Bold="true"></asp:Label> 
                    &nbsp; 
                    <!--Invalid--><asp:Label ID="nomeInvalido" runat="server" CssClass="label label-danger" Text="Nome Inválida" Font-Bold="true" Font-Size="Small" Visible="false"></asp:Label><br />
                    <asp:TextBox ID="txtNome" CssClass="form-control" runat="server"></asp:TextBox> <br />
            
                   <asp:Label ID="lblSenha" runat="server" Text="SENHA"></asp:Label> 
                    &nbsp;    
                    <!--Invalid--><asp:Label ID="senhaInvalida" runat="server" Text="Senha Inválida" CssClass="label label-danger" Font-Bold="true" Font-Size="Small" Visible="false"></asp:Label><br />
                    <asp:TextBox ID="txtSenha" CssClass="form-control" runat="server" TextMode="Password"></asp:TextBox> <br />

                    <asp:Button ID="btnEntrar" CssClass="btn btn-block"  ForeColor="White" Font-Bold="true" BackColor="#C1272D" runat="server" Text="Entrar" OnClick="btnEntrar_Click" />

                    <br />
                 </div>
             </div>
         </form>
    </div>
</asp:Content>
