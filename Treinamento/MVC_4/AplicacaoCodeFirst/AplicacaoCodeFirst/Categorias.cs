﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AplicacaoCodeFirst
{
    public class Categorias
    {
        [Key]
        public int CategoriaID { get; set; }

        public string Categoria { get; set; }

        public string Descricao { get; set; }

        public virtual ICollection<Posts> Posts { get; set; }

    }
}