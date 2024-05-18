using ContactsAPI.Models;
using Microsoft.Extensions.Caching.Memory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactsAPI.Services
{
    public class ContactService : IContactService
    {
        private readonly IMemoryCache _memoryCache;
        private const string CacheKey = "ContactList";
        public ContactService(IMemoryCache memoryCache)
        {
            _memoryCache = memoryCache;
            if (!_memoryCache.TryGetValue(CacheKey,out List<Contact> _contacts))
            {
                var contacts = new List<Contact>()
                {
                    new Contact{ID=1, FirstName = "Arun",LastName="Arpula",Mobile="8977412609",Email="Arun@gmail.com",Message="developer"},
                    new Contact{ID=2, FirstName = "Arunakar",LastName="Arpula",Mobile="8977412608",Email="Arunakar@gmail.com",Message="developer"},
                    new Contact{ID=3, FirstName = "Arun",LastName="Arun",Mobile="8977412607",Email="ArunArun@gmail.com",Message="developer"}
                };
                _memoryCache.Set(CacheKey, contacts, TimeSpan.FromMinutes(15));
            }
        }

        public async Task<List<Contact>> Get()
        {
            try
            {
                return _memoryCache.Get<List<Contact>>(CacheKey);
            }
            catch (Exception ex) { throw ex; }
        }
        public async Task<Contact> GetById(int id)
        {
            try
            {
                var contacts = _memoryCache.Get<List<Contact>>(CacheKey);
                return contacts?.FirstOrDefault(p => p.ID == id);
            }
            catch (Exception ex) { throw ex; }
        }

        public async Task<Contact> Add(Contact contact)
        {
            try
            {
                var contacts = _memoryCache.Get<List<Contact>>(CacheKey);
                if (contacts == null)
                {
                    contacts = new List<Contact>();
                }
                contact.ID = contacts.Count > 0 ? contacts.Max(p => p.ID) + 1 : 1;
                contacts.Add(contact);
                _memoryCache.Set(CacheKey, contacts, TimeSpan.FromMinutes(15));
                return contact;
            }
            catch (Exception ex) { throw ex; }
        }

        public async Task<bool> Delete(int id)
        {
            try
            {
                var contacts = _memoryCache.Get<List<Contact>>(CacheKey);
                var _contact = contacts?.FirstOrDefault(p => p.ID == id);
                if (_contact != null)
                {
                    contacts.Remove(_contact);
                    _memoryCache.Set(CacheKey, contacts, TimeSpan.FromMinutes(15));
                }
                return true;
            }
            catch (Exception ex) { throw ex; }
        }

        public async Task<Contact> Update(Contact contact)
        {
            try
            {
                var contacts = _memoryCache.Get<List<Contact>>(CacheKey);
                var _contact = contacts?.FirstOrDefault(p => p.ID == contact.ID);
                if (_contact != null)
                {
                    _contact.FirstName = contact.FirstName;
                    _contact.LastName = contact.LastName;
                    _contact.Email = contact.Email;
                    _contact.Mobile = contact.Mobile;
                    _contact.Message = contact.Message;

                    _memoryCache.Set(CacheKey, contacts, TimeSpan.FromMinutes(15));
                }
                else
                {
                    throw new ArgumentNullException("Contact Not Found");
                }
                return contact;
            }
            catch (Exception ex) { throw ex; }
        }
    }
}
