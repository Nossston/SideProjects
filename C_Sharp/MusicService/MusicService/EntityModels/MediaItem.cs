using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Assignment6.EntityModels
{
    public class MediaItem
    {
        public MediaItem()
        {
            Timestamp = DateTime.Now;
        }

        public int Id { get; set; }

        public string StringId { get; set; }

        public DateTime Timestamp { get; set; }

        [Required, StringLength(200)]
        public string Caption { get; set; }

        public byte[] Content { get; set; }

        [Required]
        public string ContentType { get; set; }

    }
}