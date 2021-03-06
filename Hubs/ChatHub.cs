﻿using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;
using SeleniumMvc.Services;

namespace SeleniumMvc.Hubs
{
    public class ChatHub : Hub
    {

        public ChatHub(ChatService chatService)
        {
            
        }
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
    }

    public class CounterHub : Hub
    {
        private int _counter;

        public CounterHub()
        {
            _counter = 0;
        }

        public async Task IncrementCounter()
        {
            await Clients.All.SendAsync("IncrementCounter", _counter);
        }
    }
}