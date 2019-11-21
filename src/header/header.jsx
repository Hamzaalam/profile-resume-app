import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import red from '@material-ui/core/colors/red';
import './header.css';



const Header = () => {
    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const whiteRed = red[50]; 
    return (<div className='header'>
                    <Tabs
                        className="nav-bar-tabs"
                        value={value}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={handleChange}
                        aria-label="disabled tabs example"
                     >
                        <Tab
                            className="nav-bar-tabs"
                            label="Me" 
                        />
                        <Tab                   
                            className="nav-bar-tabs"
                            label="Resume" 
                        />
                        <Tab
                            className="nav-bar-tabs" 
                            label="Projects" 
                        />
                        <Tab
                            className="nav-bar-tabs" 
                            label="Projects" 
                        />
                        <Tab 
                            className="nav-bar-tabs" 
                            label="Blog" 
                        />
                    </Tabs>
            </div> );
}
 
export default Header