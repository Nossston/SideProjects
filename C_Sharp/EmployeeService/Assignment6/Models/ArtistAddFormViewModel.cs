using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.ComponentModel.DataAnnotations;

namespace Assignment6.Models
{
    public class ArtistAddFormViewModel : ArtistAddViewModel
    {
        [Display(Name = "Artist's primary genre")]
        public SelectList GenreList { get; set; }
    }
}