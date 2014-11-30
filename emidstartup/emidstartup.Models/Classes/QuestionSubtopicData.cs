using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace emidstartup.Models.Classes
{
    public class QuestionSubTopicData
    {
        [Key]
        [Column(Order=1)]
        [ForeignKey("Question")]
        public int QuestionId { get; set; }
        [Key]
        [Column(Order=2)]
        [ForeignKey("SubTopic")]
        public int SubTopicId { get; set; }
        [ForeignKey("Skill")]
        public int SkillId { get; set; }
        public Question Question { get; set; }
        public SubTopic SubTopic {get; set;}
        public TimeSpan Time {get; set;}
        public Skill Skill { get; set; }
        [Required]
        public int Order { get; set; }
    }
}
