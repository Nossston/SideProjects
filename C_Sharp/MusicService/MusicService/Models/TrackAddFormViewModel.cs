using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Assignment6.Models
{
    public class TrackAddFormViewModel
    {
        [Required, StringLength(200)]
        [Display(Name = "Track Name")]
        public string Name { get; set; }

        [Required, StringLength(500)]
        [Display(Name = "Composer names (comma-separated)")]
        public string Composers { get; set; }

        [Display(Name = "Genre")]
        public string Genre { get; set; }

        [Display(Name = "Album Id")]
        public int AlbumId { get; set; }
        [StringLength(200)]
        public string Clerk { get; set; }
        
        public string AlbumName { get; set; }

        public SelectList GenreList { get; set; }

        [Display(Name = "Sample clip")]
        [DataType(DataType.Upload)]
        [Required]
        public string TrackUpload { get; set; }
    }
}