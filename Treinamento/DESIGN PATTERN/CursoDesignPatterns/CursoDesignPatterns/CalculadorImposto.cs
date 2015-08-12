using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CursoDesignPatterns
{

    //DESIGN PATTERN -> Nesse caso temos vários If's encadeados, ppara condições que poderão ser mais complexas
    //desmembramos também a responsabilidade de calculo dos impostos através de classes (DELEGATES)

    public class CalculadorImposto
    {
        public void RealizaCalculo(Orcamento orcamento, Imposto imposto)
        {
            double icms = imposto.Calcula(orcamento);
            Console.WriteLine(icms);
        }
    }
}
