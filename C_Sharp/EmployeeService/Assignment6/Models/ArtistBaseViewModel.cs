using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Assignment6.Models
{
    public class ArtistBaseViewModel
    {
        [Key]
        public int Id { get; set; }

        [Required, StringLength(100)]
        [Display(Name = "Artist Name or Stage Name")]
        public String Name { get; set; }
        [Display(Name = "If applicable, artist's birth name")]
        public String BirthName { get; set; }

        [Display(Name = "Birth date or Start date")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}")]
        public DateTime BirthOrStartDate { get; set; }

        [Display(Name = "Artist Photo")]
        public String UrlArtist { get; set; }


        [Display(Name = "Artist's primary genre")]
        public String Genre { get; set; }
        [Display(Name = "Executive who looks after this artist")]

        public String Executive { get; set; }
    }
}