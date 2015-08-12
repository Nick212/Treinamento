using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Pousada_Mandala.Banco;
using Pousada_Mandala.Model;
using Pousada_Mandala.Control;

namespace Pousada_Mandala.View.CadastroHospede
{
    public partial class CadHospede : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            
        }

        protected void btnConsultar_Click(object sender, EventArgs e)
        {
            CadastHospede cadHosp = new CadastHospede();
            ValidacaoCadastro valCad = new ValidacaoCadastro(); //Inicializo  construtor
            ValidaCEP_Correios valCep = new ValidaCEP_Correios(); //Inicializa o construtor




            cadHosp.cpf = txtCpf.Text;
            cadHosp.nome = txtNome.Text;
            //cadHosp.dataNascimento = txtDataNasc.Text;
            cadHosp.rua = txtEndereco.Text;
            //cadHosp.numeroCasa = txtNumero.Text;
            cadHosp.bairro = txtBairro.Text;
            //cadHosp.cidade = txtCidade.Text;
            //cadHosp.estado = txtEstado.Text;
            //cadHosp.pais = txtPais.Text;
            cadHosp.profissao = txtProfissao.Text;

            /*if (valCep.ValidaCEP_Correio(txtCep.Text).Equals(cadHosp.cep))
            {

            }*/
            
            //Buscando CEP
            //valCep.
                
            cadHosp = valCad.ValidaCpfBD(txtCpf.Text);

            if (cadHosp.cpf.Equals(txtCpf.Text))
            {

                txtNome.Text = cadHosp.nome;
                txtDataNasc.Text = cadHosp.dataNascimento.ToString("dd/MM/yyyy");
                txtEndereco.Text = cadHosp.rua;
                txtBairro.Text = cadHosp.bairro;
                txtCep.Text = cadHosp.cep.ToString();
                //txtComplemento = cadHosp.complemento;
                txtNumero.Text = cadHosp.numeroCasa.ToString();
                txtTelResidencial.Text = cadHosp.telefoneResidencial.ToString();
                txtTelCelular.Text = cadHosp.telefoneCelular.ToString();
                txtProfissao.Text = cadHosp.profissao;            
            }
            else
            {
                
            }
            

            
        }

        protected void btnCadastrar_Click(object sender, EventArgs e)
        {

            CadastHospede cadHosp = new CadastHospede();
            CRUD inserirCad = new CRUD();

            //INSERINDO OS DADOS DIGITADOS NO MODELS//

            
            cadHosp.cpf = txtCpf.Text;
            cadHosp.nome = txtNome.Text;
            cadHosp.dataNascimento = Convert.ToDateTime(txtDataNasc.Text);
            cadHosp.rua = txtEndereco.Text;
            cadHosp.numeroCasa = Convert.ToInt32(txtNumero.Text);
            cadHosp.bairro = txtBairro.Text;
            cadHosp.cidade = txtCidade.Text;
            cadHosp.estado = txtEstado.Text;
            cadHosp.pais = txtPais.Text;
            cadHosp.profissao = txtProfissao.Text;
            


            
            
            //INSERINDO CADASTRO PASSANDO OBJETO COMO PARÂMETRO
            inserirCad.InserirCadastro(cadHosp);


        }

        protected void btnLimparDados_Click(object sender, EventArgs e)
        {
            CadastHospede cadHosp = new CadastHospede();

            txtNome.Text = "";
            txtDataNasc.Text = "";
            txtEndereco.Text = "";
            txtComplemento.Text = "";
            txtTelResidencial.Text = "";
            txtTelCelular.Text = "";
            txtProfissao.Text = "";
            txtEstado.Text = "";
            txtCpf.Text = "";
            txtCep.Text = "";
            txtBairro.Text = "";
            txtNumero.Text = "";
            txtCidade.Text = "";
            txtPais.Text = "";
                
        }
    }
}