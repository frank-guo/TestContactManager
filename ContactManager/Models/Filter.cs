using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ContactManager.Models
{
    public class Filter
    {
        [Display(Name = "Search By Last Name")]
        public string LastName { get; set; }

        public string FirstName { get; set; }

        public string EmailAddress { get; set; }

        public string MyLatitude { get; set; }

        public string MyLongitude { get; set; }
    }
}