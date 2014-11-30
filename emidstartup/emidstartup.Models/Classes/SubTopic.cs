using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace emidstartup.Models.Classes
{
    public class SubTopic
    {
        [Key]
        public int Id{get; set;}
        [Required]
        public string Value { get; set; }
        [ForeignKey("Topic")]
        public int TopicId { get; set; }
        public Topic Topic { get; set; }
    }
}
