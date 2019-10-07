import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import * as Counter from './Counter';
import * as WeatherForecasts from './WeatherForecasts';
import * as Chat from './Chat';
import * as BrowserTest from './BrowserTest';
import { loggingMiddleware, webSocketsMiddleware } from '../middleware/WebSocketsMiddleware';

export default function configureStore(history, initialState) {
  const reducers = {
    counter: Counter.reducer,
      weatherForecasts: WeatherForecasts.reducer,
      chat: Chat.reducer,
      browserTest: BrowserTest.reducer
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
