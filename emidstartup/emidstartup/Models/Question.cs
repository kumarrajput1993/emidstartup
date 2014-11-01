using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace emidstartup.Models
{
    public class Question
    {
        [Key]
        public int Id { get; set; }
        public int QuestionType {get; set;}
        public string QuestionString { get; set; }
        public TimeSpan MinRequiredTime { get; set; }
        public TimeSpan MaxRequiredTime { get; set; }

    }
}