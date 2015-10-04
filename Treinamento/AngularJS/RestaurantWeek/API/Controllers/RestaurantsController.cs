using System.Collections.Generic;
using System.Web.Http;
using API.Models;
using API.ViewModel;

namespace API.Controllers
{
    public class RestaurantsController : ApiController
    {
        // GET api/restaurant/
        public ICollection<RestaurantViewModel> Get()
        {
            return Restaurants.GetAll();
        }
	}
}