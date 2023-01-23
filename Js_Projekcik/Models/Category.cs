using System.ComponentModel.DataAnnotations;
using System.Reflection;
using Js_Projekcik.Models;
using Microsoft.EntityFrameworkCore;

namespace Js_Projekcik.Models
{
    public class Category
    {
        [Key]
        public int CategoryId { get; set; }
        public string Name { get; set; }

    }



}
