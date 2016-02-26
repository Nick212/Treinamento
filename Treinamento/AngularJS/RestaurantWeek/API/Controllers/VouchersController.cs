using System.Web.Http;
using API.ViewModel;
using Dotz.Core.Business.Catalogo.Produto.BusinessServices;


namespace API.Controllers
{

    public class VouchersController : ApiController
    {
        private readonly ValeTrocaBSvc _valeTrocaBSvc = DotzCore.GetBusinessService<ValeTrocaBSvc>();
        // GET api/voucher/
        public VoucherViewModel Get(string id, int pedido, int fornecedor)
        {
            var valeTroca = _valeTrocaBSvc.ConsultaValeTroca(pedido, id, fornecedor);
            return new VoucherViewModel
            {
                Voucher = valeTroca.Voucher,
                ProdutoId = valeTroca.ProdutoId,
                ProdutoNome = valeTroca.ProdutoNome,
                AdquirenteNome = valeTroca.AdquirenteNome,
                AdquirenteDocumento = valeTroca.CPF,
                FornecedorNome = valeTroca.FornecedorNome,
                PedidoData = valeTroca.PedidoData,
                DataVencimento = valeTroca.DataVencimento,
                DataValidacao = valeTroca.DataValidacao,
                Status = valeTroca.Status,

            };
        }
        // POST api/voucher/validar
        [Route("api/vouchers/validar/")]
        public VoucherViewModel Validar(string id, int pedido, int fornecedor)
        {
            var status = _valeTrocaBSvc.ValidacaoValeTroca(pedido, id, fornecedor);
            return new VoucherViewModel
            {
                Status = status
            };
        }
    }
}