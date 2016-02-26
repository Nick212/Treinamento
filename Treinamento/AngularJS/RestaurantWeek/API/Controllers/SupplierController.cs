using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using API.Models;
using Dotz.Core.Business.Catalogo.Produto.BusinessServices;
using Dotz.Core.Data.Catalogo.Produto.Model.Entities;
using Dotz.Core.Data.Catalogo.Produto.Model.Views;

namespace API.Controllers
{
    public class SupplierController : ApiController
    {
        // GET: api/Supplier
        public List<WmsRestaurante> Get()
        {
            var business = DotzCore.GetBusinessService<RestauranteBSvc>();
            return business.Listar().ToList();
        }

        // GET: api/Supplier/5
        public RestauranteVw Get(int id)
        {
            var business = DotzCore.GetBusinessService<RestauranteBSvc>();
            return business.BuscarComEndereco(id);
        }

        
        // POST: api/Supplier
        [Route("api/Supplier/Add")]
        [HttpPost]
        public ResultObject Post([FromBody] RestauranteVw info)
        {
            //Retira pontos e traços do cnpj
            info.Restaurante.Cnpj = info.Restaurante.Cnpj.Replace(".", "").Replace("-", "").Replace("/", "");
            info.Enderecos.ToList()[0].Cep = info.Enderecos.ToList()[0].Cep.Replace("-", "");
            info.Enderecos.ToList()[1].Cep = info.Enderecos.ToList()[1].Cep.Replace("-", "");
            

            var business = DotzCore.GetBusinessService<RestauranteBSvc>();
            return business.Salvar(info.Restaurante, info.Enderecos)
                ? new ResultObject("Restaurante salvo com sucesso", false)
                : new ResultObject("Ocorreu um erro, por favor tente novamente.", true);
        }

        [Route("api/Supplier/Active")]
        public ResultObject Active(int id)
        {
            var business = DotzCore.GetBusinessService<RestauranteBSvc>();
            return business.AtivarRestaurante(id)
                ? new ResultObject("Restaurante salvo com sucesso", false)
                : new ResultObject("Ocorreu um erro, por favor tente novamente.", true);
        }

        // PUT: api/Supplier/5
        public ResultObject Put(int id, [FromBody] string value)
        {
            return new ResultObject();
        }

        // DELETE: api/Supplier/5
        [Route("api/Supplier/Delete")]
        public ResultObject Delete(int id)
        {

            var business = DotzCore.GetBusinessService<RestauranteBSvc>();
            return business.ReprovarCadastroFornecedor(id)
                ? new ResultObject("Restaurante salvo com sucesso", false)
                : new ResultObject("Ocorreu um erro, por favor tente novamente.", true);
        }
    }
}