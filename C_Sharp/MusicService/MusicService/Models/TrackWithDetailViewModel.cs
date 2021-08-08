using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Assignment6.Models
{
    public class TrackWithDetailViewModel : TrackBaseViewModel
    {
        public TrackWithDetailViewModel()
        {
            Albums = new List<AlbumBaseViewModel>();
            AlbumNames = new List<String>();
        }
        public IEnumerable<AlbumBaseViewModel> Albums { get; set; }

        public IEnumerable<string> AlbumNames { get; set; }

        [Display(Name = "Sample clip")]
        public string Audio { get { return $"/Clip/{Id}"; } }

    }
}