using System.Collections.Generic;
using System.Web.Http;
using API.Models;
using API.ViewModel;
using Dotz.Core.Business.Catalogo.Produto.BusinessServices;
using Dotz.Core.Data.Catalogo.Produto.Model.Entities;
using Dotz.Core.Data.Catalogo.Produto.Model.Views;
using Dotz.Core.Business.Locais.BusinessServices;
using Dotz.Core.Data.Locais.CEP.Model.Views;
using Dotz.Core.Data.ContaCorrente.Usuario.Model.Entities;
using System.Linq;
using Dotz.Core.Data.ContaCorrente.Usuario.Model.Views;

namespace API.Controllers
{
    public class RegiaoController : ApiController
    {
        // GET: Regiao Cidade
        [Route("api/Regiao/Cidade")]
        [HttpGet]
        public List<WebCidadeVw> Cidade(int estadoId)
        {
            var business = DotzCore.GetBusinessService<LocaisBSvc>();
            var cidades = business.ListarCidades().Select(p => p.Value)
                .Where(p => p.EstadoId == estadoId).ToList();
            return cidades;
        }

        // GET: Regiao Estado
        [Route("api/Regiao/Estado")]
        [HttpGet]
        public ResultObject Estado()
        {
            try
            {
                var business = DotzCore.GetBusinessService<LocaisBSvc>();
                var result = new ResultObject(false);
                result.Object = business.ListarEstado();
                return result;
            }
            catch (System.Exception e)
            {
                var resultEx = new ResultObject(true);
                resultEx.Object = e;
                return resultEx;
                throw;
            }
        }


        // GET: Regiao Cidade
        [Route("api/Regiao/Cidade/Find")]
        [HttpGet]
        public WebCidadeVw FindCidade(int id)
        {
            var business = DotzCore.GetBusinessService<LocaisBSvc>();
            var cidades = business.ListarCidades().Select(p => p.Value)
                .FirstOrDefault(p => p.WebCidadeId == id);
            return cidades;
        }

        // GET: Regiao Estado
        [Route("api/Regiao/Estado/Find")]
        [HttpGet]
        public WebEstados FindEstado(int id)
        {
            var business = DotzCore.GetBusinessService<LocaisBSvc>();
            return business.ListarEstado().FirstOrDefault(e => e.EstadoId == id);
        }
    }
}