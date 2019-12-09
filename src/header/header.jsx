import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import red from '@material-ui/core/colors/red';
import { Link } from 'react-router-dom'
import './header.css';



const Header = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);

    };
    const whiteRed = red[50]; 
    return (<div className='header'>
                    <Tabs
                        className="nav-bar-tabs"
                        value={value}
                        //indicatorColor="primary"
                        TabIndicatorProps={{textColor:'primary'}}
                        textColor="primary"
                        onChange={handleChange}
                        aria-label="disabled tabs example"
                     >
                        <Tab
                            className="nav-bar-tabs"
                            label="Me"
                            component={Link}
                            to="/" 
                        />
                        <Tab                   
                            className="nav-bar-tabs"
                            label="Resume"
                            component={Link}
                            to='/Resume' 
                        />
                        <Tab
                            className="nav-bar-tabs" 
                            label="Projects" 
                            component={Link}
                            to='/Projects'
                        />
                        <Tab 
                            className="nav-bar-tabs" 
                            label="Blog" 
                            component={Link}
                            to='/blog'
                        />
                    </Tabs>
            </div> );
}
 
export default Header