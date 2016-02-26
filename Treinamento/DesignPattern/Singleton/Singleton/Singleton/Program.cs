using DesignPattern.DesignPattern;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DesignPattern
{
    class Program
    {
        public static void Main(string[] args)
        {
            SingletonSimple();
        }

        public static void SingletonSimple()
        {
            Singleton _single1 = Singleton.Instance;
            _single1.Quantidade = 1;

            Singleton _single2 = Singleton.Instance;
            _single2.Quantidade = 5;

            Console.WriteLine("First Instance:  Quantidade = {0}", _single1.Quantidade.ToString());
            Console.WriteLine("Second Instance: Quantidade = {0}", _single2.Quantidade.ToString());
            Console.ReadLine();
        }
    }
}
