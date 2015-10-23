using GetPostModel.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GetPostModel.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            var pessoa = new Pessoa()
            {
                PessoaId = 1,
                Nome = "Nicolas Carvalho",
                Twitter = "Nick Jow"
            };


            /*Pode ser utilizada das duas formas*/
            //Variável Dinâmica
            ViewData["PessoaId"] = pessoa.PessoaId;
            ViewData["Nome"] = pessoa.Nome;
            ViewData["Twitter"] = pessoa.Twitter;

            //Variável Dinâmica Melhorada
            ViewBag.PessoaId = pessoa.PessoaId;
            ViewBag.Nome = pessoa.Nome;
            ViewBag.Twitter = pessoa.Twitter;

            return View(pessoa);
        }
    }
}