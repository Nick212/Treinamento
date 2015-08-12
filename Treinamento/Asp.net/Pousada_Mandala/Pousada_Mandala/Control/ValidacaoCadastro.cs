using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Pousada_Mandala.Model;
using Pousada_Mandala.Banco;
using System.Data.SqlClient;

namespace Pousada_Mandala.Control
{
    public class ValidacaoCadastro
    {

        //Declaração de uma variável
        private CadastHospede cadHosp;

        //Construtor
        public ValidacaoCadastro()
        {
            this.cadHosp = new CadastHospede();
        }

        public CadastHospede ValidaCpfBD(string cpf)
        {
           
            try
            {

                ConexaoBD conn = new ConexaoBD();
                

                conn.openConnection();

                String select = "SELECT * FROM HOSPEDE WHERE CPF ='"+cpf+"'";

                SqlCommand cmd = new SqlCommand(select, conn.getConnection());
                //cmd.Parameters.Add("@CPF", cpf);
                var rd = cmd.ExecuteReader();

                
                if (rd.Read())
                {
                    //cad.codHosp = rd.GetInt16(0);
                    cadHosp.cpf = rd.GetString(1);
                    cadHosp.nome = rd.GetString(2);
                    cadHosp.dataNascimento = rd.GetDateTime(3);
                    cadHosp.rua = rd.GetString(4);
                    
                    cadHosp.bairro = rd.GetString(6);
                    cadHosp.profissao = rd.GetString(10);
                    Int32 num = rd.GetInt32(5);
                    cadHosp.numeroCasa = num;
                }
                            
                conn.closeConnection();
                return cadHosp;
     
            }
            catch (Exception e) {


                return cadHosp;
            }
           
        }

    }
}