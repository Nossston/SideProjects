using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace Assignment6.Models
{
    public class TrackBaseViewModel
    {
        
        [Key]
        public int Id { get; set; }
        [Required, StringLength(100)]
        [Display(Name = "Track name")]
        public String Name { get; set; }


        [Display(Name = "Composer names (comma-separated)")]
        public String Composers { get; set; }
        [Display(Name = "Track Genre")]

        public String Genre { get; set; }

        [Required]
        public int AlbumId { get; set; }


        [Display(Name = "Album name")]
        public String AlbumName { get; set; }


    }
}