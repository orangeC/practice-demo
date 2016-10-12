import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './ui/App';
import PostList from './ui/PostList';
import NewPost from './ui/NewPost';
import ShowPost from './ui/ShowPost';
import EditPost from './ui/EditPost';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={PostList} />
      <Route path="/write" component={NewPost} />
      <Route path="/post/:id" component={ShowPost} />
      <Route path="/post/:id/edit" component={EditPost} />
    </Route>
  </Router>
);