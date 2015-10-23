using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Hello.Startup))]
namespace Hello
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
