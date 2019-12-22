import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Resume from '../Resume/Resume'
import Project from '../Projects/Project'
import Blog from "../Blog/Blog";
import Contact from '../Contact/Contact';

const Main = () => {
    return (<div>
            <Switch>
              <Route path='/resume' component={Resume}/>
              <Route path='/projects' component={Project}/>
              <Route path='/blog' component={Blog}/>
              <Route path='/contact' component={Contact} />
              <Route exact path='/' component={Home}/>
            </Switch>   
            </div> 
            );
}
 
export default Main;