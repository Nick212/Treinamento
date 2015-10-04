using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace API.Models
{
    public class RegiaoModel
    {
        public int idCidade { get; set; }
        public string cidade { get; set; }
        public int idEstado { get; set; }
        public string estado { get; set; }
    }
}