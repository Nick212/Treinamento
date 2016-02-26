using System.Web.Http;
using Newtonsoft.Json.Serialization;

namespace API
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        { 
            // Web API configuration and services
            config.MapHttpAttributeRoutes();
            config.Formatters.JsonFormatter.Indent = true;
            config.Formatters.JsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            config.Formatters.Remove(config.Formatters.XmlFormatter);
            // Web API routes
            config.Routes.MapHttpRoute(
               name: "VoucherApi",
               routeTemplate: "api/vouchers/{id}/{pedido}/{fornecedor}",
               defaults: new { controller = "vouchers", id = RouteParameter.Optional, pedido = RouteParameter.Optional, fornecedor = RouteParameter.Optional }
           );
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
