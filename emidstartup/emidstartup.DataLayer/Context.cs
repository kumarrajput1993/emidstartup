using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using emidstartup.Models.Classes;

namespace emidstartup.DataLayer
{
    public class Context: DbContext
    {
        public DbSet<Question> Questions { get; set; }
        public DbSet<QuestionSubTopicRelevance> QuestionSubTopicRelevance { get; set; }
        public DbSet<QuestionSubjectRelevance> QuestionSubjectRelevance { get; set; }
        public DbSet<QuestionSkillRelevance> QuestionSkillRelevance { get; set; }
        public DbSet<QuestionClassRelevance> QuestionClassRelevance { get; set; }
        public DbSet<QuestionSubTopicData> QuestionSubTopicData { get; set; }
        public DbSet<QuestionOption> QuestionOption { get; set; }
    }
}
