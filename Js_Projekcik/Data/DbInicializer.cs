using Js_Projekcik.Models;

namespace Js_Projekcik.Data
{
    public class DbInitializer
    {
        public static void Initialize(AppDbContext context)
        {
            context.Database.EnsureCreated();

            if (context.Categories.Any())
            {
                return;
            }
            var categories = new Category[]
            {
                new Category
                {
                    Name = "Komedia"

                },
                new Category
                {
                    Name = "Horror"
                },
                new Category
                {
                    Name = "Komedia Romantyczna"
                }
                
            };
            foreach (Category c in categories) {
                context.Categories.Add(c);
                
            }
            context.SaveChanges();

        var directors = new Director[]
           {
                new Director
                {
                    FirstName = "Marek",
                    LastName ="Kolano"

                },
                new Director
                {
                    FirstName = "Andrzej",
                    LastName ="Nowak"

                },
                new Director
                {
                    FirstName = "Mateusz",
                    LastName ="Paszko"

                },

           };
            foreach (Director d in directors) {
                context.Directors.Add(d);
                
            }
    context.SaveChanges();

            var films = new Film[]
             {
                new Film
                {
                    Name = "Strzał w ryj",
                    CategoryId = 1,
                    DirectorId = 3,
                    Description = "Felo dostaje w pape"

                },
                 new Film
                {
                    Name = "Tom i Jerry na dzikim zachodzie",
                    CategoryId = 2,
                    DirectorId = 2,
                    Description = "Jerry bije Toma po czym Tom umiera"

                },
                new Film
                {
                    Name = "Felo i Zbyszek B",
                    CategoryId = 1,
                    DirectorId = 3,
                    Description = "Felo pod stokrotka ma solowke ze Zbyszkiem B"

                },
               
         };
            foreach (Film f in films) {
                context.Films.Add(f);
                
            }
    context.SaveChanges();
        }
    }
}
