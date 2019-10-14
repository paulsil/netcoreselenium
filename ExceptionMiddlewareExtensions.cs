using System.Net;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;

namespace SeleniumMvc
{
    public static class ExceptionMiddlewareExtensions
    {
        public static void ConfigureExceptionHandler(this IApplicationBuilder app)
        {
            app.UseExceptionHandler(appError =>
            {
                appError.Run(async context =>
                {
                context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                context.Response.ContentType = "application/json";

                var contextFeature = context.Features.Get<IExceptionHandlerFeature>();
                if (contextFeature != null)
                {
                    //logger.LogError($"Something went wrong: {contextFeature.Error}");

                    await context.Response.WriteAsync(

                        JsonConvert.SerializeObject(new AppError
                            {
                                StackTrace = contextFeature?.Error.StackTrace,
                                Message = contextFeature?.Error.Message
                            })
                        );
                    }
                });
            });
        }
    }

    public class AppError
    {
        public string Message { get; set; }
        public string StackTrace { get; set; }
    }
}
