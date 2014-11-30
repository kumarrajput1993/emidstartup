using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace emidstartup.Models.Classes
{
    public class QuestionOption
    {
        [Key]
        [Column(Order=1)]
        [ForeignKey("Question")]
        public int QuestionId { get; set; }
        [Key]
        [Column(Order = 2)]
        [ForeignKey("Option")]
        public int OptionId { get; set; }
        [Required]
        public bool IsAnswer { get; set; }
        [Required]
        public float Weight { get; set; }

        public Question Question { get; set; }
        public Option Option { get; set; }
    }
}
