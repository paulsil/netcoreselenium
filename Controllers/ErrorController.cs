using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Mvc;

namespace SeleniumMvc.Controllers
{
    [Route("/[controller]")]
    public class ErrorController : Controller
    {
        //[AllowAnonymous]
        //public JsonResult Index()
        //{
        //    var exceptionHandlerPathFeature = HttpContext.Features.Get<IExceptionHandlerPathFeature>();
        //    return new JsonResult(new AppError
        //    {
        //        Message = exceptionHandlerPathFeature?.Error.Message,
        //        StackTrace = exceptionHandlerPathFeature?.Error.StackTrace
        //    });
        //}

        //public class AppError
        //{
        //    public string Message { get; set; }
        //    public string StackTrace { get; set; }
        //}
    }
}
