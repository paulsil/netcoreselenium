using System;
namespace SeleniumMvc.Services
{
    public interface IBrowserTest
    {
        bool Running();
        bool Start();
        bool Stop();
        
    }
}
