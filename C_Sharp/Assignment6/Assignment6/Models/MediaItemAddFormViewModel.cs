using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Assignment6.Models
{
    public class MediaItemAddFormViewModel
    {
        public int ArtistId { get; set; }

        public string ArtistName { get; set; }

        [Display(Name = "Descriptive caption")]
        [Required, StringLength(200)]
        public string Caption { get; set; }

        [Display(Name = "Media item")]
        [DataType(DataType.Upload)]
        [Required]

        public string Upload { get; set; }
    }
}