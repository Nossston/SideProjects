using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Assignment6.Startup))]

namespace Assignment6
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
