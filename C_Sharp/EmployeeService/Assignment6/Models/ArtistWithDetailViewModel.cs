using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Assignment6.Models
{
    public class ArtistWithDetailViewModel : ArtistBaseViewModel
    {
        public ArtistWithDetailViewModel()
        {
            Albums = new List<AlbumBaseViewModel>();
        }

        [DataType(DataType.MultilineText)]
        [Display(Name = "Artist biography")]
        public string Biography { get; set; }

        [Display(Name = "Album count")]
        public IEnumerable<AlbumBaseViewModel> Albums { get; set; }
    }
}