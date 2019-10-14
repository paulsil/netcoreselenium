using System.IO;
using System.Reflection;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

namespace SeleniumMvc.Services
{
    public class BrowserTest : IBrowserTest
    {
        public bool Running()
        {
            return true;
        }

        public bool Start()
        {
            // Create driver
            var localPath = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
            var driver = new ChromeDriver();

            // Navigate to example page
            driver.Navigate().GoToUrl("https://bbc.co.uk");

            return true;
            //for bin (Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location))
        }

        public bool Stop()
        {
            return true;
        }
    }
}
