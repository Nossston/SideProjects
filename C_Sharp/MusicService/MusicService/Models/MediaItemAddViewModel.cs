using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Assignment6.Models
{
    public class MediaItemAddViewModel
    {
        public int ArtistId { get; set; }

        [Display(Name = "Descriptive caption")]
        [Required, StringLength(200)]
        public string Caption { get; set; }

        [DataType(DataType.Upload)]
        [Required]
        public HttpPostedFileBase Upload { get; set; }
    }
}