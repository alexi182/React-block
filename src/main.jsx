import './vendors';
import './components/blog.scss';
import { Router, Route, browserHistory } from 'react-router';

import MainLayout from './layouts/layout';
import IndexPage from './pages/indexPage';
import BlogsPage from './pages/blogsPage';
import UsersPage from './pages/usersPage';

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