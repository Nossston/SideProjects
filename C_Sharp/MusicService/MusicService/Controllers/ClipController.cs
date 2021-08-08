using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Assignment6.Controllers
{
    public class ClipController : Controller
    {

        Manager m = new Manager();

        // GET: Clips/Details/5
        [Route("Clip/{id}")]
        public ActionResult Details(int? id)
        {
            var obj = m.ClipGetById(id.GetValueOrDefault());
            if (obj == null)
            {
                return HttpNotFound();
            }
            else
            {
                return File(obj.Audio, obj.AudioContentType);
            }
        }

    }
}
