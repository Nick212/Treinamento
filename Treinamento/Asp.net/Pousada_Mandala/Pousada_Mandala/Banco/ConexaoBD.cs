using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;

namespace Pousada_Mandala.Banco
{
   
       public class ConexaoBD : IDisposable
    {
        String strConn = @"Data Source=BRSAO1PW-054\SQLEXPRESS;Initial Catalog=POUSADA;Integrated Security=True";
        SqlConnection conn;

        public ConexaoBD()
        {
            conn = new SqlConnection(strConn);
        }

        public SqlConnection getConnection()
        {
            return conn;
        }
        public void openConnection()
        {
            conn.Open();
        }

        public void closeConnection()
        {
            conn.Close();
        }
        
        public void disposeConnection()
        {
            conn.Dispose();
        }

        public void Dispose()
        {
            conn.Dispose();
        }

    }
}