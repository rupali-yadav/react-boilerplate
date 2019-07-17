import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import React from 'react';
import CreateExpensePage from './../components/CreateExpensePage';
import ExpenseDashboardPage from './../components/ExpenseDashboardPage';
import EditExpensePage from './../components/EditExpensePage';
import HelpPage from './../components/HelpPage';
import NotFoundPage from './../components/NotFoundPage';
import Header from './../components/Header';

const AppRouter = ()=>(
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}></Route>
                <Route path="/create" component={CreateExpensePage} ></Route>
                <Route path="/edit/:id" component={EditExpensePage} ></Route>
                <Route path="/help" component={HelpPage} ></Route>
                <Route component={NotFoundPage} ></Route>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;