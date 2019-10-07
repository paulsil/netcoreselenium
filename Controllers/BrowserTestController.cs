using System;
using Microsoft.AspNetCore.Mvc;
using SeleniumMvc.Services;

namespace SeleniumMvc.Controllers
{
    [Route("api/[controller]")]
    public class BrowserTestController : Controller
    {
        private readonly IBrowserTest _browserTest;

        public BrowserTestController(IBrowserTest browserTest)
        {
            _browserTest = browserTest;
        }

        [HttpGet("[action]")]
        public bool Start()
        {
            _browserTest.Start();
            return true;
        }

        [HttpGet("[action]")]
        public JsonResult Status()
        {
                _browserTest.Start();
            return Json(new {
                testStatus = "running"
            });
        }
    }
}
