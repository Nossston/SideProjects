using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Assignment6.Models
{
    public class AlbumWithDetailViewModel : AlbumBaseViewModel
    {
        public AlbumWithDetailViewModel()
        {
            Artists = new List<ArtistBaseViewModel>();
            Tracks = new List<TrackBaseViewModel>();
        }

        [DataType(DataType.MultilineText)]
        [Display(Name = "Album summary")]
        public string Summary { get; set; }

        public IEnumerable<ArtistBaseViewModel> Artists { get; set; }

        public IEnumerable<TrackBaseViewModel> Tracks { get; set; }

    }
}