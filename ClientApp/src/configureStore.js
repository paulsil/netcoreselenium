﻿import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import * as History from './history/HistoryReducer';
import * as Navigation from './nav/NavReducer';
import * as Chat from './chat/ChatReducer';
import * as User from './user/UserReducer';
import { loggingMiddleware, webSocketsMiddleware } from './middleware/WebSocketsMiddleware';

export default function configureStore(history, initialState) {
  const reducers = {
      user: User.reducer,
      chat: Chat.reducer,
      history: History.reducer,
      navigation: Navigation.reducer,
  };

  const middleware = [
    thunk,
      routerMiddleware(history),
      loggingMiddleware,
      webSocketsMiddleware
  ];

  // In development, use the browser's Redux dev tools extension if installed
  const enhancers = [];
  const isDevelopment = process.env.NODE_ENV === 'development';
  if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
    enhancers.push(window.devToolsExtension());
  }

  const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer
  });

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers)
  );
}
