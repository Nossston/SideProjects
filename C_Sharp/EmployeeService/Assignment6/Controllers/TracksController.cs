using Assignment6.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Assignment6.Controllers
{
    [Authorize]
    public class TracksController : Controller
    {
        Manager m = new Manager();

        // GET: Tracks
        public ActionResult Index()
        {
            return View(m.TrackGetAll());
        }

        // GET: Tracks/Details/5
        public ActionResult Details(int? id)
        {
            var obj = m.TrackGetById(id.GetValueOrDefault());

            if (obj == null)
            {
                return HttpNotFound();
            }
            else
            {
                return View(obj);
            }
        }




        // GET: Tracks/Edit/5
        [Authorize(Roles = "Clerk")]
        public ActionResult Edit(int? id)
        {
            var obj = m.TrackGetById(id.GetValueOrDefault());

            if (obj == null)
            {
                return HttpNotFound();
            }
            else
            {
                var form = new TrackEditFormViewModel();
                form.Name = obj.Name;
                return View(form);
            }
        }

        // POST: Tracks/Edit/5
        [Authorize(Roles = "Clerk")]
        [HttpPost]
        public ActionResult Edit(TrackEditViewModel editTrack)
        {


            if (!ModelState.IsValid)
            {
                var form = new TrackEditFormViewModel();
                form.Name = editTrack.Name;
                return View(form);
            }

            var track = m.TrackEdit(editTrack);

            if (track == null)
            {
                var form = new TrackEditFormViewModel();
                form.Name = editTrack.Name;
                return View(form);
            }
            else
            {
                return RedirectToAction("Details", track);
            }

        }
        // GET: Tracks/Delete/5
        [Authorize(Roles = "Clerk")]
        public ActionResult Delete(int? id)
        {
            var obj = m.TrackGetById(id.GetValueOrDefault());

            if (obj == null)
            {
                return Redirect("~/Tracks/index");
            }
            else
            {
                return View(obj);
            }

        }

        // POST: Track/Delete/5
        [Authorize(Roles = "Clerk")]
        [HttpPost]
        public ActionResult Delete(int? id, FormCollection collection)
        {
            var result = m.TrackDelete(id.GetValueOrDefault());

            return Redirect("~/tracks/index");
        }
    }
}
