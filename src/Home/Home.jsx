import React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemLink from '@material-ui/core/Link';
import { faFacebookSquare, faHackerrank , faGithub , faTwitter , faStackOverflow} from '@fortawesome/free-brands-svg-icons'
import Icon from './Icon'

const Home = () => {
    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 24,
    };
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
                <Icon icon={faTwitter}/>
            </ListItemLink>
            <ListItemLink href="https://github.com/Hamzaalam" target="_blank">
                <Icon icon={faGithub}/>
            </ListItemLink>
            <ListItemLink href="https://facebook.com" target="_blank">
                <Icon icon={faFacebookSquare}/>
            </ListItemLink>
            <ListItemLink href="#simple-list" target="_blank">
                <Icon icon={faStackOverflow}/>
            </ListItemLink>
            <ListItemLink href="https://www.hackerrank.com/hamzaalam" target="_blank">
                <Icon icon={faHackerrank}/>
            </ListItemLink>
        </List>

    </div>);
}

export default Home;