import React from 'react';
import { Route } from 'react-router';
import Layout from './Layout';
import Home from './home/components/Home';
import ChatContainer from './chat/components/ChatContainer';
import HistoryContainer from './history/components/HistoryContainer';
import UserContainer from './user/components/UserContainer';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
        <Route path='/chat' component={ChatContainer} />
        <Route path='/join' component={UserContainer} />
    <Route path='/history/:page?' component={HistoryContainer} />
  </Layout>
);
