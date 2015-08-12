using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Pousada_Mandala.Model;
using Pousada_Mandala.Banco;
using System.Data.SqlClient;

namespace Pousada_Mandala.Control
{
    public class ValidacaoLogin 
    {

        //Validação de Login
        public bool Login(string Nome, string Senha)
        {

            OperadorBD oper = new OperadorBD();

            oper.Nome = Nome;
            oper.Senha = Senha;

            if (oper.Nome != "" && oper.Nome.Length <= 50 && oper.Senha != "" && oper.Senha.Length <= 50)
            {
                return true;
            }
            else
            {
                return false;
            }
           
        }

        public bool LoginBD(string Nome, string Senha)
        {
            try
            {

                ConexaoBD conn = new ConexaoBD();

                conn.openConnection();
                String select = "SELECT * FROM OPERADOR";
                SqlCommand cmd = new SqlCommand(select, conn.getConnection());
                var rd = cmd.ExecuteReader();

                while (rd.Read())
                {
                    var nome = rd.GetString(1);
                    var senha = rd.GetString(2);

                }
                conn.closeConnection();

                    return true; ;
                
            }
            
            catch (Exception e) 
            {throw ;
            var oi = e;
            }
            
            finally
            {
                
            }
        
        }
    }
}