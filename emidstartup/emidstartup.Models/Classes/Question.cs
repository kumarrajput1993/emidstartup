using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace emidstartup.Models.Classes
{
    public class Question
    {
        public Question(){
            RelevanceToTopic = new Dictionary<Topic, float>();
        }

        [Key]
        public int Id { get; set; }
        [Required]
        public QuestionType Type { get; set; }
        [Required]
        public string QuestionString { get; set; }
        public TimeSpan MinRequiredTime { get; set; }
        public TimeSpan MaxRequiredTime { get; set; }
        public Dictionary<Topic, float> RelevanceToTopic { get; set; }

    }
}
