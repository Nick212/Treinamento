using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPattern.DesignPattern
{
    /// <summary>
    /// Singleton tem como definição garantir que uma classe tenha somente uma instância e fornecer um ponto global de acesso a mesma. 
    /// </summary>
    public sealed class Singleton
    {
        /// <summary>
        /// Instancia Global
        /// </summary>
        private static readonly Singleton instance = new Singleton();

        /// <summary>
        /// Atributo da classe
        /// </summary>
        public int Quantidade { get; set; }

        /// <summary>
        /// Construtor Vazio
        /// </summary>
        private Singleton() { }

        /// <summary>
        /// Implementação do Singleton
        /// </summary>
        public static Singleton Instance
        {
            get
            {
                return instance;
            }
        }
    }
}
