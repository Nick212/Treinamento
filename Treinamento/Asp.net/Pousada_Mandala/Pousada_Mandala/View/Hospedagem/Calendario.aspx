<%@ Page Title="" Language="C#" MasterPageFile="~/View/MasterPageHome.Master" AutoEventWireup="true" CodeBehind="Calendario.aspx.cs" Inherits="Pousada_Mandala.View.Hospedagem.Calendario" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <form id="calendar" runat="server">
        <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                    </div>
            </div>



 <div id="content" role="main" class="container-fluid dashboard-user-events">
    <div class="row">
      <div class="col-md-9">
          <section class="well">
            <h1>Eventos</h1>
            <div class="row">
              <div class="col-md-12 page-header">
                <div class="pull-right form-inline">
                  <div class="btn-group">
                    <button class="btn btn-primary" data-calendar-nav="prev">
                      <i class="glyphicon glyphicon-arrow-left"></i>
                      Anterior
                    </button>
                    <button class="btn btn-default" data-calendar-nav="today">
                      <i class="glyphicon glyphicon-calendar"></i>
                      Hoje
                    </button>
                    <button class="btn btn-primary" data-calendar-nav="next">
                      Próximo
                      <i class="glyphicon glyphicon-arrow-right"></i>
                    </button>
                  </div>
                  <div class="btn-group">
                    <button class="btn btn-warning" data-calendar-view="year">Ano</button>
                    <button class="btn btn-warning active" data-calendar-view="month">Mês</button>
                    <button class="btn btn-warning" data-calendar-view="week">Semana</button>
                    <button class="btn btn-warning" data-calendar-view="day">Dia</button>
                  </div>
                </div>
                <h3>Fevereiro de 2015</h3>
                <small></small>
              </div>
            </div>

    
          </section>


</div>






<aside class="col-md-3">
    <a class="btn btn-block btn-primary" href="/events/new">
      
         Agendamento Prévio  <i class="glyphicon glyphicon-plus glyphicon-white"></i>
</a>
  
 

  <button class="btn btn-default btn-block" data-toggle="modal" data-target="#calendar-instructions">
    Instruções para usar programas externos
  </button>

  <div class="modal fade" id="calendar-instructions" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Fechar</span></button>
          <h4 class="modal-title" id="myModalLabel">Instruções para usar programas externos</h4>
        </div>
        <div class="modal-body">
          <p>Para sincronizar o seu calendário com programas de agenda, você deve incluir este endereço:</p> <h4>http://aluno.impactaonline.com.br/events.ics?calendar_token=ahZtiQ9-dRLKQyCUyp6d</h4> <p>Por exemplo, no Google Agenda:</p> <ol> <li>Clicar em Outras agendas</li> <li>Adicionar por URL</li> <li>No campo URL, preencher:<br> http://aluno.impactaonline.com.br/events.ics?calendar_token=ahZtiQ9-dRLKQyCUyp6d</li> <li>Clicar em Adicionar agenda</li> </ol>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
        </div>
      </div>
    </div>
  </div>
</aside>

    </div>
  </div> 



        
            <div class="container">
                <div class='col-md-5'>
                    <div class="form-group">
                        <p>De:</p>
                        <div class='input-group date' id='datetimepicker6'>
                            <input type='text' class="form-control" type="text"/>
                            
                            <span class="input-group-addon btn btn-primary"  id="calendario"><span class="glyphicon glyphicon-calendar"></span>
                            </span>
                        </div>
                    </div>
                </div>
                <div class='col-md-5'>
                    <div class="form-group">
                        <p>Até:</p>
                        <div class='input-group date' id='datetimepicker7'>
                            <input type='text' class="form-control" />
                            <span class="input-group-addon btn btn-primary"><span class="glyphicon glyphicon-calendar"></span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>



        

    </form>

</asp:Content>
