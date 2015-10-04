using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace API.Models
{
    public class UserModel
    {
        public object User { get; set; }
        public bool IsCatalogo { get; set; }
        public bool IsRestaurante { get; set; }
        public int RestauranteId { get; set; }
    }
}