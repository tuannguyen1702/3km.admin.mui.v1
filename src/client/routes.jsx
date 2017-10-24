import React from "react";
import { Route, IndexRoute } from "react-router";
import { routerActions } from 'react-router-redux';
import { UserAuthWrapper } from 'redux-auth-wrapper';
//import getRoutesUtils from '../utils/routes';
import MasterPage from "./pages/share/_master";
import {Dashboard} from "./pages/dashboard";
import {Category} from "./pages/category";
import {User} from "./pages/user";
import {Product} from "./pages/product";
import {Report} from "./pages/report";
import {District} from "./pages/district";


//if (typeof System.import === 'undefined') System.import = module => Promise.resolve(require(module));


export const routes = (<Route path="/" component={MasterPage}>
        <IndexRoute component={Dashboard} />
        <Route path="dashboard" component={Dashboard} />
        <Route path="category" component={Category} />
        <Route path="user" component={User} />
        <Route path="product" component={Product} />
        <Route path="report" component={Report} />
        <Route path="district" component={District} />
      </Route>)