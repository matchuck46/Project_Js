using System.ComponentModel.DataAnnotations;

namespace Js_Projekcik.Models
{
    public class Director
    {
        [Key]
        public int DirectorId {get; set;}

        public string FirstName {get; set;}
        public string LastName { get; set; }
    }
}
