using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Assignment6.Models
{
    public class TrackAddViewModel
    {
        [Required, StringLength(200)]
        [Display(Name = "Track name")]
        public string Name { get; set; }

        [Required, StringLength(500)]
        [Display(Name = "Composer names (comma-separated)")]
        public string Composers { get; set; }

        [Display(Name = "Genre")]
        public string Genre { get; set; }

        [Display(Name = "Album id")]
        public int AlbumId { get; set; }

        [StringLength(200)]
        public string Clerk { get; set; }

        [Display(Name = "Sample clip")]
        [Required]
        public HttpPostedFileBase TrackUpload { get; set; }
    }
}