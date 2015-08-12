using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Pousada_Mandala.Model
{
    public class CadastHospede
    {
        public int codHosp { get; set; }
        public string cpf { get; set; }
        public string nome { get; set; }
        public DateTime dataNascimento { get; set; }
        public int cep { get; set; }
        public string rua { get; set; }
        public string bairro { get; set; }
        public string complemento { get; set; }
        public int numeroCasa { get; set; }
        public int telefoneResidencial { get; set; }
        public int telefoneCelular { get; set; }
        public string cidade { get; set; }
        public string estado { get; set; }
        public string pais { get; set; }
        public string profissao { get; set; }

    }
}