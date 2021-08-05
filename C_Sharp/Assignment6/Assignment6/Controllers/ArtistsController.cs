using Assignment6.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Assignment6.Controllers
{
    [Authorize]
    public class ArtistsController : Controller
    {
        Manager m = new Manager();

        // GET: Artists
        public ActionResult Index()
        {
            
            return View(m.ArtistGetAll());
        }

        // GET: Artists/Details/5

        public ActionResult Details(int? id)
        {
            var obj = m.ArtistGetById(id.GetValueOrDefault());

            if (obj == null)
            {
                return HttpNotFound();
            }
            else
            {
                return View(obj);
            }
        }

        // GET: Artists/Create
        [Authorize(Roles = "Executive")]

        public ActionResult Create()
        {
            var form = new ArtistAddFormViewModel();
            form.GenreList = new SelectList(
                m.GenreGetAll(),
                "Name",
                "Name"
                );
            return View(form);
        }

        // POST: Artists/Create
        [Authorize(Roles = "Executive")]
        [HttpPost, ValidateInput(false)]

        public ActionResult Create(ArtistAddFormViewModel newArtist)
        {
            if (!ModelState.IsValid)
            {
                newArtist.GenreList = new SelectList(
                    m.GenreGetAll(),
                    "Name",
                    "Name"
                    );
                return View(newArtist);
            }

            var addNew = m.ArtistAdd(newArtist);

            if (addNew == null)
            {
                return View(newArtist);
            }
            else
            {
                return RedirectToAction("details", new { id = addNew.Id });
            }
        }



        [Authorize(Roles = "Coordinator")]
        [Route("Artist/{id}/AddAlbum")]
        public ActionResult AddAlbum(int? id)
        {
            var obj = m.ArtistGetById(id.GetValueOrDefault());

            if (obj == null)
            {
                return HttpNotFound();
            }
            else
            {
                var form = new AlbumAddFormViewModel();
                form.GenreList = new SelectList(
                    m.GenreGetAll(),
                    "Name",
                    "Name"
                    );
                form.ArtistId = obj.Id;
                return View(form);
            }
        }

        [Route("Artist/{id}/AddAlbum")]
        [HttpPost, ValidateInput(false)]
        public ActionResult AddAlbum(AlbumAddFormViewModel newAlbum)
        {
            if (!ModelState.IsValid)
            {
                var form = m.mapper.Map<AlbumAddViewModel, AlbumAddFormViewModel>(newAlbum);
                form.GenreList = new SelectList(
                    m.GenreGetAll(),
                    "Name",
                    "Name"
                    );
                return View(form);
            }

            var addNew = m.AlbumAdd(newAlbum);

            if (addNew == null)
            {
                var form = m.mapper.Map<AlbumAddViewModel, AlbumAddFormViewModel>(newAlbum);
                form.GenreList = new SelectList(
                    m.GenreGetAll(),
                    "Name",
                    "Name"
                    );
                return View(form);
            }
            else
            {
                return RedirectToAction("Details", "Albums", new { id = addNew.Id });
            }
        }


        [Authorize(Roles = "Coordinator")]
        [Route("Artists/{id}/AddMediaItem")]
        public ActionResult AddMediaItem(int? id)
        {
            var obj = m.ArtistGetById(id.GetValueOrDefault());

            if (obj == null)
            {
                return HttpNotFound();
            }
            else
            {
                var form = new MediaItemAddFormViewModel();
                form.ArtistId = obj.Id;
                form.ArtistName = obj.Name;

                return View(form);
            }
        }

        [Authorize(Roles = "Coordinator")]
        [Route("Artists/{id}/AddMediaItem")]
        [HttpPost]
        public ActionResult MediaItemAdd(MediaItemAddViewModel newMedia)
        {
            var artist = m.ArtistGetById(newMedia.ArtistId);

            if (!ModelState.IsValid)
            {
                var form = new MediaItemAddFormViewModel();
                form.ArtistId = artist.Id;
                form.ArtistName = artist.Name;

                return View(form);
            }

            var addNew = m.MediaItemAdd(newMedia);

            if (addNew == null)
            {
                var form = new MediaItemAddFormViewModel();
                form.ArtistId = artist.Id;
                form.ArtistName = artist.Name;

                return View(form);
            }
            else
            {
                return RedirectToAction("details", "Artists", new { id = addNew.Id });
            }
        }

    }
}
