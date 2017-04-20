import './vendors';
import './components/blog.scss';
import { Router, Route, browserHistory } from 'react-router';

import MainLayout from './layouts/main';
import IndexPage from './pages/index';
import BlogsPage from './pages/blogs';
import UsersPage from './pages/users';

let app = document.getElementById('app');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/" component={IndexPage} />
            <Route path="/blogs" component={BlogsPage} />
            <Route path="/users" component={UsersPage} />
        </Route>
    </Router>
    , app);