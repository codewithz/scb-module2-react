import React from 'react';
import NavbarComponent from './NavbarComponent';
import { BrowserRouter,Route,Switch,Redirect } from 'react-router-dom';
import Products from './Products';
import Posts from './Posts';
import AdminDashboard from './admin/AdminDashboard';
import Home from './Home';
import CityComponent from './CityComponent';
import ProductDetails from './ProductDetails';
import NotFound from './NotFound';

function RoutingHome(){
    return (
       
        <div>
          <NavbarComponent />
            <Switch>
                <Route path="/products/:id" component={ProductDetails} />
                <Route path="/products" component={Products} />
                <Route path="/posts/:year?/:month?" component={Posts} />
                <Route path="/admin" component={AdminDashboard} />
                <Route path="/not-found" component={NotFound} />
                <Route path="/city" render={()=><CityComponent cityName='Mumbai'/>} />
                <Route path="/"  exact component={Home} />
                <Redirect to="/not-found" />
            </Switch>
        </div>
        

      
    )
}

export default RoutingHome;