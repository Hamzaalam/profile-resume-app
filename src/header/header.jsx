import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';

import './header.css';

const styles = {
    Tab: {
        minWidth:'120px',
        textTransform:'none',
        fontSize:'1em !important',
        borderRadius:'5px'
    },
}

const Header = (props) => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);

        console.log(event)
        console.log(newValue)

    };
    const { classes } = props;

    
    return (<div className='header'>
               
                    <Tabs
                        className="nav-bar-tabs"
                        value={value}
                        textColor="primary"
                        TabIndicatorProps={{style: {background:"#e7643e"}}}                        
                        onChange={handleChange}
                        aria-label="disabled tabs example"
                     >
                        <Tab
                            className="nav-bar-tabs"
                            label="Me"
                            component={Link}
                            to="/"
                            classes={{ root: classes.Tab }} 
                            style={value === 0 ? {background:'#1E2023'}:{background:'#e7643e'}}
                        />
                        <Tab                   
                            className="nav-bar-tabs"
                            label="Resume"
                            component={Link}
                            to='/Resume' 
                            classes={{ root: classes.Tab }} 
                            style={value === 1 ? {background:'#1E2023'}:{background:'#e7643e'}}

                        />
                        <Tab
                            className="nav-bar-tabs" 
                            label="Projects" 
                            component={Link}
                            to='/Projects'
                            classes={{ root: classes.Tab }} 
                            style={value === 2 ? {background:'#1E2023'}:{background:'#e7643e'}}

                        />
                         <Tab 
                            className="nav-bar-tabs" 
                            label="Contact" 
                            component={Link}
                            to='/contact'
                            classes={{ root: classes.Tab }} 
                            style={value === 3 ? {background:'#1E2023'}:{background:'#e7643e'}}

                        />
                        <Tab 
                            className="nav-bar-tabs" 
                            label="Blog" 
                            component={Link}
                            to='/blog'
                            classes={{ root: classes.Tab }} 
                            style={value === 4 ? {background:'#1E2023'}:{background:'#e7643e'}}

                        />
                    </Tabs>
            </div> );
}
 
export default withStyles(styles)(Header);