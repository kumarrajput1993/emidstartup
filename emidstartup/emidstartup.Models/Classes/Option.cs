﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace emidstartup.Models.Classes
{
    public class Option
    {
        public Option()
        {
            RelatedSkills = new List<Skill>();
            RelatedSubTopics = new List<SubTopic>();
        }

        [Key]
        public int Id { get; set; }
        [Required]
        public string Value { get; set; }
        [Required]
        public Question RelatedQuestion { get; set; }
        [Required]
        public bool IsAnswer { get; set; }
        public List<Skill> RelatedSkills { get; set; }
        public List<SubTopic> RelatedSubTopics { get; set; }
    }
    
}
