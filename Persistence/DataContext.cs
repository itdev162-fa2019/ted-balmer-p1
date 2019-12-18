using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence {

    public class DataContext: DbContext {
        //public DbSet<Value> Values {get; set; }

        public DbSet<Post> Posts {get; set; }

        public DataContext(DbContextOptions options) : base(options) {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<Value>().HasData(
                new Value { Id = 1, Name = "Blog Post 1" },
                new Value { Id = 2, Name = "Blog Post 2" },
                new Value { Id = 3, Name = "Blog Post 3" }
            );
        }
    }
}