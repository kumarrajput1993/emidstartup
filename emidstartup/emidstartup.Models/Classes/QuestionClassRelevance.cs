﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace emidstartup.Models.Classes
{
    public class QuestionClassRelevance
    {
        [Key]
        [Column(Order = 1)]
        [ForeignKey("Question")]
        public int QuestionId { get; set; }
        [Key]
        [Column(Order = 2)]
        [ForeignKey("Class")]
        public int ClassId { get; set; }
        [Required]
        public Question Question { get; set; }
        [Required]
        public Class Class { get; set; }
        [Required]
        public float Relevance { get; set; }
    }
}
