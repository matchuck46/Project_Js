using System.ComponentModel.DataAnnotations;

namespace Js_Projekcik.Models
{
    public class Film
    {
        [Key]
        public int FilmId { get; set; }
        public string Name { get; set; }
        public int CategoryId { get; set; }
        public int DirectorId { get; set; }

        public string Description { get; set;  }

        public virtual Category Category { get; set; }

        public virtual Director Director { get; set; }
        
    }
}
