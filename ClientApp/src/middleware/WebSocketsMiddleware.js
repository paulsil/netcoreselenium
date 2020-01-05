import { actionTypes, actionCreators } from '../chat/ChatActions';
import * as signalR from '@aspnet/signalr';


const loggingMiddleware = (store) => (next) => (action) => {
  // Our middleware
  console.log(`Redux Log:`, action)
  // call the next function
  next(action);
}

const webSocketsMiddleware = store => {

    let connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();
    connection.start().catch(err => console.error(err.toString()));

    connection.on("ReceiveMessage", function (user, message) {
             store.dispatch({
                type : actionTypes.receiveMessage,
                 user: user,
                 message: message
            });
    });

    return next => action => {
        if(action.type === actionTypes.sendMessage) {
            connection.invoke("SendMessage", action.user, action.message)
        }

        return next(action);
    }

}
export {loggingMiddleware, webSocketsMiddleware};
//export default webSocketsMiddleware;