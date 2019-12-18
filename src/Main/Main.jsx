import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Resume from '../Resume/Resume'
import Project from '../Projects/Project'
import Blog from "../Blog/Blog";

const Main = () => {
    return (<div>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/resume' component={Resume}/>
              <Route path='/projects' component={Project}/>
              <Route path='/blog' component={Blog}/>
            </Switch>   
            </div> 
            );
}
 
export default Main;