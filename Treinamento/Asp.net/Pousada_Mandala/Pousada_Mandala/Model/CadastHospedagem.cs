using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pousada_Mandala.Model
{
    public class CadastHospedagem
    {
        public int codCadastro { get; set; }
        public int codOperador { get; set; }
        public int codHospede { get; set; }
        public int codQuarto { get; set; }
        public DateTime dataCadastro { get; set; }
        public string observacao { get; set; }
        public double valorPagar { get; set; }
        public DateTime dataDe { get; set; }
        public DateTime dataAte { get; set; }
    }
}