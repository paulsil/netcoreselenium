using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace SeleniumMvc.Controllers
{
    [Route("api/[controller]")]
    public class HistoryController : Controller
    {
        public class UserHistory
        {
            public string Name { get; set; }
            public List<string> Messages { get; set; }
        };

        [HttpGet("[action]")]
        public IEnumerable<UserHistory> Index(int pageIndex)
        {
            return new List<UserHistory> {
                new UserHistory
                {
                    Name = "Bob",
                    Messages = new List<string>
                    {
                        "a", "b", "c"
                    }
                }
            };
        }
    }
}
