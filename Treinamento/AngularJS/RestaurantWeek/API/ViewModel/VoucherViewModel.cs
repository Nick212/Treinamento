using System;
using Dotz.Core.Data.Catalogo.Produto.Model.ValueObjects;

namespace API.ViewModel
{
    public class VoucherViewModel
    {
        public string Voucher { get; set; }
        public int? ProdutoId { get; set; }
        public string ProdutoNome { get; set; }
        public string AdquirenteNome { get; set; }
        public string AdquirenteDocumento { get; set; }
        public string FornecedorNome { get; set; }
        public DateTime? DataVencimento { get; set; }
        public DateTime? DataValidacao { get; set; }
        public DateTime? PedidoData { get; set; }
        public eValeTroca Status { get; set; }
    }
}