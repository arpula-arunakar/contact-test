using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsAPI.Models;
using ContactsAPI.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ContactsAPI.Controllers
{
    [Route("api/[controller]")]
    public class ContactController : Controller
    {
        readonly IContactService _contactService;
        public ContactController(IContactService contactService)
        {
            _contactService = contactService;
        }
        // GET: api/<controller>
        [HttpGet]
        public async Task<ActionResult<List<Contact>>> Get()
        {
            return await _contactService.Get();
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Contact>> Get(int id)
        {
            return await _contactService.GetById(id);
        }

        // POST api/<controller>
        [HttpPost]
        public async Task<ActionResult<Contact>> Post([FromBody] Contact contact)
        {
            return await _contactService.Add(contact);
        }

        // PUT api/<controller>/5
        [HttpPut]
        public async Task<ActionResult<Contact>> Put([FromBody] Contact contact)
        {
            return await _contactService.Update(contact);
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<bool>> Delete(int id)
        {
           return await _contactService.Delete(id);
        }
    }
}
