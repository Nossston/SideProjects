using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Assignment6.Models
{
    public class MediaItemBaseViewModel : MediaItemContentViewModel
    {
        [Key]
        public int id { get; set; }

        public string StringId { get; set; }

        public DateTime Timestamp { get; set; }

        [Required, StringLength(200)]
        public string Caption { get; set; }
    }
}