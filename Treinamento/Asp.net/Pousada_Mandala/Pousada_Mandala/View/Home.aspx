<%@ Page Title="" Language="C#" MasterPageFile="~/View/MasterPageHome.Master" AutoEventWireup="true" CodeBehind="Home.aspx.cs" Inherits="Pousada_Mandala.View.Home_" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">


    <form id="form1" runat="server" style="align-self:center">
     <div class="container">
        <div id="myCarousel" class="carousel slide" data-ride="carousel">

        <!-- Indicators -->
         <ol class="carousel-indicators">
             <li data-target="#myCarousel" data-slide-to = "0" class="active"></li>
             <li data-target="#myCarousel" data-slide-to = "1"></li>
             <li data-target="#myCarousel" data-slide-to = "2"></li>
         </ol>

        <!--Wrapper fpr slides-->
         <div class="carousel-inner">
             <div class="item active">
                 <img src="../IMG/wallpapers-backgrounds.jpg" alt="Beach" class="img-responsive"/>
             </div>


             <div class="item">
                 <img src="../IMG/mauritius-wallpaper.jpg" alt="Beach" class="img-responsive"/>
             </div>

             <div class="item">
                 <img src="../IMG/tecnologia1.jpg" alt="Beach" class="img-responsive"/>
             </div>
         </div>

        <!-- Left and right controls -->
          <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        

        </div>
     </div>

        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script src="../Scripts/bootstrap.js"></script>


    </form>
</asp:Content>
