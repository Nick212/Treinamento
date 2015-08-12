using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Pousada_Mandala.Model;
using Pousada_Mandala.Banco;
using System.Data.SqlClient;

namespace Pousada_Mandala.Control
{
    public class CRUD 
    {
        //CONSTRUTOR
        protected CadastHospede cadHosp;
        protected CadastHospedagem dadosHospedagem;

        public CRUD()
        {
            this.cadHosp = new CadastHospede();
        }


        //INSERT CADASTRO DE NOVO HOSPEDE
        public CadastHospede InserirCadastro(CadastHospede cadHosp)
        {
            ConexaoBD conn = new ConexaoBD();

            try
            {
                conn.openConnection();

                string insert = "INSERT INTO [dbo].HOSPEDE VALUES (@cpf, @nome, @dataNasc, @rua, @num, @bairro, @cidade, @estado, @pais, @profissao)";

                SqlCommand cmdIns = new SqlCommand(insert, conn.getConnection());

                cmdIns.Parameters.Add("@cpf", cadHosp.cpf);
                cmdIns.Parameters.Add("@nome", cadHosp.nome);
                cmdIns.Parameters.Add("@dataNasc", cadHosp.dataNascimento);
                cmdIns.Parameters.Add("@rua", cadHosp.rua);
                cmdIns.Parameters.Add("@num", cadHosp.numeroCasa);
                cmdIns.Parameters.Add("@bairro", cadHosp.bairro);
                cmdIns.Parameters.Add("@cidade", cadHosp.cidade);
                cmdIns.Parameters.Add("@estado", cadHosp.estado);
                cmdIns.Parameters.Add("@pais", cadHosp.pais);
                cmdIns.Parameters.Add("@profissao", cadHosp.profissao);
                cmdIns.ExecuteNonQuery();

                cmdIns.Dispose();
                return cadHosp;
            }
            catch (Exception e) { throw new Exception("Erro ao tentar inserir os Dados no Banco " + e); }
            finally { conn.closeConnection(); }
            
        }

        //INSERT HOSPEDAGEM HOSPEDE
        public bool InserirHospedagem(CadastHospedagem dadosHospedagem)
        {
            ConexaoBD conn = new ConexaoBD();

            try
            {
                conn.openConnection();

                string insert = "INSERT INTO [dbo].HOSPEDE VALUES (@COD_OPERADOR,@COD_HOSPEDE,@COD_QUARTO,@DATACADASTRO,@OBSERVACAO,@VALOR_PAGAR,@DATA_DE,@DATA_ATE)";

                SqlCommand cmdIns = new SqlCommand(insert, conn.getConnection());

                cmdIns.Parameters.Add("@COD_OPERADOR",dadosHospedagem.codOperador);
                cmdIns.Parameters.Add("@COD_HOSPEDE", dadosHospedagem.codHospede);
                cmdIns.Parameters.Add("@COD_QUARTO", dadosHospedagem.codQuarto);
                cmdIns.Parameters.Add("@DATACADASTRO", dadosHospedagem.dataCadastro);
                cmdIns.Parameters.Add("@OBSERVACAO", dadosHospedagem.observacao);
                cmdIns.Parameters.Add("@VALOR_PAGAR", dadosHospedagem.valorPagar);
                cmdIns.Parameters.Add("@DATA_DE",dadosHospedagem.dataDe);
                cmdIns.Parameters.Add("@DATA_ATE", dadosHospedagem.dataAte);
                cmdIns.ExecuteNonQuery();

                cmdIns.Dispose();
                return true;
            }
            catch (Exception e) { throw new Exception("Erro ao tentar inserir os Dados no Banco " + e); }
            finally { conn.closeConnection(); }

        }
        public bool ConsultaCadastro(CadastHospede cadHosp)
        {
            ConexaoBD conn = new ConexaoBD();

            try
            {
                conn.openConnection();

                string select = "SELECT * FROM HOSPEDE WHERE CPF =@CPF";
                SqlCommand cmdSql = new SqlCommand(select, conn.getConnection());
                cmdSql.Parameters.Add("@CPF", cadHosp.cpf);
                var rd = cmdSql.ExecuteReader();

                if (rd.Read())
                {
                    cadHosp.codHosp = rd.GetInt32(0);
                    cadHosp.cpf = rd.GetString(1);
                    cadHosp.nome = rd.GetString(2);
                    cadHosp.dataNascimento = Convert.ToDateTime(rd.GetDateTime(3));
                    cadHosp.rua = rd.GetString(4);
                    cadHosp.numeroCasa = rd.GetInt32(5);
                    cadHosp.bairro = rd.GetString(6);
                    cadHosp.cidade = rd.GetString(7);
                    cadHosp.estado = rd.GetString(8);
                    cadHosp.pais = rd.GetString(9);

                }

                cmdSql.Dispose();
                return true;
            }
            catch(Exception e){throw new Exception("Erro na Consulta" + e);}
            finally { conn.closeConnection(); }
            
        }

        
    }
}