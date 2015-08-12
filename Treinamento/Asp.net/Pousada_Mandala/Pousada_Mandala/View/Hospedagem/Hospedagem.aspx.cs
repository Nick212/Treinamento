using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Pousada_Mandala.Banco;
using Pousada_Mandala.Model;
using Pousada_Mandala.Control;



namespace Pousada_Mandala.View.Hospedagem
{
    public partial class Hospedagem : System.Web.UI.Page
    {
        CadastHospede cadHosp = new CadastHospede();
        CRUD consultaCpf = new CRUD();
        CadastHospedagem dadosHospedagem = new CadastHospedagem();
        CadastHospede dadosHospede = new CadastHospede();
        OperadorBD dadosOperador = new OperadorBD();
        Quartos dadosQuarto = new Quartos();
        CRUD hospedagem = new CRUD();



        protected void Page_Load(object sender, EventArgs e)
        {

        }
        
        protected void btnConsultar_Click(object sender, EventArgs e)
        {
            ConexaoBD conn = new ConexaoBD();
            

            cadHosp.cpf = txtCpf.Text;

            

            if (consultaCpf.ConsultaCadastro(cadHosp))
            {
                txtNome.Text = cadHosp.nome;
            }

            
        }

        protected void btnCadastrar_Click(object sender, EventArgs e)
        {

        }

        protected void btnLimparDados_Click(object sender, EventArgs e)
        {

        }

        protected void btnHospedar_Click(object sender, EventArgs e)
        {
            ModalAlerta.Visible = true;
            
            
        }
        protected void btnHopeda_Click(object sender, EventArgs e)
        {
            //Instanciando o Model
            dadosHospedagem.dataDe = Convert.ToDateTime(txtDataDe.Text);
            dadosHospedagem.dataAte = Convert.ToDateTime(txtDataAte.Text);
            dadosHospedagem.valorPagar = Convert.ToDouble(txtValorPagar.Text);

            //Extraindo dados do Usuario para inserção
            dadosHospedagem.codHospede = dadosHospede.codHosp;

            //Extraindo dados do Operador para inserção
            dadosHospedagem.codOperador = dadosOperador.CodigoOperador;

            //Extraindo dados do Quarto
            dadosHospedagem.codQuarto = dadosQuarto.codQuarto;

            //Inserindo dados no Model
            var Today = DateTime.Now.ToShortTimeString();
            dadosHospedagem.dataCadastro = Convert.ToDateTime(Today);


            //Inserindo Hospedagem
            if (!(hospedagem.InserirHospedagem(dadosHospedagem)))
            {
                return;
            }
            
        }
        
        protected void btnFecharModalAlerta_Click(object sender, EventArgs e)
        {
            ModalAlerta.Visible = false;
        }

       
    }
}