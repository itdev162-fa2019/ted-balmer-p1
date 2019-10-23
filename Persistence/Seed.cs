using System;
using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistence {

    public class Seed {

        public static void SeedData(DataContext context) {
            if (!context.Posts.Any()) {
                var Posts = new List<Post>
                {
                    new Post {
                        Title = "First Post",
                        Date = DateTime.Now.AddDays(-11),
                        Author = "Ted",
                        Body = "Post Content..."
                    },
                    new Post {
                        Title = "Second Post",
                        Date = DateTime.Now.AddDays(-6),
                        Author = "Ted",
                        Body = "Post Content..."
                    },
                    new Post {
                        Title = "Third Post",
                        Date = DateTime.Now.AddDays(-3),
                        Author = "Ted",
                        Body = "Post Content..."
                    },
                    new Post {
                        Title = "Fourth Post",
                        Date = DateTime.Now.AddDays(-2),
                        Author = "Ted",
                        Body = "Post Content..."
                    }
                };

                context.Posts.AddRange(Posts);
                context.SaveChanges();
            }
        }
    }
}