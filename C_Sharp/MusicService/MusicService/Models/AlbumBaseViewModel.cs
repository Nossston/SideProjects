using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Assignment6.Models
{
    public class AlbumBaseViewModel
    {
        [Key]
        public int Id { get; set; }

        [Required, StringLength(100)]
        [Display(Name = "Album name")]

        public String Name { get; set; }

        [Display(Name = "Release date")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}")]
        public DateTime ReleaseDate { get; set; }
        [Display(Name = "Album image (cover art)")]


        public String UrlAlbum { get; set; }

        [Display(Name = "Album's primary genre")]
        public String Genre { get; set; }

        [Display(Name = "Coordinator who looks after the album")]

        public String Coordinator { get; set; }
    }
}