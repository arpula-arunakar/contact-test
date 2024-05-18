using ContactsAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactsAPI.Services
{
    public interface IContactService
    {
        Task<List<Contact>> Get();
        Task<Contact> GetById(int id);
        Task<Contact> Add(Contact contact);
        Task<Contact> Update(Contact contact);
        Task<bool> Delete(int id);
    }
}
