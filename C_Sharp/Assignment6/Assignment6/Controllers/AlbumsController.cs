using Assignment6.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Assignment6.Controllers
{
    [Authorize]
    public class AlbumsController : Controller
    {
        // GET: Albums
        Manager m = new Manager();
        public ActionResult Index()
        {
            
            return View(m.AlbumGetAll());
        }

        // GET: Albums/Details/5
        public ActionResult Details(int? id)
        {
            var obj = m.AlbumGetById(id.GetValueOrDefault());

            if (obj == null)
            {
                return HttpNotFound();
            }
            else
            {
                return View(obj);
            }
        }
        [Authorize(Roles = "Clerk")]
        [Route("Album/{id}/AddTrack")]
        public ActionResult AddTrack(int? id)
        {
            var obj = m.AlbumGetById(id.GetValueOrDefault());

            if (obj == null)
            {
                return HttpNotFound();
            }

            else
            {
                var form = new TrackAddFormViewModel();
                form.GenreList = new SelectList(
                    m.GenreGetAll(),
                    "Name",
                    "Name"
                    );
                form.AlbumId = obj.Id;
                form.AlbumName = obj.Name;

                return View(form);
            }

        }

        [Authorize(Roles = "Clerk")]
        [Route("Album/{id}/AddTrack")]
        [HttpPost]
        public ActionResult AddTrack(TrackAddViewModel newTrack)
        {
            var album = m.AlbumGetById(newTrack.AlbumId);

            if (!ModelState.IsValid)
            {

                var form = new TrackAddFormViewModel();
                form.GenreList = new SelectList(
                    m.GenreGetAll(),
                    "Name",
                    "Name"
                    );
                form.AlbumId = album.Id;
                form.AlbumName = album.Name;

                return View(form);
            }

            var addNew = m.TrackAdd(newTrack);

            if (addNew == null)
            {
                return View(newTrack);
            }

            else
            {
                return RedirectToAction("details", "Tracks", new { id = addNew.Id });
            }
        }

    }
}
