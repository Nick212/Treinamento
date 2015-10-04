using System.Web.Http;
using API.Models;
using Dotz.Core.Business.Catalogo.Produto.BusinessServices;
using Dotz.Core.Business.ContaCorrente.Usuario.BusinessServices;
using Dotz.Core.Data.Catalogo.Produto.Model.Entities;
using Dotz.Core.Data.ContaCorrente.Usuario.Model.ValueObjects;
using Dotz.Core.Data.ContaCorrente.Usuario.Model.Views;

namespace API.Controllers
{
    public class LoginController : ApiController
    {
        // GET: api/Login/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Login
        public ResultObject Post([FromBody] LoginModel user)
        {
            var autenticacao = DotzCore.GetBusinessService<AuthenticationBSvc>();
            var usuario = autenticacao.Authenticate(user.login, user.senha);

            var result = AuthenticaticaSiteUser(usuario);
            if (!result.HasError) return result;

            var usuarioAnalyzer = autenticacao.AuthenticateIntranet(user.login, user.senha);
            var resultAnalyzer = AuthenticaticaAnalyzer(usuarioAnalyzer);

            return !resultAnalyzer.HasError ? resultAnalyzer : result;
        }

        private ResultObject AuthenticaticaAnalyzer(AuthenticateIntranetStateVw usuario)
        {
            if (usuario.Authenticated)
            {
                if (usuario.UserIdAuthenticate == null) return new ResultObject("Não foi possível conectar", true);
                var identificador = usuario.UserIdAuthenticate.Value;
                var result =
                    DotzCore.GetBusinessService<UsuarioBSvc>()
                        .ObterUsuarioCompletoPorIdentificador(identificador.ToString());
                var objResult = new ResultObject(false)
                {
                    Object = new UserModel()
                    {
                        User = result,
                        IsCatalogo = true,
                        IsRestaurante = false
                    }
                };


                return objResult;
            }


            string erro;
            switch (usuario.Status)
            {
                case eAuthenticateIntranetStatus.AccountBlocked:
                    erro = "Conta bloqueada";
                    break;
                case eAuthenticateIntranetStatus.NoPassword:
                case eAuthenticateIntranetStatus.Invalid:
                    erro = "Senha inválida";
                    break;
                default:
                    erro = "Não foi possível conectar.";
                    break;
            }
            return new ResultObject(erro, true);
        }


        private static ResultObject AuthenticaticaSiteUser(AuthenticateStateVw usuario)
        {
            var objResult = new ResultObject(true);
            if (usuario.Authenticated)
            {
                if (usuario.UserIdAuthenticate == null) return new ResultObject("Não foi possível conectar", true);
                var identificador = usuario.UserIdAuthenticate.Value;
                var result =
                    DotzCore.GetBusinessService<UsuarioBSvc>()
                        .ObterUsuarioCompletoPorIdentificador(identificador.ToString());
                var restaurante = FindRestaurantPerDocument(usuario.Identifier);
                if (restaurante != null)
                {
                    if (restaurante.WmsRestauranteId != null)
                        objResult = new ResultObject(false)
                        {
                            Object = new UserModel()
                            {
                                User = result,
                                IsCatalogo = false,
                                IsRestaurante = true,
                                RestauranteId = restaurante.WmsRestauranteId.Value
                            }
                        };
                }

                objResult.Message = "Usuário não encontrado para RW.";
                return objResult;
            }


            string erro;
            switch (usuario.Status)
            {
                case eAuthenticateStatus.Blocked:
                    erro = "Conta bloqueada";
                    break;
                case eAuthenticateStatus.InvalidAnswer:
                case eAuthenticateStatus.InvalidPassword:
                    erro = "Senha inválida";
                    break;
                default:
                    erro = "Não foi possível conectar.";
                    break;
            }
            return new ResultObject(erro, true);
        }

        private static WmsRestaurante FindRestaurantPerDocument(string document)
        {
            try
            {
                var business = DotzCore.GetBusinessService<RestauranteBSvc>();
                var restaurant = business.BuscarPorDocumento(document);
                if (restaurant != null && restaurant.WmsRestauranteId > 0)
                {
                    if (restaurant.Ativo.HasValue && restaurant.Ativo.Value)
                    {
                        return restaurant;
                    }
                }
            }
            catch (System.Exception)
            {
                return null;
            }
            return null;

        }

        // PUT: api/Login/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Login/5
        public void Delete(int id)
        {
        }
    }
}