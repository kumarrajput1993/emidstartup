﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using emidstartup.Models.Classes;
using emidstartup.DataLayer;

namespace emidstartup.Controllers.ApiForInternalUse
{
    public class SkillController : ApiController
    {
        private Context db = new Context();

        // GET api/Skill
        public IQueryable<Skill> GetSkills()
        {
            return db.Skills;
        }

        // GET api/Skill/5
        [ResponseType(typeof(Skill))]
        public IHttpActionResult GetSkill(int id)
        {
            Skill skill = db.Skills.Find(id);
            if (skill == null)
            {
                return NotFound();
            }

            return Ok(skill);
        }

        // PUT api/Skill/5
        public IHttpActionResult PutSkill(int id, Skill skill)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != skill.Id)
            {
                return BadRequest();
            }

            db.Entry(skill).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SkillExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST api/Skill
        [ResponseType(typeof(Skill))]
        public IHttpActionResult PostSkill(Skill skill)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Skills.Add(skill);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = skill.Id }, skill);
        }

        // DELETE api/Skill/5
        [ResponseType(typeof(Skill))]
        public IHttpActionResult DeleteSkill(int id)
        {
            Skill skill = db.Skills.Find(id);
            if (skill == null)
            {
                return NotFound();
            }

            db.Skills.Remove(skill);
            db.SaveChanges();

            return Ok(skill);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SkillExists(int id)
        {
            return db.Skills.Count(e => e.Id == id) > 0;
        }
    }
}