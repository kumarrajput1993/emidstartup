using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace emidstartup.Models.Classes
{
    public class Class
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Value { get; set; }
    }
}
