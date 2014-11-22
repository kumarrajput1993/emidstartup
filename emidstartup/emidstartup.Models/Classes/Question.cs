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
            RelevanceToSubTopic = new Dictionary<SubTopic, float>();
            RelevanceToSkill = new Dictionary<Skill, float>();
            RelevanceToSubject = new Dictionary<Subject, float>();
            RelevanceToClass = new Dictionary<Class, float>();
        }

        [Key]
        public int Id { get; set; }
        [Required]
        public QuestionType Type { get; set; }
        [Required]
        public string QuestionString { get; set; }
        public TimeSpan MinRequiredTime { get; set; }
        public TimeSpan MaxRequiredTime { get; set; }
        public Dictionary<SubTopic, float> RelevanceToSubTopic { get; set; }
        public Dictionary<Skill, float> RelevanceToSkill { get; set; }
        public Dictionary<Subject, float> RelevanceToSubject { get; set; }
        public Dictionary<Class, float> RelevanceToClass { get; set; }
    }
}
