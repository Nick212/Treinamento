using Pousada_Mandala.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Pousada_Mandala.View.Login
{
    public partial class Log : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnEntrar_Click(object sender, EventArgs e)
        {
            OperadorBD dadosOperador = new OperadorBD();
            dadosOperador.Nome = txtNome.Text;
            dadosOperador.Senha = txtSenha.Text;
        }
    }
}