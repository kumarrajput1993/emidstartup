using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace emidstartup.Models.Classes
{
    public class Question
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("QuestionType")]
        public int QuestionTypeId { get; set; }
        [Required]
        public QuestionType QuestionType { get; set; }
        [Required]
        public string QuestionString { get; set; }
        public TimeSpan MinRequiredTime { get; set; }
        public TimeSpan MaxRequiredTime { get; set; }
        
    }
}
