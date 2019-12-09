import React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemLink from '@material-ui/core/Link';
import ListItemText from '@material-ui/core/ListItemText';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';

import './Home.css'

const Home = () => {
    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 24,
      };
      const icons ={
            color:"",
            width: 100,
            fill:"#545b67",
            fontSize:"3.5rem"
      } 
      const profileHeading ={
          display: 'flex',
          justifyContent: 'center',
          padding: '20px 0 0 0'
      }
      const profileImage ={
            borderRadius:'100%',
            width: 190,
            display:'flex',
            margin: '0 auto',
      }
    return ( <div className="home">
                <img 
                     style={profileImage}
                     src={process.env.PUBLIC_URL + '/small.png'} 
                     alt="profile-image"
                />
                <Typography variant="h4" style={profileHeading}>
                    Hello, I’m Hamza Alam!
                </Typography>

                <List component="nav" aria-label="secondary mailbox folders" style={flexContainer}>
                    <ListItemLink href="#simple-list" target="_blank">
                        <ListItemText>
                            <TwitterIcon style={icons} />
                        </ListItemText>
                    </ListItemLink>
                    <ListItemLink href="https://github.com/Hamzaalam" target="_blank">
                        <ListItemText>
                            {<GitHubIcon  style={icons}/>}
                        </ListItemText>
                    </ListItemLink>
                    <ListItemLink href="https://facebook.com" target="_blank">
                        <ListItemText>
                            {<FacebookIcon  style={icons}/>}
                        </ListItemText>
                    </ListItemLink>
                </List>

            </div> );
}

export default Home;