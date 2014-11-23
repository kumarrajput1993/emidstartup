using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace emidstartup.Models.Classes
{
    public class QuestionSubjectRelevance
    {
        [Key]
        public int Id{get; set;}
        [Required]
        public Question Question { get; set; }
        [Required]
        public Subject Subject { get; set; }
        [Required]
        public float Relevance { get; set; }
    }
}
