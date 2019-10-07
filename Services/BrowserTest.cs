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
            return true;
        }

        public bool Stop()
        {
            return true;
        }
    }
}
