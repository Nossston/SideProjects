using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Assignment6.Models
{
    public class AlbumAddViewModel
    {
        public AlbumAddViewModel()
        {
            ReleaseDate = DateTime.Now;
            ArtistIds = new List<int>();
            TrackIds = new List<int>();
        }
        [Key]
        public int ArtistId { get; set; }

        [Required, StringLength(100)]
        [Display(Name = "Album name")]
        public string Name { get; set; }

        [Display(Name = "Release date")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime ReleaseDate { get; set; }

        [StringLength(200)]
        [Display(Name = "URL to album image (cover art)")]
        public string UrlAlbum { get; set; }

        [StringLength(200)]
        public string Coordinator { get; set; }

        [Required]
        [Display(Name = "Album's primary genre")]
        public string Genre { get; set; }


        [DataType(DataType.MultilineText)]
        [Display(Name = "Album summary")]
        public string Summary { get; set; }

        public IEnumerable<int> ArtistIds { get; set; }

        public IEnumerable<int> TrackIds { get; set; }
    }
}