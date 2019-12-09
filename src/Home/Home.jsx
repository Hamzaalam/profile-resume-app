import React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemLink from '@material-ui/core/Link';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faHackerrank , faGithub , faTwitter , faStackOverflow} from '@fortawesome/free-brands-svg-icons'

import './Home.css'

const Home = () => {
    const [iconColor, setIconColor] = React.useState("#545b67");
    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 24,
    };
    const icons = {
        width: 100,
        fontSize: "3.5rem"
    }
    const profileHeading = {
        display: 'flex',
        justifyContent: 'center',
        padding: '20px 0 0 0'
    }
    const profileImage = {
        borderRadius: '100%',
        width: 190,
        display: 'flex',
        margin: '0 auto',
    }
   const changeIconColor = (type) =>{
       if(type==='onMouseEnter') setIconColor('aliceblue');
       if(type==='onMouseLeave') setIconColor('#545b67');

   }
    return (<div className="home">
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
                <ListItemText 
                    onMouseEnter={()=>changeIconColor('onMouseEnter')} 
                    onMouseLeave={()=>changeIconColor('onMouseLeave')}
                >
                        {<FontAwesomeIcon icon={faTwitter} style={icons} color={iconColor}/>}
                </ListItemText>
            </ListItemLink>
            <ListItemLink href="https://github.com/Hamzaalam" target="_blank">
                <ListItemText 
                    onMouseEnter={()=>changeIconColor('onMouseEnter')} 
                    onMouseLeave={()=>changeIconColor('onMouseLeave')}
    >                    {<FontAwesomeIcon icon={faGithub} style={icons} color={iconColor}/>}
                </ListItemText>
            </ListItemLink>
            <ListItemLink href="https://facebook.com" target="_blank">
                <ListItemText 
                    onMouseEnter={()=>changeIconColor('onMouseEnter')} 
                    onMouseLeave={()=>changeIconColor('onMouseLeave')}
    >                    {<FontAwesomeIcon icon={faFacebookSquare} style={icons} color={iconColor}/>}
                </ListItemText>
            </ListItemLink>
            <ListItemLink href="#simple-list" target="_blank">
                <ListItemText 
                    onMouseEnter={()=>changeIconColor('onMouseEnter')} 
                    onMouseLeave={()=>changeIconColor('onMouseLeave')}
>                        {<FontAwesomeIcon icon={faStackOverflow} style={icons} color={iconColor}/>}
                </ListItemText>
            </ListItemLink>
            <ListItemLink href="https://www.hackerrank.com/hamzaalam" target="_blank">
                <ListItemText 
                    onMouseEnter={()=>changeIconColor('onMouseEnter')} 
                    onMouseLeave={()=>changeIconColor('onMouseLeave')}
>                        {<FontAwesomeIcon icon={faHackerrank} style={icons} color={iconColor}/>}
                </ListItemText>
            </ListItemLink>
        </List>

    </div>);
}

export default Home;