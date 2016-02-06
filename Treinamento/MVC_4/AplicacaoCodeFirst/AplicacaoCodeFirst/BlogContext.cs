using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace AplicacaoCodeFirst
{
    /// <summary>
    /// Classe de Contexto aplicada para utilizar um serviço específico
    /// </summary>
    public class BlogContext : DbContext
    {
        public BlogContext()
            : base("name=BlogContext")
        {
            Database.Connection.ConnectionString = 
            @"data source=NICOLAS-PC\SQLEXPRESS; inicial catalog=BlogBDLivro; Integrated Security=SSPI";
        }

        public DbSet<Categorias> Categorias { get; set; }

        public DbSet<Posts> Posts { get; set; }
    }
}