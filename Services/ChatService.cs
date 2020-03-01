namespace SeleniumMvc.Services
{
    using System.Collections.Generic;

    public class ChatService {
        public IEnumerable<string> Users {get; set;}

        public ChatService()
        {
            Users = new List<string>();
        }
    }
}