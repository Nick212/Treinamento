using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using System.Xml.Linq;
using System.Xml.Serialization;

namespace TesteXml
{
    class Program
    {
        static void Main(string[] args)
        {

            var mensagem =
                "<?xml version='1.0' encoding='UTF-8'?>\n<error xmlns='http://ideais-commerce.com.br/api/'><error_code>8001</error_code><error_message>O pedido 7212282 do parceiro sitenormalAcom já existe na B2W, o número do pedido na B2W é 02-622040805, gravado no dia 2016-02-24 11:23:38.948.</error_message></error>";

            XDocument doc = XDocument.Parse(mensagem);
            Console.WriteLine(doc);

            var response = new ResponseFusion().ObterRespostaDeserializada(mensagem);

            Console.Read();


        }
    }
}
