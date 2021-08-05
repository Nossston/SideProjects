using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Assignment6.Models
{
    public class TrackClipViewModel
    {
        public int Id;

        public string AudioContentType { get; set; }

        public byte[] Audio { get; set; }
    }
}