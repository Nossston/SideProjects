using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Assignment6.Models
{
    public class ArtistWithMediaViewModel : ArtistWithDetailViewModel
    {
        public ArtistWithMediaViewModel()
        {
            MediaItems = new List<MediaItemBaseViewModel>();
        }
        public IEnumerable<MediaItemBaseViewModel> MediaItems { get; set; }
    }
}