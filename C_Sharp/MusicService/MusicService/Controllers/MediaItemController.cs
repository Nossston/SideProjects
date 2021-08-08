using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Assignment6.Controllers
{
    public class MediaItemController : Controller
    {
        private Manager m = new Manager();

        // GET: MediaItem/Details/5
        public ActionResult Details(int? id)
        {
            var obj = m.MediaItemGetById(id.GetValueOrDefault());

            if (obj == null)
            {
                return HttpNotFound();
            }
            else
            {
                return File(obj.Content, obj.ContentType);
            }
        }

        

    }
}
